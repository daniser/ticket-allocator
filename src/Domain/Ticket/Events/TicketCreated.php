<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Domain\Ticket\Events;

use TTBooking\TicketAllocator\Domain\Support\Event;

class TicketCreated extends Event
{
    public function __construct(
        public readonly string $uuid,
        public readonly string $categoryUuid,
        public readonly object $origin,
    ) {
    }
}
