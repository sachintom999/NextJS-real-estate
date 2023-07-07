
import { Avatar, Box, Image, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import millify from 'millify'



const Property = () => {

    const price = 12
    const rentFrequency = "monthly"
    return (
        <Link href={`/property`} passHref>
            <Flex w={"420px"} flexWrap={"wrap"} justifyContent={"flex-start"} p="5" paddingTop={"0px"} cursor={"pointer"}  >
                <Box bgColor={"pink"}>
                    <Image src={`https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4`} width={"400"} height={"260"} />
                </Box>
                <Box w="full"  >
                    <Flex paddingTop={"2"} alignItems={"center"} justifyContent={"space-between"} >
                        <Flex alignItems={"center"} >
                            <Box paddingRight={"3"} color={"green.400"} >{true && <GoVerified />}</Box>
                            <Text fontWeight={"bold"} fontSize={"lg"} >AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box paddingRight={"2"}>
                            <Avatar size={"sm"}  ></Avatar>
                        </Box>
                    </Flex>
                    <Flex alignItems={"center"} p="1" justifyContent={"space-between"} width={"250px"} color={"blue.400"}>
                        1
                        <FaBed /> | 2 <FaBath /> | {millify(1233)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize={"lg"} >
                        The is a very large room with amenities and bathrooms which can be
                    </Text>
                </Box>
            </Flex>
        </Link>



    )
}

export default Property