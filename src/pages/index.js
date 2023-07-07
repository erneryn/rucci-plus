import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import Merchant from 'components/Merchant'
import Tenants from 'components/TenantLogo';
import { getDataFromBucket } from 'lib/api';
import chooseByType from 'utils/chooseValueByType';
import FindUs from 'components/Findus';
import Features from 'components/Feature';

function Template({ data }) {
  
  return (
    <>
      <Head>
        <title>Rucci+</title>
        <meta name="description" content="Rucci+" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home info={chooseByType(data[0], 'header')}/>
        <AboutUs info={chooseByType(data[0], 'introduction')}/>
        <Features info={chooseByType(data[0], 'features')}/>
      {
          data[1]?.map((e,key)=> <Merchant key={key} data={e}/>)
        }
        <Tenants data={data[2]} />
        {/* <Directory/> */}
        <FindUs/>
      </Layout>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  let data = []
  data = await Promise.all([
    getDataFromBucket('sections'),
    getDataFromBucket('merchants'),
    getDataFromBucket('tenants'),
  ])
  return {
    props: { data },
  }
}

export default Template;