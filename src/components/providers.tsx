'use client'
 import  React, { FC } from 'react'
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

const Providers =({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers