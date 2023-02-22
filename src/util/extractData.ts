type Props = {
  data: any
  currentPage: number
  perPage: number
  displayAllData?: boolean
}

// Since the api we are using does not support pagination we must do our per_page logic here.
// We normally would do this with react-query but until the api creator gets back to me this will
// have to do.
const extractData = ({ data, currentPage, perPage, displayAllData }: Props) => {
  const sliceEnd = currentPage * perPage
  const sliceStart = displayAllData ? 0 : (currentPage - 1) * perPage

  return data.slice(sliceStart, sliceEnd)
}

export default extractData
