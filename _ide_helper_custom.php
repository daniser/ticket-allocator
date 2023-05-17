<?php

namespace Illuminate\Foundation
{
    class Application
    {
        public function factorsAreCached(): bool
        {
            return true;
        }

        public function getCachedFactorsPath(): string
        {
            return '';
        }
    }

    class Vite
    {
        /**
         * @param  array{component: string}  $page
         * @return $this
         */
        public function ticketAllocatorEntryPoint(array $page): static
        {
            return $this;
        }

        public function ticketAllocatorImage(string $asset): string
        {
            return '';
        }
    }
}
