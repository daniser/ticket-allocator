<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Domain\Operator\Reactors;

use Spatie\EventSourcing\EventHandlers\Reactors\Reactor;
use TTBooking\TicketAllocator\Domain\Operator\Actions\AttachTicketCategoryAction;
use TTBooking\TicketAllocator\Domain\Operator\Actions\DetachTicketCategoryAction;
use TTBooking\TicketAllocator\Domain\Operator\Events\OperatorJoinedTeam;
use TTBooking\TicketAllocator\Domain\Operator\Events\OperatorLeftTeam;
use TTBooking\TicketAllocator\Models\OperatorTeam;

class SyncTicketCategories extends Reactor
{
    public function __construct(
        protected AttachTicketCategoryAction $attachTicketCategory,
        protected DetachTicketCategoryAction $detachTicketCategory,
    ) {
    }

    public function onOperatorJoinedTeam(OperatorJoinedTeam $event): void
    {
        if (! $operatorTeam = OperatorTeam::find($event->operatorTeamUuid)) {
            return;
        }

        ($this->attachTicketCategory)($event->uuid, $operatorTeam->ticketCategories);
    }

    public function onOperatorLeftTeam(OperatorLeftTeam $event): void
    {
        if (! $operatorTeam = OperatorTeam::find($event->operatorTeamUuid)) {
            return;
        }

        ($this->detachTicketCategory)($event->uuid, $operatorTeam->ticketCategories);
    }
}
