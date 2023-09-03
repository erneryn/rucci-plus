import Head from 'next/head';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import { getDataFromBucket } from 'lib/api';
import Tenant from 'components/Tenant';

const Merchant = ({ data }) => { 
  return (
    <>
       <Head>
        <title>Rucci+</title>
        <meta name="description" content="Rucci +" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Tenant data={data}/>  
      </Layout>
      <Footer/>

    </>
  )

}


export async function getStaticProps() {
  let data = []
  data = await getDataFromBucket('merchants')
  

  return {
    props: { data },
  }
}

export default Merchant


