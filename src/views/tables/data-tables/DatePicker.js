import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
function DatePicker(props) {
    const { label, name, ...rest} = props;
    return (
        <div className='my-3 vt-form-control'>
            <label htmlFor={name}><b>{label}</b></label>
            
            <Field name={name}>
                {
                    ({form, field}) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return <DateView id={name}
                        {...field}
                        {...rest}
                         selected={value}
                         onChange={val => setFieldValue(name, val)}
                         canBeDisabled={true} />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />

        </div>
    )
}

export default DatePicker