import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'


export default function Home({ products }) {

  return (
    <div>
      <Head>
        <title>Animal Farm</title>
        <meta name="description" content="Best Animal Farm in London" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList products={products} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products")
  return {
    props: {
      products: res.data
    }
  }
};
