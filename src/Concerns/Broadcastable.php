<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Concerns;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;
use ReflectionClass;
use ReflectionProperty;

trait Broadcastable
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public string $queue = 'event-sourcing';

    protected string $channel = 'ticket-allocator';

    protected ?string $prefix = null;

    protected ?string $name = null;

    public function __sleep()
    {
        unset($this->queue);
        unset($this->socket);

        return array_keys($this->broadcastWith());
    }

    /**
     * Get the tags that should be assigned to the job.
     *
     * @return string[]
     */
    public function tags(): array
    {
        return [$this->channel];
    }

    public function broadcastAs(): string
    {
        return ltrim($this->prefix().'.'.$this->name(), '.');
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

    protected function prefix(): string
    {
        return $this->prefix ??= '';
    }

    protected function name(): string
    {
        return $this->name ??= static::transformClassName();
    }

    protected static function transformClassName(): string
    {
        return Str::kebab(class_basename(static::class));
    }
}
