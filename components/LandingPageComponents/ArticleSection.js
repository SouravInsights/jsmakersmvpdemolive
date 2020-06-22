import React from 'react';
import {
  Box,
  Heading,
  Button,
  Flex,
  Grid,
  Text,
  Image,
  Avatar,
  AvatarBadge,
  Link,
  Stack
} from '@chakra-ui/core';

const Articlesection = ({ children }) => {
  return (
    <Box>
      <Flex align="center" justify="center" flexDirection="column">
        <Heading
          fontSize={['lg', 'xl', '3xl']}
          fontWeight="extrabold"
          mt="70px"
          textAlign="center"
        >
          Write for Yourself
          <br />
          Not for Audience
        </Heading>
        <Text
          textAlign="center"
          fontSize={['md', 'lg', 'xl', '2xl']}
          mt="15px"
          size={['80%', '70%', '60%', '40%']}
        >
          Successful developers have the passion and the confidence to document
          their knowledge and share stuff what they think is cool.
        </Text>

        <Box
          position="relative"
          d="inline-block"
          w="80vw"
          h="370px"
          justifyContent="space-between"
          overflow="auto"
          whiteSpace="nowrap"
        >
          <Box
            position="relative"
            w={['230px', '300px', '300px', '300px']}
            h="300px"
            bg="#FFCB1E"
            d="inline-block"
            borderRadius="5px"
            margin="10px"
            borderLeft="5px solid #F9AF1A"
          >
            <Box
              position="absolute"
              w="90px"
              h="90px"
              rounded="50%"
              border="3px solid #F9AF1A"
              left="20px"
              top="20px"
              bg="white"
            >
              <Image src="/profileimg.jpg" rounded="50%" />
            </Box>
            <Box position="absolute" top="120px" margin="20px">
              <Heading position="absolute" size="sm">
                Addy Osmani - Google
              </Heading>
              <Box
                position="absolute"
                w={['190px', '250px', '250px', '250px']}
                h="120px"
                top="30px"
                fontSize="sm"
                whiteSpace="pre-line"
              >
                <Text>
                  Write about what you learn. It pushes you to understand topics
                  better. It's OK if no one reads what you write. You get a lot
                  out of just doing it for YOU.
                </Text>
              </Box>
            </Box>

            <Box
              position="absolute"
              right="20px"
              top="20px"
              h="20px"
              w="20px"
              bg="balck"
            >
              <Image src="link_icon.png" />
            </Box>
          </Box>

          <Box
            position="relative"
            w={['230px', '300px', '300px', '300px']}
            h="300px"
            bg="#E6375A"
            d="inline-block"
            borderRadius="5px"
            margin="10px"
            borderLeft="5px solid #D12245"
          >
            <Box
              position="absolute"
              w="90px"
              h="90px"
              rounded="50%"
              border="3px solid #D12245"
              left="20px"
              top="20px"
              bg="white"
            >
              <Image src="/profileimg.jpg" rounded="50%" />
            </Box>
            <Box position="absolute" top="120px" margin="20px">
              <Heading position="absolute" size="sm">
                Addy Osmani - Google
              </Heading>
              <Box
                position="absolute"
                w={['190px', '250px', '250px', '250px']}
                h="120px"
                top="30px"
                fontSize="sm"
                whiteSpace="pre-line"
              >
                <Text>
                  Write about what you learn. It pushes you to understand topics
                  better. It's OK if no one reads what you write. You get a lot
                  out of just doing it for YOU.
                </Text>
              </Box>
            </Box>

            <Box
              position="absolute"
              right="20px"
              top="20px"
              h="20px"
              w="20px"
              bg="balck"
            >
              <Image src="link_icon.png" />
            </Box>
          </Box>

          <Box
            position="relative"
            w={['230px', '300px', '300px', '300px']}
            h="300px"
            bg="#4799EB"
            d="inline-block"
            borderRadius="5px"
            margin="10px"
            borderLeft="5px solid #2A7CCE"
          >
            <Box
              position="absolute"
              w="90px"
              h="90px"
              rounded="50%"
              border="3px solid #2A7CCE"
              left="20px"
              top="20px"
              bg="white"
            >
              <Image src="/profileimg.jpg" rounded="50%" />
            </Box>
            <Box position="absolute" top="120px" margin="20px">
              <Heading position="absolute" size="sm">
                Addy Osmani - Google
              </Heading>
              <Box
                position="absolute"
                w={['190px', '250px', '250px', '250px']}
                h="120px"
                top="30px"
                fontSize="sm"
                whiteSpace="pre-line"
              >
                <Text>
                  Write about what you learn. It pushes you to understand topics
                  better. It's OK if no one reads what you write. You get a lot
                  out of just doing it for YOU.
                </Text>
              </Box>
            </Box>

            <Box
              position="absolute"
              right="20px"
              top="20px"
              h="20px"
              w="20px"
              bg="balck"
            >
              <Image src="link_icon.png" />
            </Box>
          </Box>

          <Box
            position="relative"
            w={['230px', '300px', '300px', '300px']}
            h="300px"
            bg="#2ecc71"
            d="inline-block"
            borderRadius="5px"
            margin="10px"
            borderLeft="5px solid #27ae60"
          >
            <Box
              position="absolute"
              w="90px"
              h="90px"
              rounded="50%"
              border="3px solid #27ae60"
              left="20px"
              top="20px"
              bg="white"
            >
              <Image src="/profileimg.jpg" rounded="50%" />
            </Box>
            <Box position="absolute" top="120px" margin="20px">
              <Heading position="absolute" size="sm">
                Addy Osmani - Google
              </Heading>
              <Box
                position="absolute"
                w={['190px', '250px', '250px', '250px']}
                h="120px"
                top="30px"
                fontSize="sm"
                whiteSpace="pre-line"
              >
                <Text>
                  Write about what you learn. It pushes you to understand topics
                  better. It's OK if no one reads what you write. You get a lot
                  out of just doing it for YOU.
                </Text>
              </Box>
            </Box>

            <Box
              position="absolute"
              right="20px"
              top="20px"
              h="20px"
              w="20px"
              bg="balck"
            >
              <Image src="link_icon.png" />
            </Box>
          </Box>

          <Box
            position="relative"
            w={['230px', '300px', '300px', '300px']}
            h="300px"
            bg="#9b59b6"
            d="inline-block"
            borderRadius="5px"
            margin="10px"
            borderLeft="5px solid #8e44ad"
          >
            <Box
              position="absolute"
              w="90px"
              h="90px"
              rounded="50%"
              border="3px solid #8e44ad"
              left="20px"
              top="20px"
              bg="white"
            >
              <Image src="/profileimg.jpg" rounded="50%" />
            </Box>
            <Box position="absolute" top="120px" margin="20px">
              <Heading position="absolute" size="sm">
                Addy Osmani - Google
              </Heading>
              <Box
                position="absolute"
                w={['190px', '250px', '250px', '250px']}
                h="120px"
                top="30px"
                fontSize="sm"
                whiteSpace="pre-line"
              >
                <Text>
                  Write about what you learn. It pushes you to understand topics
                  better. It's OK if no one reads what you write. You get a lot
                  out of just doing it for YOU.
                </Text>
              </Box>
            </Box>

            <Box
              position="absolute"
              right="20px"
              top="20px"
              h="20px"
              w="20px"
              bg="balck"
            >
              <Image src="link_icon.png" />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
export default Articlesection;
