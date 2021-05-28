import React from "react"
  
import { Row, Col, Card, CardHeader, CardTitle, CardBody, FormGroup, Button, Label  } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DataTableBasic from "./DataTableBasic"
import DataTableFixedHeader from "./DataTableFixedHeader"
import DataTableFixedHeadertotal from "./DataTableFixedHeadertotal"
import CustomCheckboxes from "../../forms/form-elements/checkboxes/CheckboxesCustom"
import BasicCheckboxes from "../../forms/form-elements/checkboxes/CheckboxesBasic"
import RadioColors from "../../forms/form-elements/radio/RadioColors"
import FormikValidation from "../../forms/formik/FormikValidation"
import { DataGrid } from '@material-ui/data-grid';
import { XGrid } from '@material-ui/x-grid';
import Radio from "../../../../src/components/@vuexy/radio/RadioVuexy"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import FormikControl from './FormikControl'

const dropdownOptions = [
  { key:"", value:"Please select tenate name"}, 
  { key:"All", value:"All"}, 
  { key: "ocean", value: "Ocean" },
  { key: "blue", value: "Blue" },
  { key: "purple", value: "Purple" },
  { key: "red", value: "Red" },
  { key: "orange", value: "Orange" }
]

const reportsOptions = [
  { key:"", value:"Please select report name"}, 
  { key:"All", value:"All"}, 
  { key: "ocean", value: "Ocean" },
  { key: "blue", value: "Blue" },
  { key: "purple", value: "Purple" },
  { key: "red", value: "Red" },
  { key: "orange", value: "Orange" }
]

const salesOptions = [
  { key:"", value:"Please select sale name"}, 
  { key:"All", value:"All"}, 
  { key: "ocean", value: "Ocean" },
  { key: "blue", value: "Blue" },
  { key: "purple", value: "Purple" },
  { key: "red", value: "Red" },
  { key: "orange", value: "Orange" }
]
const colourOptions = [
  { key: "ocean", value: "Ocean" },
  { key: "blue", value: "Blue" },
  { key: "purple", value: "Purple" },
  { key: "red", value: "Red" },
  { key: "orange", value: "Orange" }
]

const rows = [
  {
    id: 1,
    username: 'defunkt',
    age: 38,
  },
];
const formSchema = Yup.object().shape({
  required: Yup.string().required("Required"),
  color: Yup.string()
  .min(4, "Too Short!")
  .required('Color is required!'),
  tenant:Yup.string().required("Required"),
  reports:Yup.string().required("Required"),
  sales:Yup.string().required("Required"),
  StartDate: Yup.date()
             .required("Required"),
  EndDate: Yup
        .date()
        .when(
            "StartDate",
            (StartDate, schema) => StartDate && schema.min(StartDate))
            .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  number: Yup.number().required("Required"),
  url: Yup.string()
    .url()
    .required("Required"),
  date: Yup.date().required("Required"),
  minlength: Yup.string()
    .min(4, "Too Short!")
    .required("Required"),
  maxlength: Yup.string()
    .max(5, "Too Long!")
    .required("Required")
})
const onSubmit = values => {
  alert(values)
};
class DataTables extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    dateForm: true,
    monthForm: false,
    catForm: false
    };
    
  }
   
  handleChange = e => {
    const { name, value } = e.target;
    if(value === "bymonth")
    {
      this.setState({dateForm:false});
      this.setState({monthForm:true});
    }
    else if(value === "category")
    {
      this.setState({dateForm:false});
      this.setState({monthForm:false});
      this.setState({catForm:true});
    }
    else if(value === "bydate")
    {
      this.setState({dateForm:true});
      this.setState({monthForm:false});
      this.setState({catForm:false});
    }
    
    alert("ET");
    alert(value);
    this.setState({
      [name]: value
    });
  };
  
  render() {
    return (
      <React.Fragment>
       
        <Row>
          <Col sm="12">
            <DataTableFixedHeader />
          </Col>
          
        </Row>
        
        
      </React.Fragment>
    )
  }
}

export default DataTables
