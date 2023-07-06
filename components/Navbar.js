import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react"
import Link from 'next/link'
import { FcAbout, FcHome, FcKey, FcMenu, FcSearch } from 'react-icons/fc'





const Navbar = () => {
    return (<Flex p="2" borderBottom={"1px"} borderColor={"gray.100"}>

        <Box
            fontSize={"3xl"}
            fontWeight={"bold"}
            color={"blue.400"}

        >
            <Link href="/" paddingLeft={"2"}>Realtor</Link>
        </Box>
        <Spacer />
        <Box>

            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<FcMenu />}
                    variant={"outline"}
                    color={"red.400"}


                >

                </MenuButton>

                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>
                            Home
                        </MenuItem>
                    </Link>




                    <Link href="/search" passHref>
                        <MenuItem icon={<FcSearch />}>
                            Search
                        </MenuItem>
                    </Link>




                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}>
                            Buy Property
                        </MenuItem>
                    </Link>



                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FcKey />}>
                            Rent Property
                        </MenuItem>
                    </Link>
                </MenuList>






            </Menu>


        </Box>



    </Flex>)
}

export default Navbar