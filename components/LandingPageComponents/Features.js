import React from "react";
import { Box, Image, Flex } from "@chakra-ui/core";
import FeatureTabs from "./FeatureTabs.js";

const featuresData = [
  {
    title: "Dashboard that you Love",
    detail:
      "While you focus on creating good content for your audience, we make sure that your dashboard look clean, calmer and feels more welcoming.",
    src:
      "https://uploads.codesandbox.io/uploads/user/494356db-302f-42b1-94bf-11db031a5d4f/jHx--dashboard.png"
  },
  {
    title: "Import your artcles",
    detail:
      "We make it seamless for you to import your articles but it’s always good to start off fresh.",
    src:
      "https://uploads.codesandbox.io/uploads/user/494356db-302f-42b1-94bf-11db031a5d4f/P8qd-importarticle.png"
  }
];

const Features = () => {
  const [featureSrc, setFeatureSrc] = React.useState(
    "https://uploads.codesandbox.io/uploads/user/494356db-302f-42b1-94bf-11db031a5d4f/jHx--dashboard.png"
  );

  const handleClick = clickedSrc => {
    setFeatureSrc(clickedSrc);
  };

  return (
    <Flex
      mt={["10px", "40px", "80px", "80px"]}
      mb={["10px", "40px", "140px", "180px"]}
      flexDirection={["column", "column", "row", "row"]}
      justify="center"
    >
      <Box>
        <Image src={featureSrc} />
      </Box>
      <Flex flexDirection="column">
        {featuresData.map(({ title, detail, src }, i) => (
          <FeatureTabs
            title={title}
            detail={detail}
            src={src}
            key={i}
            handleClick={handleClick}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Features;
