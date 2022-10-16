export interface Item {
  id?: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
}

export type BillItem = Pick<Item, 'name' | 'price'>

export interface Bill {
  id?: string;
  code: string;
  table: number;
  status: boolean;
  notify: boolean;
  items: BillItem[];
}
