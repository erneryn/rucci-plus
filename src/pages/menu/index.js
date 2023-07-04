import Head from 'next/head';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import MenuComponent from '../../components/Menu'


const Menu = () => { 
  return (
    <>
       <Head>
        <title>Rucci+</title>
        <meta name="description" content="Rucci +" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MenuComponent/>
      </Layout>
      <Footer/>

    </>
  )

}

export default Menu