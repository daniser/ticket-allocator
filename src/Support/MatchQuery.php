<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Support;

use Illuminate\Database\Query\Builder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Facades\DB;
use TTBooking\TicketAllocator\Domain\Operator\Projections\Operator;
use TTBooking\TicketAllocator\Domain\Ticket\Projections\Ticket;

class MatchQuery
{
    public static function make(): Builder
    {
        return DB::query()

        ->select('o.uuid as operator_uuid', 't.uuid as ticket_uuid')

        ->fromSub(

            Ticket::query()
                ->whereNull('handler_uuid')
                ->where('delayed_until', '<=', DB::raw('NOW()'))
                ->orderByRaw('initial_weight + TIMESTAMPDIFF(SECOND, created_at, NOW()) * weight_increment DESC'),

            't'

        )->joinSub(

            Operator::query()
                ->where('online', true)
                ->where('ready', true)
                ->where(static fn (Builder $query) => $query
                    ->whereNull('free_slots')
                    ->orWhere('free_slots', '>', 0)
                )
                ->orderByDesc('free_slots')
                ->orderByDesc('free_complexity'),

            'o',

            static fn (JoinClause $join) => $join
                ->on(static fn (Builder $query) => $query
                    ->whereNull('o.free_complexity')
                    ->orWhere('t.complexity', '<=', 'o.free_complexity')
                    //->whereJsonContains('o.matching->categories', DB::raw('json_quote(t.category_uuid)'))
                )

        )

        ->join('ticket_allocator_operator_category as otc', static fn (JoinClause $join) => $join
            ->on('otc.operator_uuid', 'o.uuid')
            ->on('otc.category_uuid', 't.category_uuid')
        )

        ->take(1);
    }
}
