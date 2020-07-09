import Head from 'next/head';
import {
  Button, Flex, Image, Heading, Box, Text, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  PseudoBox,
  useDisclosure
} from '@chakra-ui/core';
import React, { useEffect } from 'react';
import HeroSection from '@/components/LandingPageComponents/HeroSection';
import Articlesection from '@/components/LandingPageComponents/ArticleSection';
import EarlyAccess from '@/components/LandingPageComponents/EarlyAccess';
import FooterSection from 'components/LandingPageComponents/FooterSection';
import NavBar from '@/components/NavBar';

const Home = () => {

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    function handleC(event) {
      if (event.key.toLowerCase() === 'c') {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    }

    window.addEventListener('keydown', handleC);
    return () => {
      window.removeEventListener('keydown', handleC);
    }
  }, [onOpen, isOpen, onClose]);


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
        <HeroSection />
        <PseudoBox
          as="button"
          variant="ghost"
          onClick={onOpen}
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          fontSize="md"
          fontWeight="bold"
          outline="none"
          color="#868597"
          _hover={{
            color: "#ffffff"
          }}
          _active={{
            color: "#ffffff",
            transform: "scale(0.98)"
          }}
        >
          Press <Text d="inline" bg="#868597" color="#0B0B0F" height="16px"
            minWidth="16px"
            textAlign="center"
            lineHeight="1.2"
            borderRadius="2.5px"
            padding="3px 1px 5px">C</Text>
             anywhere to contact us!
          </PseudoBox>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          preserveScrollBarGap
        >
          <ModalOverlay />
          <ModalContent bg="yellow.250">
            <ModalHeader>Join the community!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3}>
                Send
                </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Articlesection />
        <EarlyAccess />
        <FooterSection />
      </Flex>
    </>
  );
};

export default Home;
