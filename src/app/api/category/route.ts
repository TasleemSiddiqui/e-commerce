// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";
import { json } from "stream/consumers";

// Define the GET handler function
export async function GET(request: NextRequest) {
  // Construct the Sanity query
 const query= `*[_type == 'category'] {
  categoryName,
  categorySlug {
    current
  },
  categoryDescription,
}`;

 
  const products = await client.fetch(query);
  console.log(products);
 
  return new NextResponse(JSON.stringify(products), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });
}
