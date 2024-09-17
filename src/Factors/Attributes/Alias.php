<?php

declare(strict_types=1);

namespace TTBooking\TicketAllocator\Factors\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS)]
class Alias
{
    public function __construct(public string $alias) {}
}
