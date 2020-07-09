import React from 'react';
import {
  Box,
  Grid,
  Text,
  Image,
  Heading,
  Flex,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/core';
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

const FooterSection = ({ children }) => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent={['center', 'center', 'space-between', 'space-between']}
      alignItems="center"
      h="200px"
      w="100%"
      bg="#F8F8F8"
      padding="10px"
      paddingX={['0px', '0px', '50px', '50px']}
    >
      <Box display="flex" flexDirection="column">
        <Box d={['none', 'none', 'block', 'block']} marginBottom="8px">
          <Image src="/logo.svg" h="60px" w="160px" />
        </Box>
        <Text as="b" fontSize="lg" d={['none', 'none', 'none', 'inline']}>
          &ldquo; A community for JavaScript Developers. &rdquo;
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Box w={['300px', '350px', '400px', '500px']} textAlign="center">
          <List d="flex" justifyContent="space-around">
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaFacebook size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaTwitter size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaDribbble size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaGithub size="2em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaLinkedin size="2em" />
              </ListIcon>
            </ListItem>
          </List>
        </Box>
        <Text as="b" fontSize={['sm', 'sm', 'lg', 'lg']}>
          Copyright @ 2020 JS Makers, all rights Reserved.
        </Text>
      </Box>
    </Flex>
  );
};
export default FooterSection;
