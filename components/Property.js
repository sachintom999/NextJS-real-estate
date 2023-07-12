import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import { GoVerified } from "react-icons/go"
import { FaBed, FaBath } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import millify from "millify"
import DefaultImage from "../assets/images/house.jpg"
import Image from "next/image"

const Property = ({
  property: {
    externalID,
    isVerified,
    rentFrequency,
    title,
    coverPhoto,
    rooms,
    baths,
    area,
    agency,
    price,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        w={"420px"}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
        p="5"
        paddingTop={"0px"}
        cursor={"pointer"}
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto?.url : DefaultImage}
            width={"400"}
            height={"300"}
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop={"2"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <Box paddingRight={"3"} color={"green.400"}>
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                AED {price}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box paddingRight={"2"}>
              <Avatar
                size={"sm"}
                src={agency ? agency?.logo?.url : ""}
              ></Avatar>
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            p="1"
            justifyContent={"space-between"}
            width={"250px"}
            color={"blue.400"}
          >
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize={"lg"}>
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}

export default Property
