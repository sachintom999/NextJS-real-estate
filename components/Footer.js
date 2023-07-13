import { Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box
      position={"fixed"}
      bottom={"0"}
      left={"0%"}
      w="full"
      textAlign={"center"}
      p="2"
      borderTop={"1px"}
      borderColor={"gray.100"}
      bgColor={"gray.200"}
    >
      © 2023 DreamListings Inc.
    </Box>
  )
}

export default Footer
