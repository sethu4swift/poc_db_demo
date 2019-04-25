import React from 'react'
import { Col, Label, Input } from 'reactstrap'

export const InputBox = ({
  field,
  isRequired = false,
  placeholder = 'placeholder',
  input,
  name,
  label,
  type,
  form
}) => {
  return (
    <Col xs="12" sm="4">
      <Label htmlFor={name}>
        {label}
        {isRequired && <span style={{ color: 'red' }}>{' *'}</span>}
      </Label>
      <Input
        {...input}
        placeholder={placeholder}
        {...field}
        type={type}
        invalid={
          form.touched[field.name] && form.errors[field.name] ? true : false
        }
      />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          {form.errors[field.name]}
        </div>
      )}
    </Col>
  )
}
