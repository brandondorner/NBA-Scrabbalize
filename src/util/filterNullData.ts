type Props = {
  data: any[]
  filterParam: string
}

// Some of the data from the api is broken so we must filter out the bad values first.
// This function will remove data entries if the specified filterParam is null
const filterNullData = ({ data, filterParam }: Props) => {
  if (!data) {
    return []
  }

  return data.filter((item: any) => item[filterParam])
}

export default filterNullData
