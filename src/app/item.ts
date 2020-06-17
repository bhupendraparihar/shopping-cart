export interface Item {
    id: string;
    name: string;
    price: number;
    available: boolean;
    quantity: string;
    orderedQuantity?: number;
}
