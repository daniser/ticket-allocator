<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Domain\Support;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;
use ReflectionClass, ReflectionProperty;
use Spatie\EventSourcing\StoredEvents\ShouldBeStored;
use TTBooking\TicketAllocator\Contracts\ShouldAffect;

abstract class Event extends ShouldBeStored implements ShouldAffect, ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels {
        __sleep as __modelSleep;
    }

    public string $queue = 'event-sourcing';

    protected string $channel = 'ticket-allocator';

    protected ?string $aggregateRootName = null;

    protected ?string $eventName = null;

    public function __sleep()
    {
        $properties = $this->__modelSleep();

        unset($this->queue);
        unset($this->socket);

        return $properties;
    }

    /**
     * Get the tags that should be assigned to the job.
     *
     * @return string[]
     */
    public function tags(): array
    {
        return [$this->channel, $this->aggregateRootName().':'.$this->aggregateRootUuid()];
    }

    public function broadcastAs(): string
    {
        return $this->aggregateRootName().'.'.$this->eventName();
    }

    public function broadcastOn()
    {
        return new Channel($this->channel);
    }

    public function broadcastWith(): array
    {
        return collect((new ReflectionClass($this))->getProperties(ReflectionProperty::IS_PUBLIC))
            ->reject(fn (ReflectionProperty $property) => property_exists(__CLASS__, $property->name))
            ->mapWithKeys(fn (ReflectionProperty $property) => [$property->name => $property->getValue($this)])
            ->all();
    }

    protected function aggregateRootName(): string
    {
        return $this->aggregateRootName ?? self::parseClassName()[0];
    }

    protected function eventName(): string
    {
        return $this->eventName ?? self::parseClassName()[1];
    }

    /**
     * @return string[]
     */
    private static function parseClassName(): array
    {
        static $components;
        return $components ??= explode('-', Str::kebab(class_basename(static::class)), 2);
    }
}
