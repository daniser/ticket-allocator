<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Domain\Operator\Projectors;

use Spatie\EventSourcing\EventHandlers\Projectors\Projector;
use TTBooking\TicketAllocator\Domain\Operator\Events;
use TTBooking\TicketAllocator\Domain\Operator\Projections\Operator;
use TTBooking\TicketAllocator\Domain\Ticket\Events as TicketEvents;
use TTBooking\TicketAllocator\Domain\Ticket\Projections\Ticket;

class OperatorProjector extends Projector
{
    public int $weight = 10;

    public function onOperatorEnrolled(Events\OperatorEnrolled $event): void
    {
        (new Operator)->writeable()->create([
            'uuid' => $event->uuid,
            'user_id' => $event->userId,
            'name' => $event->name,
            'online' => $event->online,
            'ready' => $event->ready,
            'ticket_limit' => $event->ticketLimit,
            'complexity_limit' => $event->complexityLimit,
        ]);
    }

    public function onOperatorResigned(Events\OperatorResigned $event): void
    {
        Operator::find($event->uuid)?->writeable()->delete();
    }

    public function onOperatorNameChanged(Events\OperatorNameChanged $event): void
    {
        Operator::find($event->uuid)?->writeable()->update(['name' => $event->name]);
    }

    public function onOperatorCommented(Events\OperatorCommented $event): void
    {
        //Operator::find($event->uuid)?->writeable()->...;
    }

    public function onOperatorTicketLimitAdjusted(Events\OperatorTicketLimitAdjusted $event): void
    {
        Operator::find($event->uuid)?->writeable()->update(['ticket_limit' => $event->ticketLimit]);
    }

    public function onOperatorComplexityLimitAdjusted(Events\OperatorComplexityLimitAdjusted $event): void
    {
        Operator::find($event->uuid)?->writeable()->update(['complexity_limit' => $event->complexityLimit]);
    }

    public function onOperatorOnline(Events\OperatorOnline $event): void
    {
        Operator::find($event->uuid)?->writeable()->update(['online' => true]);
    }

    public function onOperatorOffline(Events\OperatorOffline $event): void
    {
        Operator::find($event->uuid)?->writeable()->update(['online' => false]);
    }

    public function onOperatorReady(Events\OperatorReady $event): void
    {
        Operator::find($event->uuid)?->writeable()->update(['ready' => true]);
    }

    public function onOperatorNotReady(Events\OperatorNotReady $event): void
    {
        Operator::find($event->uuid)?->writeable()->update(['ready' => false]);
    }

    public function onOperatorJoinedTeam(Events\OperatorJoinedTeam $event): void
    {
        //Operator::find($event->uuid)?->writeable()->teams()->attach($event->operatorTeamUuid);
    }

    public function onOperatorLeftTeam(Events\OperatorLeftTeam $event): void
    {
        //Operator::find($event->uuid)?->writeable()->teams()->detach($event->operatorTeamUuid);
    }

    public function onOperatorSetTeams(Events\OperatorSetTeams $event): void
    {
        //Operator::find($event->uuid)?->writeable()->teams()->sync($event->operatorTeamUuids);
    }

    public function onTicketCreated(TicketEvents\TicketCreated $event): void
    {
        $ticket = Ticket::find($event->uuid);
        $operator = Operator::find($event->operatorUuid)?->writeable();
        if (! $ticket || ! $operator) {
            return;
        }

        $operator->increment('bound_tickets');
        $operator->increment('total_complexity', $ticket->complexity);
        $operator->update(['last_bound_at' => now()]);
    }

    public function onTicketMetricsAdjusted(TicketEvents\TicketMetricsAdjusted $event): void
    {
        $ticket = Ticket::find($event->uuid);
        if (! $operator = $ticket?->operator?->writeable()) {
            return;
        }

        $totalComplexity = max(0, $operator->total_complexity + $event->adjustments->complexity);
        $operator->update(['total_complexity' => $totalComplexity]);
    }
}
