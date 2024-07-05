export interface Icategory {
  categoryName: string;
  categorySlug: { current: string };
  categoryDescription: string;
}

export interface IProduct {
  _id:any;
  name: string;
  description: string;
  price: number;
  mainImage: any;
  slug: { current: string };
  categories: Icategory[] ;
  sizes:string[];
  images: [];
}
export interface IProducts {
  _id: any;

  name: string;
  description: string;
  price: number;
}
export interface ICart {
  _id: any;
  name: string;
  category:string[];
  price: number;
  mainImage?: any;
  slug:any;
  sizes: string;
  uuid: number;
  qty: number;
}
