import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Heading,
  Text,
  Image,
  Avatar,
  Flex,
  AvatarGroup,
  PseudoBox,
  Stack
} from '@chakra-ui/core';

const HeroSectionButton = motion.custom(PseudoBox);
const HeroSection = ({ children }) => {
  return (
    <>
      <Flex
        flexDirection={['column', 'column', 'column', 'row']}
        textAlign={['center', 'center', 'left', 'left']}
      >
        <Box width={['sm', 'md', 'lg', 'xl']} paddingTop="50px" float="right">
          <Image src="/MainBg.svg" />
        </Box>
        <Box
          width={['sm', 'md', 'lg', '2xl']}
          paddingLeft="30px"
          paddingRight="30px"
        >
          <Stack>
            <Box marginTop="30px">
              <Text
                fontWeight="bold"
                fontSize="3xl"
                lineHeight="1.25"
                color="#46DBC9"
              >
                Yet Another
              </Text>
              <Heading fontWeight="extrabold" color="yellow.150">
                {' '}
                JS
                <Heading fontWeight="extrabold" color="black" as="s">
                  {' '}
                  Framework{' '}
                </Heading>
              </Heading>
              <Heading fontWeight="extrabold" color="blue" as="u">
                {' '}
                Community{' '}
              </Heading>

              <Text fontSize="2xl" p="10px">
                {' '}
                We love
                <Text d="inline" color="yellow.150">
                  {' '}
                  &nbsp; Javascript &nbsp;{' '}
                </Text>
                like you and we believe, the most successful developers share
                more than what they take. &hearts;
              </Text>
              <AvatarGroup size="md" max={4} p="10px">
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              </AvatarGroup>
            </Box>
            <Text color="black" fontSize="2xl">
              Join over <b>50+</b>people who already support the cause.
            </Text>
            <Box
              d="flex"
              flexDirection={['column', 'column', 'row', 'row']}
              w={['320px', '400px', '520px', '520px']}
              flex="1"
              py={2}
              px={4}
              borderRadius="12px"
              mb="10px"
              background="white"
              boxShadow="0px 20px 80px rgba(43, 41, 46, 0.4)"
              textAlign="center"
            >
              <Box>
                <PseudoBox
                  textAlign="center"
                  as="input"
                  placeholder="Your Email"
                  type="email"
                  w="290px"
                  py={3}
                  px={5}
                  rounded="md"
                  outline="none"
                />
                <HeroSectionButton
                  as="button"
                  bg="yellow.100"
                  w="180px"
                  py={2}
                  px={4}
                  ml={4}
                  alignItems="center"
                  borderRadius="12px"
                  whileHover={{ scale: 1.1 }}
                  fontWeight="semibold"
                  outline="#FFD64D"
                  _hover={{ bg: 'yellow.150' }}
                >
                  Get Early Access
                </HeroSectionButton>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default HeroSection;
