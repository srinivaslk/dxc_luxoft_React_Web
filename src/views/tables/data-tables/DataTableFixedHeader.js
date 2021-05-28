import React from "react"
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
  {
    name: "NAME",
    selector: "name",
    sortable: true
  },
  {
    name: "EMAIL",
    selector: "email",
    sortable: true
  },
  {
    name: "ROLE",
    selector: "role",
    sortable: true
  }
]

const data =JSON.parse(localStorage.getItem('user_data'));

class DataTableFixedHeader extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{localStorage.getItem('user_title')}</CardTitle>
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

export default DataTableFixedHeader
