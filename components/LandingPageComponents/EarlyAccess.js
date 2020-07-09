import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Stack,
  Heading,
  Button,
  Flex,
  Grid,
  Text,
  Image,
  FormControl,
  Input,
  PseudoBox
} from '@chakra-ui/core';
const EarlyAccessButton = motion.custom(PseudoBox);

const EarlyAccess = ({ children }) => {
  return (
    <Flex
      bg="yellow.150"
      justify="center"
      align="center"
      flexDirection="column"
      borderRadius="20px"
      p="20px"
      m="50px"
    >
      <Heading
        fontWeight="extrabold"
        lineHeight={['shorter', 'short', 'normal', 'base']}
        fontSize={['lg', '2xl', '3xl']}
        textAlign="center"
        pb="10px"
      >
        Join the community
      </Heading>
      <Text
        fontWeight="normal"
        lineHeight="shorter"
        fontSize={['sm', 'lg', 'xl', '2xl']}
        w={['80%', '50%']}
        textAlign="center"
        pb="20px"
      >
        We can’t wait to see Awesome developers like you join the JS Makers
        community. Until then, join the waitlist for the Beta.
      </Text>
      {/* Early Access Button Section */}
      <Box
        d="flex"
        flexDirection={['column', 'column', 'row', 'row']}
        flex="1"
        py={2}
        px={4}
        borderRadius="12px"
        mb="10px"
        pb="10px"
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
            w="220px"
            py={3}
            px={5}
            rounded="md"
            outline="none"
          />
          <EarlyAccessButton
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
            onSubmit
          >
            Get Early Access
          </EarlyAccessButton>
        </Box>
      </Box>
    </Flex>
  );
};
export default EarlyAccess;
