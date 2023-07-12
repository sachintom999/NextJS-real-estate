import { Box, Flex, Input, Select } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { filterData, getFilterValues } from "../utils/filterData"
import { fetchApi } from "../utils/fetchApi"
import { useEffect } from "react"

const SearchFilter = () => {
  const router = useRouter()
  const [filters, setFilters] = useState(filterData)
  const [locationData, setLocationData] = useState("")

  // console.log("router.query", router.query)
  useEffect(() => {
    console.log("locationData", locationData)
  }, [])

  const query = router.query
  // console.log("filters", filters)
  // console.log("query", query)

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router
    const values = getFilterValues(filterValues)
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({ pathname: path, query })
  }

  return (
    <Flex flexWrap={"wrap"} alignItems={"center"}>
      {filters.map((filter) => {
        return (
          <Box key={filter.queryName}>
            <Select
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
              onChange={(e) => {
                searchProperties({ [filter.queryName]: e.target.value })
              }}
            >
              {filter.items.map((item) => {
                return (
                  <option
                    key={item.value}
                    value={item.value}
                    selected={
                      filter.queryName in query &&
                      query[filter.queryName] === item.value
                        ? true
                        : false
                    }
                  >
                    {item.name}
                  </option>
                )
              })}
            </Select>
          </Box>
        )
      })}
    </Flex>
  )
}

export default SearchFilter
