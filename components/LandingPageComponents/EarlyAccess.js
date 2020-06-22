import React from 'react';
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
  Input
} from '@chakra-ui/core';
const EarlyAccess = ({ children }) => {
  return (
    <Box background="#FFCB1E" borderRadius="20px" my="80px">
      <Flex
        flexDirection="column"
        m={[1, 2, 3, 4]}
        p={[1, 2, 3, 4]}
        justify="center"
        align="center"
      >
        <Heading
          fontWeight="extrabold"
          lineHeight={['shorter', 'short', 'normal', 'base']}
          fontSize={['lg', '2xl', '3xl']}
          textAlign="center"
        >
          Join the community
        </Heading>
        <Text
          fontWeight="normal"
          lineHeight="shorter"
          fontSize={['sm', 'lg', 'xl', '2xl']}
          textAlign="center"
          w={['80%', '50%']}
          h={['10%', '50%']}
        >
          We can’t wait to see Awesome developers like you join the JS Makers
          community. Until then, join the waitlist for the Beta.
        </Text>
      </Flex>
      <Box
        d="flex"
        flexDirection={['column', 'column', 'row', 'row']}
        w={['320px', '400px', '520px', '520px']}
        flex="1"
        py={2}
        px={4}
        rounded="md"
        borderRadius="12px"
        mb="10px"
        background="white"
        boxShadow="0px 20px 80px rgba(43, 41, 46, 0.4)"
      >
        <Box>
          <Box
            as="input"
            placeholder="Your Email"
            type="email"
            w="290px"
            py={2}
            px={4}
            rounded="md"
          />
          <Box
            as="button"
            bg="#FFD64D"
            w="180px"
            py={2}
            px={4}
            ml={4}
            alignItems="center"
            borderRadius="12px"
            fontWeight="semibold"
          >
            Get Early Access
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default EarlyAccess;
