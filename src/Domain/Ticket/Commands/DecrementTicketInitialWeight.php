<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Domain\Ticket\Commands;

use Spatie\EventSourcing\Commands\AggregateUuid;
use Spatie\EventSourcing\Commands\HandledBy;
use TTBooking\TicketAllocator\Domain\Ticket\TicketAggregateRoot;

#[HandledBy(TicketAggregateRoot::class)]
class DecrementTicketInitialWeight
{
    public function __construct(
        #[AggregateUuid] public readonly string $uuid,
        public readonly int $weightPoints,
    ) {
    }
}
