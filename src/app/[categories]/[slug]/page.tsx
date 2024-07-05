import Slug from "./slugPage"
const page = ({ params }:{ params: { slug: string } }) => {
  return (

    <div><Slug slug={params.slug}/></div>
  )
}

export default page;