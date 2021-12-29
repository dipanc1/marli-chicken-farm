import Head from 'next/head'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Marleen's Animal Farm</title>
        <meta name="description" content="Best Animal Farm in London" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  )
}
