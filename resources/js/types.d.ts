export type TicketSortBy = "weight" | "duration";

export type SortDirection = "asc" | "desc";

export interface IOperator {
    uuid: string;
    name: string;
    online: boolean;
    ready: boolean;
    tickets: ITicket[];
    ticket_limit: ?number;
    complexity_limit: ?number;
    get free_slots(): ?number;
    get free_complexity(): ?number;
}

export interface ITicket {
    uuid: string;
    category_uuid: string;
    handler_uuid: ?string;
    initial_weight: number;
    weight_increment: number;
    complexity: number;
    delay: number;
    created_at: string;
    get duration(): number;
    get weight(): number;
}
