'use client'
import React, { FC, useState } from 'react'

import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'

const ImageComponent:FC<{mainImage:any,images:[]}> = ({mainImage,images}) => {
    const [path, setpath] = useState('')
  return (
    <div>
    <div className='h-[400px] w-[300px] overflow-hidden my-5'>
        <Image src={!path?`${urlForImage(mainImage)}`:path} alt="xyz" width={300} height={400} className='max-h-[500px] max-w-[400px] min-h-[200px] min-w-[150px] h-fit w-fit object-center '/>
    </div>
    <div className='flex justify-center gap-3 flex-wrap'>
    {/* <Image src={'/categories/shirts.jpg'} alt="xyz" width={70} height={70} className='cursor-pointer' onClick={()=>setpath("/categories/shirts.jpg")}/>
    <Image src={'/categories/shoes.webp'} alt="xyz" width={70} height={70}  className='cursor-pointer' onClick={()=>setpath("/categories/shoes.webp")}/>
    <Image src={'/categories/accessories.jpg'} alt="xyz" width={70} height={70} className='cursor-pointer' onClick={()=>setpath("/categories/accessories.jpg")}/>
    <Image src={'/categories/stiched.jpeg'} alt="xyz" width={70} height={70} className='cursor-pointer' onClick={()=>setpath("/categories/stiched.jpeg")} /> */}
    {images.map((image,i)=>(    <Image key={i} src={urlForImage(image)} alt="xyz" width={70} height={70} className='cursor-pointer' onClick={()=>setpath(urlForImage(image))} />
))}



    </div>
    </div>

  )
}

export default ImageComponent