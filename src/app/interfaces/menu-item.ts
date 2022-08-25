import { Categories } from "../enums/categories";

export interface MenuItem {
    item: string,
    category: Categories,
    price: number
}