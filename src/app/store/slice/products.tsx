'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../../../sanity/lib/client';
import products from '../../../../sanity/products';
import { IProduct } from '@/lib/types';
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
export const fetchProducts= createAsyncThunk(
    'products/listofproducts',
    async (data:any, thunkAPI) => {
        console.log("data",data)
      const response = await client.fetch(query)
      return response
    },
  )

// Define the initial state using that type

const initialState:IProduct[]=[];

export const productSlice = createSlice({
  name: 'productSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{
    products:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("extraReducers fetchProducts",action)
      state.products = action.payload
    })
  },
})

export const { } = productSlice.actions


export default productSlice.reducer