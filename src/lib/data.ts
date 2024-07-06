import { client } from "@/../sanity/lib/client"; // Adjust import as per your setup
import { IProduct, Icategory } from "./types";
import { error } from "console";

export async function getProducts() {
  const query = `*[_type == 'product'] {
    _id,
    name,
    slug,
    description,
    price,
    stock,
    mainImage {
      _type,
      asset {
        _ref,
        _type
      }
    },
   categories[] -> {
    categoryName,
    categorySlug
  },
    sizes,
    images[] {
      _type,
      asset {
        _ref,
        _type
      }
    }
  }`;

  const products = await client.fetch(query);

  return products;
}
export async function getCategory() {
//   const query = `*[_type == 'category'] {
//   categoryName,
//   categorySlug {
//     current
//   },
//   categoryDescription,
// }`;

  const products = await fetch('api/category');
  const category = await products.json();

  return category;
}
export async function getCategorybySlug(slug: string) {
const query = `*[_type == "product" && references(*[_type == "category" && categorySlug.current == '${slug}']._id)] {
  _id,
  name,
  slug,
  description,
  price,
  stock,
  mainImage {
    _type,
    asset {
      _ref,
      _type
    }
  },
  categories[] -> {
    categoryName,
    categorySlug 
  },
  sizes,
  'images': images[] {
    _type,
    asset {
      _ref,
      _type
    }
  }
}`

const products = await client.fetch(query);

return products;
}

export async function getProductBySlug(slug:string) {

  const query = `*[_type == 'product' && slug.current == '${slug}'] {
  _id,
  name,
  slug,
  description,
  price,
  stock,
  mainImage {
    _type,
    asset {
      _ref,
      _type
    }
  },
  'categories': categories[] -> {
    categoryName,
    categorySlug 
  },
  sizes,
  'images': images[] {
    _type,
    asset {
      _ref,
      _type
    }
  }
}
`
const products= await client.fetch(query);
return products;
  
}