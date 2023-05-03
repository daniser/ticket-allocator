<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Contracts;

use Illuminate\Support\Collection;
use TTBooking\TicketAllocator\Contracts\Factor as FactorContract;

interface FactorDictionary
{
    /**
     * @return Collection<string, class-string<FactorContract>>
     */
    public function getDictionary(): Collection;
}
