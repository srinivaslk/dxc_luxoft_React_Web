import React from "react"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
  {
    name: "CURRENT DAY SALES TOTAL",
    selector: "current_day_sales_total",
    sortable: true
  },
  {
    name: "WTD TOTAL",
    selector: "wtd_total",
    sortable: true
  },
  {
    name: "MTD TOTAL",
    selector: "mtd_total",
    sortable: true
  },
  {
    name: "YTD TOTAL",
    selector: "ytd_total",
    sortable: true
  }
]

const data = [
  {
    current_day_sales_total:"₹12589",
    wtd_total: "₹4589",
    mtd_total: "₹4589",
    ytd_total:"₹4589"
  }
]

class DataTableTotalFixedHeader extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>TOTAL</CardTitle>
        </CardHeader>
        <CardBody>
          <DataTable
            data={data}
            columns={columns}
            noHeader
            fixedHeader
            fixedHeaderScrollHeight="300px"
          />
        </CardBody>
      </Card>
    )
  }
}

export default DataTableTotalFixedHeader
