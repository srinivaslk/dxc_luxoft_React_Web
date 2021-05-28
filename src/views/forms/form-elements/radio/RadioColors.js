import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"

class RadioColors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
   
  handleChange = e => {
    const { name, value } = e.target;
    alert("ET");
    alert(value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle><b>Select options for the sales statment.</b></CardTitle>
        </CardHeader>
        <CardBody>
          <div className="">
            <Radio
              label="By Date"
              color="success"
              onChange={this.handleChange}
              value="bydate"
              defaultChecked={true}
              name="exampleRadioColors"
            />
          </div>
          <br />
          <div className="-inline-block mr-1">
            <Radio
              label="By Month"
              color="info"
              onChange={this.handleChange}
              value="bymonth"
              defaultChecked={false}
              name="exampleRadioColors"
            />
          </div>
          <br />
          <div className="-inline-block mr-1">
            <Radio
              label="Category"
              color="warning"
              onChange={this.handleChange}
              value="category"
              defaultChecked={false}
              name="exampleRadioColors"
            />
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default RadioColors
