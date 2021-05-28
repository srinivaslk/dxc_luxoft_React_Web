import React from 'react';
import Select from "./Select"
import Input from './Input'
import DatePicker from './DatePicker'

function FormikControl(props) {
    const { control, ...rest } = props
    switch(control)  {
        case 'input': return <Input {...rest} />
        case 'textarea':
        case 'select': return <Select {...rest} />
        case 'radio':
        case 'checkbox':
        case 'date': return <DatePicker {...rest}/>
        default: return null
    }
    return (<div></div>)
}
export default FormikControl