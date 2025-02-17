<template>
    <div class="d-inline-block">
        <v-btn size="small" class="ticket justify-start px-2" :class="{ overflow }" :ripple="false" flat width="100">
            <v-icon v-if="ticket.meta?.icon" :icon="ticket.meta?.icon ?? ''" color="white" />
            <span class="overflow-hidden text-white">
                <span class="title relative inline-block">{{ title() }}</span>
            </span>
            <v-overlay
                open-on-click
                activator="parent"
                location-strategy="connected"
                location="bottom center"
                origin="auto"
            >
                <v-card width="500" :prepend-icon="ticket.meta?.icon ?? ''" :title="cardTitle" :subtitle="cardSubtitle">
                    <v-tabs v-model="tab">
                        <v-tab value="properties">{{ $t("properties") }}</v-tab>
                        <v-tab value="metrics">{{ $t("metrics") }}</v-tab>
                        <v-tab value="details">{{ $t("details") }}</v-tab>
                    </v-tabs>
                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="properties" class="prose">
                                <div v-if="typeof cardContent === 'string'" v-html="md.render(cardContent)"></div>
                                <table v-else>
                                    <tbody>
                                        <tr v-for="[key, value] in cardContent" :key="key">
                                            <th>{{ key }}</th>
                                            <td v-html="md.renderInline(value)"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </v-window-item>
                            <v-window-item value="metrics" class="prose">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>{{ $t("issued_on") }}</th>
                                            <td>{{ createdAtInfo }}</td>
                                        </tr>
                                        <tr v-if="delayedUntil.isAfter($dayjs())">
                                            <th>{{ $t("delayed_until") }}</th>
                                            <td>{{ delayedUntilInfo }}</td>
                                        </tr>
                                        <tr v-if="boundAt">
                                            <th>{{ $t("bound_at") }}</th>
                                            <td>{{ boundAtInfo }}</td>
                                        </tr>
                                        <tr v-if="reservedUntil && reservedUntil.isAfter($dayjs())">
                                            <th>{{ $t("reserved_until") }}</th>
                                            <td>{{ reservedUntilInfo }}</td>
                                        </tr>
                                        <tr v-if="acceptedAt">
                                            <th>{{ $t("accepted_at") }}</th>
                                            <td>{{ acceptedAtInfo }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t("current_weight") }}</th>
                                            <td>{{ currentWeightInfo }}</td>
                                        </tr>
                                        <tr>
                                            <th>{{ $t("complexity") }}</th>
                                            <td>{{ ticket.complexity + " " + t("units") }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </v-window-item>
                            <v-window-item value="details" class="prose">
                                <table class="table-fixed">
                                    <thead>
                                        <tr>
                                            <th class="w-1/3">{{ $t("factor") }}</th>
                                            <th class="text-center">
                                                <em class="metric" :title="$t('initial_weight')">W<sub>0</sub></em>
                                            </th>
                                            <th class="text-center">
                                                <em class="metric" :title="$t('weight_increment')">W<sub>i</sub></em>
                                            </th>
                                            <th class="text-center">
                                                <em class="metric" :title="$t('complexity')">C</em>
                                            </th>
                                            <th class="text-center">
                                                <em class="metric" :title="$t('delay_sec')">D</em>
                                            </th>
                                            <th class="text-center">
                                                <em class="metric" :title="$t('reservation_sec')">R</em>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(adjustments, factorUuid) in ticket.metrics ?? {}" :key="factorUuid">
                                            <th>{{ factors[factorUuid]?.name ?? $t("unknown") }}</th>
                                            <td class="text-right">{{ adjustments.initial_weight ?? 0 }}</td>
                                            <td class="text-right">{{ adjustments.weight_increment ?? 0 }}</td>
                                            <td class="text-right">{{ adjustments.complexity ?? 0 }}</td>
                                            <td class="text-right">{{ adjustments.delay ?? 0 }}</td>
                                            <td class="text-right">{{ adjustments.reservation ?? 0 }}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>{{ $t("total") }}</th>
                                            <td class="text-right">{{ ticket.initial_weight }}</td>
                                            <td class="text-right">{{ ticket.weight_increment }}</td>
                                            <td class="text-right">{{ ticket.complexity }}</td>
                                            <td class="text-right">{{ ticket.delay }}</td>
                                            <td class="text-right">{{ ticket.reservation }}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-overlay>
        </v-btn>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import dayjs from "dayjs";
import MarkdownIt from "markdown-it";
import MarkdownItAttrs from "markdown-it-attrs";
import { usePage } from "@inertiajs/vue3";
import Ticket from "@/models/Ticket";
import { CardContent, Factor, DisplayOptions } from "@/types";
import { useSharedOptions, useSharedDisplayMode } from "@/shared";

const props = defineProps<{
    ticket: Ticket;
}>();

const { t } = useI18n();

const factors = computed(() => usePage().props.factors as Record<string, Factor>);

const tab = ref(null);

const md = new MarkdownIt({ linkify: true }).use(MarkdownItAttrs);

const options = useSharedOptions();
const mode = useSharedDisplayMode();

const config = computed(() => usePage().props.options as DisplayOptions);

const createdAt = computed(() => dayjs(props.ticket.created_at));

const delay = computed(() => dayjs.duration(props.ticket.delay, "s"));

const delayedUntil = computed(() => createdAt.value.add(delay.value));

const boundAt = computed(() => (props.ticket.bound_at ? dayjs(props.ticket.bound_at) : null));

const reservation = computed(() => (props.ticket.reservation ? dayjs.duration(props.ticket.reservation, "s") : null));

const reservedUntil = computed(() =>
    boundAt.value && reservation.value ? boundAt.value!.add(reservation.value!) : null,
);

const acceptedAt = computed(() => (props.ticket.accepted_at ? dayjs(props.ticket.accepted_at) : null));

const createdAtInfo = computed(() => `${createdAt.value.format("lll")} (${createdAt.value.fromNow()})`);

const delayedUntilInfo = computed(
    () => `${delayedUntil.value.format("lll")} (${t("time_left", { time: delayedUntil.value.fromNow(true) })})`,
);

const boundAtInfo = computed(() =>
    boundAt.value ? `${boundAt.value!.format("lll")} (${boundAt.value!.fromNow()})` : null,
);

const reservedUntilInfo = computed(() =>
    reservedUntil.value
        ? `${reservedUntil.value!.format("lll")} (${t("time_left", { time: reservedUntil.value!.fromNow(true) })})`
        : null,
);

const acceptedAtInfo = computed(() =>
    acceptedAt.value ? `${acceptedAt.value!.format("lll")} (${acceptedAt.value!.fromNow()})` : null,
);

const currentWeightInfo = computed(
    () =>
        `${compact(props.ticket.weight)} (${t("increment_per_second", {
            units: props.ticket.weight_increment.toString(),
        })})`,
);

const threshold = computed(() => config.value[`${mode.value}_threshold`]);

const position = computed(() => props.ticket[mode.value]);

const compact = (value: number) => (value < 100000 ? value : value.toExponential(1));

const categoryName = () => props.ticket.meta?.category_name ?? props.ticket.category?.name ?? "";

const categoryShort = () => props.ticket.meta?.category_short ?? props.ticket.category?.short ?? "";

const title = () => (options.altInfo ? (props.ticket.meta?.title ?? categoryShort()) : categoryShort());

const cardTitle = computed(() => props.ticket.meta?.card_title ?? "Title");

const cardSubtitle = computed(() => props.ticket.meta?.card_subtitle ?? categoryName());

const cardContent = computed(() => (props.ticket.meta?.card_content as CardContent) ?? []);

const overflow = computed(() => position.value > threshold.value);

const animation = computed(() => ({
    delay: -position.value + "s",
    duration: threshold.value + "s",
}));
</script>

<style scoped>
@import "tailwindcss/theme" theme(reference);

.ticket {
    animation-delay: v-bind("animation.delay");
    animation-duration: v-bind("animation.duration");
}

.ticket:deep(.v-btn__content) {
    overflow: hidden;
}

.ticket:hover .title {
    animation: 4s linear infinite alternate ticker;
}

@keyframes ticker {
    0%,
    25% {
        left: 0;
        transform: translateX(0%);
    }
    75%,
    100% {
        left: 100%;
        transform: translateX(-100%);
    }
}

.metric {
    @apply cursor-help border-b-[1px] border-dotted border-black;
}
</style>
