<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Domain\Operator\Projections;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\EventSourcing\Projections\Projection;
use TTBooking\TicketAllocator\Database\Factories\OperatorFactory;
use TTBooking\TicketAllocator\Domain\Ticket\Projections\Ticket;
use TTBooking\TicketAllocator\Models\OperatorTeam;

/**
 * @property string $name
 * @property bool $online
 * @property bool $ready
 * @property int $ticket_limit
 * @property int $complexity_limit
 *
 * @property Collection<int, OperatorTeam> $teams
 * @property Collection<int, Ticket> $tickets
 */
class Operator extends Projection
{
    use HasFactory;

    protected $table = 'ticket_allocator_operators';

    protected $guarded = [];

    protected static function newFactory(): OperatorFactory
    {
        return OperatorFactory::new();
    }

    /**
     * @return BelongsToMany<OperatorTeam>
     */
    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(OperatorTeam::class, 'ticket_allocator_team_operator', 'operator_uuid', 'team_uuid');
    }

    /**
     * @return HasMany<Ticket>
     */
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'handler_uuid');
    }
}
