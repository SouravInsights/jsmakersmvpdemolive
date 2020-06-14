import React from 'react';
import {
    Box,
    Stack,
    Heading,
    Button,
    Flex,
    Grid,
    Text,
    Image
} from '@chakra-ui/core';

const HeroSection = ({ children }) => {
    return (
        <Grid>
            <Box w="100%">
                <Stack>
                    <Heading
                        fontSize="3xl"
                        fontWeight="extrabold"
                        color="yellow.150"
                        position="absolute"
                        w="485px"
                        h="95px"
                        left="100px"
                        top="217px"
                    >
                        JS
                    </Heading>
                    <Heading
                        font="heading"
                        fontSize="4xl"
                        fontWeight="extrabold"
                        color="blue"
                        as="u"
                        position="absolute"
                        w="604px"
                        h="92px"
                        left="100px"
                        top="284px"
                    >
                        Community
                    </Heading>
                    <Heading
                        as="s"
                        fontSize="3xl"
                        fontWeight="extrabold"
                        position="absolute"
                        w="485px"
                        h="95px"
                        left="180px"
                        top="217px"
                    >
                        Framework
                    </Heading>
                    <Text
                        fontSize={["sm", "md", "lg", "xl", "2xl"]}
                        position="absolute"
                        w="496px"
                        h="68px"
                        left="102px"
                        top="431px"
                    >
                        We love <Text d="inline" color="yellow.150">Javascript</Text> like you and we believe, the most successful
                            developers share more than what they take.
                        </Text>
                </Stack>
            </Box>
            <Box
                position="absolute"

                left="695px"
                top="228px"
                size={["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"]}
            >
                <Image src="/MainBg.svg" />
            </Box>
        </Grid>
    );
};

export default HeroSection;
