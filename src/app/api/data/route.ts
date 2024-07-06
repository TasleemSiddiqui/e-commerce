// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";
import { json } from "stream/consumers";

// Define the GET handler function
export async function GET(request: NextRequest) {
  
        // Construct the Sanity query
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
      
        // Fetch data from Sanity using the configured client
        const products = await client.fetch(query);
       console.log(products)
        // Return JSON response
        return new NextResponse(JSON.stringify(products), { status: 200, headers: { "Content-type":"application/json"}})
      
   
}


