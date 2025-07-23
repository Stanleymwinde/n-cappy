import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

type TeamMember = {
  name: string;
  role: string;
  photoUrl: string;
};

type TeamAlbumProps = {
  members: TeamMember[];
};

// Custom hook to detect prefers-reduced-motion
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

export const TeamAlbum: React.FC<TeamAlbumProps> = ({ members }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) return; // no animation

    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % members.length);
        setFade(true); // fade in next
      }, 1000); // fade out duration 1s
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, [members.length, prefersReducedMotion]);

  return (
    <Box width="100%" height="100vh">
      {/* Text section above */}
      <Box
        w="100%"
        py={8}
        textAlign="center"
        color="Black"
        fontFamily="Poppins, sans-serif"
      >
        <Text
  fontSize={{ base: "3xl", md: "5xl" }}
  fontWeight="bold"
  mb={2}
  bgGradient="linear(to-r, blue.900, teal.300)"
  bgClip="text"
  color="blue.900"
>
  Nabo Capital Team (Leadership in Living Colour)
</Text>
       
        <Text fontSize={{ base: "md", md: "xl" }} maxW="600px" mx="auto">
      These are the quiet moments, the defining moments and unspoken values of Nabo 
        </Text>
      </Box>

      {/* Image slideshow below */}
      <Box
        position="relative"
        w="100%"
        height="calc(100vh - 120px)" // subtract approx height of text section
        overflow="hidden"
      >
        {members.map((member, idx) => {
          const isActive = idx === activeIndex;

          return (
            <Image
              key={member.photoUrl}
              src={member.photoUrl}
              alt={member.name}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              objectFit="cover"
              userSelect="none"
              draggable={false}
              opacity={isActive && fade ? 1 : 0}
              transition="opacity 1s ease"
              pointerEvents={isActive ? "auto" : "none"}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TeamAlbum;
