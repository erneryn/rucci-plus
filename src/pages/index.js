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
import Team from 'components/Team';
import Overlay from 'components/Overlay';

function Template({ data }) {

  return (
    <>
      <Head>
        <title>Rucci+</title>
        <meta name="description" content="A historic Cafe in medan reincarnated into a space for events, exhibitions, sports, art, workshops, retail, and F&B." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Home info={chooseByType(data[0], 'header')} />
        <AboutUs info={chooseByType(data[0], 'introduction')} />
        <Features info={chooseByType(data[0], 'features')} />
        {
          data[1]?.map((e, key) => <Merchant key={key} data={e} />)
        }
        <Tenants data={data[2]} />
        {/* <Directory/> */}
        <FindUs />
        <Team data={data[3]} />
      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  let data = []
  data = await Promise.all([
    getDataFromBucket('sections'),
    getDataFromBucket('home-merhants'),
    getDataFromBucket('merchants'),
    getDataFromBucket('teams'),
  ])
  return {
    props: { data },
  }
}

export default Template;