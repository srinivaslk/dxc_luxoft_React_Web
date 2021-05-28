import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CustomInput
} from "reactstrap"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
class CheckboxBasic extends React.Component {


  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Select options for the sales statment</CardTitle>
        </CardHeader>
        <CardBody>
        <List >
          <ListItem key="1" >
          <CustomInput
            inline
            type="checkbox"
            id="1"
            label="By Date"
            defaultChecked
          />
         
          </ListItem>
          <ListItem key="2" >
          <CustomInput
            inline
            type="checkbox"
            id="2"
            label="By Month"
          />
          </ListItem>
          <ListItem key="3" >
          <CustomInput
            inline
            type="checkbox"
            id="3"
            label="Category"
          />
          </ListItem>
     
    </List>
        </CardBody>
      </Card>
    )
  }
}
export default CheckboxBasic
