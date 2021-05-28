import React from "react"
import {
  Card,
  CardBody,
  FormGroup,
  Button,
  Row,
  Col
} from "reactstrap"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

const formSchema = Yup.object().shape({
  required: Yup.string().required("Required"),
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

class FormValidation extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Formik
            initialValues={{
              required: "",
              email: "",
              url: "",
              number: "",
              date: "",
              minlength: "",
              maxlength: ""
            }}
            validationSchema={formSchema}
          >
            {({ errors, touched }) => (
              <Form className="mt-2">
                <Row>
                <Col md="2" sm="2">
                <FormGroup className="my-3">
                  
                  <Field
                    name="required"
                    placeholder="Select Tenant"
                    id="required"
                    className={`vt-form-control ${errors.required &&
                      touched.required &&
                      "is-invalid"}`}
                  />
                  {errors.required && touched.required ? (
                    <div className="invalid-tooltip mt-25">{errors.required}</div>
                  ) : null}
                </FormGroup>
                </Col>
                <Col md="2" sm="2">
                <FormGroup className="my-3">
                 
                  <Field
                    placeholder="Start Date"
                    type="email"
                    name="email"
                    id="email"
                    className={`vt-form-control ${errors.email &&
                      touched.email &&
                      "is-invalid"}`}
                  />
                  {errors.email && touched.email ? (
                    <div className="invalid-tooltip mt-25">{errors.email}</div>
                  ) : null}
                </FormGroup>
                </Col>
                <Col md="2" sm="2">
                  <FormGroup className="my-3">
                  <Field
                    placeholder="End Date"
                    name="url"
                    id="url"
                    className={`vt-form-control ${errors.url &&
                      touched.url &&
                      "is-invalid"}`}
                  />
                  {errors.url && touched.url ? (
                    <div className="invalid-tooltip mt-25">{errors.url}</div>
                  ) : null}
                </FormGroup></Col>
                <Col md="2" sm="2">
                <FormGroup className="my-3">
                  <Field
                    placeholder="Type Of Reports"
                    name="number"
                    id="number"
                    className={`vt-form-control ${errors.number &&
                      touched.number &&
                      "is-invalid"}`}
                  />
                  {errors.number && touched.number ? (
                    <div className="invalid-tooltip mt-25">{errors.number}</div>
                  ) : null}
                </FormGroup>
                </Col>
                <Col md="2" sm="2">
                <FormGroup className="my-3">
                  <Field
                    placeholder="Type Of Sale"
                    type="date"
                    name="date"
                    id="date"
                    className={`vt-form-control ${errors.date &&
                      touched.date &&
                      "is-invalid"}`}
                  />
                  {errors.date && touched.date ? (
                    <div className="invalid-tooltip mt-25">{errors.date}</div>
                  ) : null}
                </FormGroup>
                </Col>
               
                </Row>
                <Button.Ripple color="primary" type="submit">
                  Go
                </Button.Ripple>
                <Button.Ripple
                  outline
                  color="warning"
                  type="reset"
                  className="mb-1"
                >
                  Cancel
                </Button.Ripple>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    )
  }
}
export default FormValidation
