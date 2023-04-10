<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Domain\Ticket\Actions;

use Illuminate\Support\Str;
use TTBooking\TicketAllocator\Domain\Operator\Projections\Operator;
use TTBooking\TicketAllocator\Domain\Support\Action;
use TTBooking\TicketAllocator\Domain\Ticket\Commands\CreateTicket;
use TTBooking\TicketAllocator\Domain\Ticket\Projections\Ticket;
use TTBooking\TicketAllocator\Models\TicketCategory;

class CreateTicketAction extends Action
{
    public function __invoke(
        TicketCategory|string $category,
        Operator|string $operator = null,
        int $initialWeight = 0,
        int $weightIncrement = 0,
        int $complexity = 0,
        int $delay = 0,
        array $meta = [],
    ): ?Ticket {
        $uuid = (string) Str::orderedUuid();

        $this->dispatch(new CreateTicket(
            uuid: $uuid,
            categoryUuid: is_string($category) ? $category : $category->getKey(),
            operatorUuid: is_string($operator) ? $operator : $operator?->getKey(),
            initialWeight: $initialWeight,
            weightIncrement: $weightIncrement,
            complexity: $complexity,
            delay: $delay,
            meta: $meta,
        ));

        return Ticket::find($uuid);
    }
}
