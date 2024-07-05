import React, { useEffect, useState } from 'react';
import sanityClient, { SanityDocument } from '@sanity/client';
import { client } from '../../sanity/lib/client';

// Define TypeScript types for your product and category
interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  categories: {
    categoryName: string;
    categorySlug: string;
  }[];
  sizes: string[];
  images: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }[];
}



const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
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

        const productsData: Product[] = await client.fetch(query);
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
