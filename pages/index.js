import { Box, Button, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import Property from "../components/Property"
import { fetchApi } from "../utils/fetchApi"

const Home = ({ propertiesForRent, propertiesForSale }) => {
  return (
    <Box>
      <Banner
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        title1="RENT A HOME"
        title2="Rental Home for Everyone"
        description="Explore from Apartments, builder floors, villas and more"
        buttonLink="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />
      <Flex flexWrap={"wrap"}>
        {propertiesForRent?.map((property) => {
          return <Property key={property.id} property={property} />
        })}
      </Flex>
      <Banner
        imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        title1="BUY A HOME"
        title2="Find, Buy & Own Your Dream Home"
        description="Explore from Apartments, builder floors, villas and more"
        buttonLink="/search?purpose=for-sale"
        buttonText="Explore Buying"
      />
      <Flex flexWrap={"wrap"}>
        {propertiesForSale?.map((property) => {
          return <Property key={property.id} property={property} />
        })}
      </Flex>
    </Box>
  )
}

export default Home

const Banner = ({
  imgUrl,
  title1,
  title2,
  description,
  buttonLink,
  buttonText,
}) => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      p="10"
      marginTop={"5"}
      marginBottom={"5"}
    >
      <Box>
        <Image
          width={500}
          height={600}
          src={imgUrl}
          className="object-contain"
        />
      </Box>
      <Box p="4" marginLeft={"4"}>
        <Text textColor={"gray.400"} fontSize={"sm"}>
          {title1}
        </Text>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          {title2}
        </Text>
        <Text fontSize={"large"}>{description}</Text>
        <Button
          marginTop={"5"}
          bgColor={"blue.300"}
          color={"white"}
          fontSize={"large"}
        >
          <Link href={buttonLink} passHref legacyBehavior>
            <a>{buttonText}</a>
          </Link>
        </Button>
      </Box>
    </Flex>
  )
}

export async function getStaticProps() {
  const url = `/properties/list`
  const forRentParams = {
    locationExternalIDs: "5002",
    purpose: "for-rent",
    hitsPerPage: "25",
  }
  const forSaleParams = {
    locationExternalIDs: "5002",
    purpose: "for-sale",
    hitsPerPage: "25",
  }

  const { hits: propertiesForRent } = await fetchApi(url, forRentParams)
  const { hits: propertiesForSale } = await fetchApi(url, forSaleParams)

  return {
    props: {
      propertiesForRent,
      propertiesForSale,
    },
  }
}
