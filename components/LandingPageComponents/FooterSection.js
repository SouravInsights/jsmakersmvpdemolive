import React from 'react';
import { Box, Grid, Text, Image } from '@chakra-ui/core';

const FooterSection = ({ children }) => {
  return (
    <Grid>
      <Box w="100%">
        <Box
          position="absolute"
          width="212px"
          height="68px"
          left="124px"
          top="3380px"
        >
          <Image src="/logo.png" />
        </Box>
        <Text
          position="absolute"
          width="360px"
          height="22px"
          left="124px"
          top="3464px"
          fontSize="lg"
          fontWeight="bold"
        >
          “A community for JavaScript Developers.”
        </Text>
        <Text
          position="absolute"
          width="375px"
          height="21px"
          left="941px"
          top="3464px"
          fontSize="md"
          fontWeight="bold"
        >
          Copyright @ 2020 JS Makers, all rights Reserved.
        </Text>
      </Box>
    </Grid>
  );
};
export default FooterSection;
