import Head from 'next/head';
import { Button, Flex, Image } from '@chakra-ui/core';
import HeroSection from 'components/LandingPageComponents/HeroSection';

const Home = () => {

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>JS Makers</title>
      </Head>

      <HeroSection />

    </Flex>
  );
};

export default Home;
