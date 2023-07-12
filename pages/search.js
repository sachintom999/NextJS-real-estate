import { Box, Flex, Icon, Text } from "@chakra-ui/react"
// import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFilter } from "react-icons/bs"

import Property from "../components/Property"
import SearchFilter from "../components/SearchFilter"
import { fetchApi } from "../utils/fetchApi"
// import NoResult from "../assets/images/noresult.svg"

const Search = ({ properties }) => {
  const [showFilters, setShowFilters] = useState(false)
  const router = useRouter()

  return (
    <Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        cursor={"pointer"}
        padding={"5"}
        bgColor={"blue.100"}
        borderRadius={"5px"}
        onClick={() => {
          setShowFilters(!showFilters)
        }}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Search Property By Filters
        </Text>
        <Icon
          as={BsFilter}
          fontWeight={"bold"}
          fontSize={"1xl"}
          marginLeft={"10px"}
        />
      </Flex>
      {showFilters && <SearchFilter />}
      <Text fontSize={"2xl"} fontWeight={"bold"} marginTop={"10px"}>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap={"wrap"}>
        {properties?.map((property) => {
          return <Property property={property} key={property.id} />
        })}
      </Flex>
      <Flex>
        {properties?.length === 0 && (
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            marginTop="5"
            marginBottom="5"
          >
            {/* <Image src={noresult} /> */}
            {/* <NoResult /> */}
            <Text fontSize="xl" marginTop="3">
              No Result Found.
            </Text>
          </Flex>
        )}
      </Flex>
    </Box>
  )
}

export default Search

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent"
  const rentFrequency = query.rentFrequency || "yearly"
  const minPrice = query.minPrice || "0"
  const maxPrice = query.maxPrice || "1000000"
  const roomsMin = query.roomsMin || "0"
  const bathsMin = query.bathsMin || "0"
  const sort = query.sort || "price-desc"
  const areaMax = query.areaMax || "35000"
  const locationExternalIDs = query.locationExternalIDs || "5002"
  const categoryExternalID = query.categoryExternalID || "4"

  const url = `/properties/list`
  const params = {
    purpose,
    rentFrequency,
    minPrice,
    maxPrice,
    roomsMin,
    bathsMin,
    sort,
    areaMax,
    locationExternalIDs,
    categoryExternalID,
  }

  const data = await fetchApi(url, params)

  return {
    props: {
      properties: data?.hits,
    },
  }
}
