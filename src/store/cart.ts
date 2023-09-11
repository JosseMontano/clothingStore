import { writable } from "svelte/store";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}


export const cart = writable<CartItem[]>([]);