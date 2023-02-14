type Props = {
  data: any
  currentPage: number
  perPage: number
}

// Since the api we are using does not support pagination we must do our per_page logic here.
// We normally would do this with react-query but until the api creator gets back to me this will
// have to do.
const extractData = ({ data, currentPage, perPage }: Props) => {
  return data.slice(0, currentPage * perPage)
}

export default extractData
