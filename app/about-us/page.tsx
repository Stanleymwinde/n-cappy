"use client";

import { Box } from "@chakra-ui/react";
import Herosection from "@/components/About/Herosection";
import Heritagesection from "@/components/About/Heritagesection";
import Teamsection from "@/components/About/Teamsection";
import { Connect } from "@/components/individual";
import { TeamsAlbum } from "@/components/About";
import CallToActionCommon from "@/components/common/CallToAction";
import Contactinfo from "@/components/About/Contactinfo";




const AboutPage: React.FC = () => {
  return (
    <Box>
     
      <Herosection />
      <Heritagesection />
      <Teamsection />
      <TeamsAlbum />
      <Connect />
       <Contactinfo />
      <CallToActionCommon />
      
   

    </Box>
  );
};

export default AboutPage;


