<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use TTBooking\TicketAllocator\Database\Factories\OperatorTeamFactory;
use TTBooking\TicketAllocator\Domain\Operator\Actions\AttachTicketCategoryAction;
use TTBooking\TicketAllocator\Domain\Operator\Actions\DetachTicketCategoryAction;
use TTBooking\TicketAllocator\Domain\Operator\Projections\Operator;

/**
 * @method static static create(array $parameters = [])
 * @method static static|null find(string $uuid)
 * @property non-empty-string $uuid
 * @property string $name
 * @property string $description
 * @property array|null $matching
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon|null $deleted_at
 * @property Collection<int, Operator> $operators
 * @property Collection<int, TicketCategory> $ticketCategories
 */
class OperatorTeam extends Model
{
    use HasUuids, SoftDeletes, HasFactory;

    protected $table = 'ticket_allocator_operator_teams';

    protected $primaryKey = 'uuid';

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = ['uuid', 'name', 'description', 'matching'];

    protected static function booted(): void
    {
        /** @var AttachTicketCategoryAction $attachTicketCategory */
        $attachTicketCategory = app(AttachTicketCategoryAction::class);
        /** @var DetachTicketCategoryAction $detachTicketCategory */
        $detachTicketCategory = app(DetachTicketCategoryAction::class);

        static::restored(static function (self $team) use ($attachTicketCategory) {
            foreach ($team->operators as $operator) {
                $attachTicketCategory($operator, $team->ticketCategories);
            }
        });

        static::deleting(static function (self $team) use ($detachTicketCategory) {
            foreach ($team->operators as $operator) {
                $detachTicketCategory($operator, $team->ticketCategories);
            }
        });
    }

    protected static function newFactory(): OperatorTeamFactory
    {
        return OperatorTeamFactory::new();
    }

    /**
     * @return BelongsToMany<Operator>
     */
    public function operators(): BelongsToMany
    {
        return $this->belongsToMany(Operator::class, 'ticket_allocator_team_operator', 'team_uuid', 'operator_uuid')
            ->using(TeamOperator::class);
    }

    /**
     * @return BelongsToMany<TicketCategory>
     */
    public function ticketCategories(): BelongsToMany
    {
        return $this->belongsToMany(TicketCategory::class, 'ticket_allocator_team_category', 'team_uuid', 'category_uuid')
            ->using(TeamCategory::class);
    }
}
