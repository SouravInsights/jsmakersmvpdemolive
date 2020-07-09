import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/core";

function FeatureTabs({ title, detail, src, handleClick }) {
  return (
    <Accordion
      allowToggle
      w={["200px", "80%", "500px", "500px"]}
      mr={["auto", "auto", "40px", "60px"]}
      ml={["auto", "auto", "none", "none"]}
      onClick={() => handleClick(src)}
    >
      <AccordionItem>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4}>{detail}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default FeatureTabs;
