import { cloneElement } from "react"
import { fetchApi } from "../utils/fetchApi"

const Home = ({ hits }) => {

  console.log('hits', hits)
  return (<div> ---- Home -----</div>)
}

export default Home



export async function getStaticProps(/*context*/) {

  const url = `/properties/list`
  const params = {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '2',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  }

  const data = await fetchApi(url, params)



  return {
    props: {

      hits: data.hits

    }
  }


}