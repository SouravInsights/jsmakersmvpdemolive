import Head from 'next/head';
import { Button, Flex, Image } from '@chakra-ui/core';
import HeroSection from '@/components/LandingPageComponents/HeroSection';
import Articlesection from '@/components/LandingPageComponents/ArticleSection';
import EarlyAccess from '@/components/LandingPageComponents/EarlyAccess';
import FooterSection from 'components/LandingPageComponents/FooterSection';
import NavBar from '@/components/NavBar';

const Home = () => {
  return (
    <>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        marginTop="30px"
      >
        <Head>
          <title>JS Makers</title>
        </Head>
        <NavBar />
        <HeroSection />
        <Articlesection />
        <EarlyAccess />
        {/*<FooterSection /> */}
        {/*<FooterSection /> */}
      </Flex>
    </>
  );
};

export default Home;
