import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

function Select(props) {
    const { label, name, options, ...rest} = props
    return (
        <div className='my-3 vt-form-control'>
            <label htmlFor={name}><b>{label}</b></label>
            <Field as='select' id={name} name={name} {...rest}  >
            <option defaultValue>Select {name} name</option>
                {options.map(option => {
                    return(
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />

        </div>
    )
}

export default Select