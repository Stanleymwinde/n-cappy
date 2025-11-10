import Herosection from "@/components/About/Herosection";
import Heritagesection from "@/components/About/Heritagesection";
import Teamsection from "@/components/About/Teamsection";
import ConnectwithOurTeam from "@/components/About/ConnectwithOurTeam";

import { TeamsAlbum } from "@/components/About";
import CallToActionCommon from "@/components/common/CallToAction";
import Contactinfo from "@/components/About/Contactinfo";

const AboutPage: React.FC = () => {
  return (
    <>
      <Herosection />
      <Heritagesection />
      <Teamsection />
      <TeamsAlbum />
      <ConnectwithOurTeam />
      <Contactinfo />
      <CallToActionCommon />
    </>
  );
};

export default AboutPage;
