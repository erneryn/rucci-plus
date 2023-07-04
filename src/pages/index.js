import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import Merchant from 'components/Merchant'
import Tenants from 'components/Tenants';
import Directory from 'components/Directory';
import SpacialMenu from 'components/Menu';
import Introduction from 'components/Introduction';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';
import Contacts from 'components/Contact';
import { ParallaxBanner } from "react-scroll-parallax";


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
          data[1].map((e,key)=> <Merchant key={key} data={e}/>)
        }
        <Tenants data={data[2]} />
        {/* <Directory/> */}
        <FindUs/>
      </Layout>
      <Footer/>
      {/* <Layout navbar={chooseByType(data, 'navigation')}>
        <Home info={chooseByType(data, 'header')}/>
         <AboutUs info={chooseByType(data, 'about')}/>
        <SpacialMenu info={[chooseByType(data, 'drink'), chooseByType(data, 'food')]}/>
        <Introduction info={chooseByType(data, 'history')}/>
        <Gallery info={[chooseByType(data, 'gallery'), chooseByType(data, 'food')]}/> 
      </Layout>
      <Footer>
        <VideoIntro url={chooseByType(data, 'video')}/>
        <Contacts info={chooseByType(data, 'contact')}/>
      </Footer> */}
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
  console.log(data)
  return {
    props: { data },
  }
}

export default Template;