import { Box, Flex, Icon } from "@chakra-ui/react"
import Image from "next/image"
import { useContext } from "react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import "react-horizontal-scrolling-menu/dist/styles.css"
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs"

const ImageScrollBar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          itemID={item.id}
          key={item.id}
          width="910px"
          height="500px"
          overflow={"hidden"}
        >
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt="propery-pic"
          />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default ImageScrollBar

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      padding={"2"}
      cursor={"pointer"}
      fontSize={"2xl"}
      d={["none", "none", "none", "block"]}
    >
      <Icon as={BsFillArrowLeftCircleFill} onClick={() => scrollPrev()} />
    </Flex>
  )
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      padding={"2"}
      fontSize={"2xl"}
      cursor={"pointer"}
    >
      <Icon as={BsFillArrowRightCircleFill} onClick={() => scrollNext()} />
    </Flex>
  )
}
