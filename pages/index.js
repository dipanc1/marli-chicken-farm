import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'


export default function Home({ products, admin }) {
  const [close, setClose] = useState(true)

  return (
    <div>
      <Head>
        <title>Animal Farm</title>
        <meta name="description" content="Best Animal Farm in London" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <ProductList products={products} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products")
  return {
    props: {
      products: res.data,
      admin
    }
  }
};
