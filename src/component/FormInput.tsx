// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, ChangeEvent } from 'react'
import styled from "styled-components"

type FormInputProps = {
 label: string
 type: string
 value: string
 name: string
 onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Label = styled.label`
 margin-bottom: 0.5rem;
 color: #03435F;
 display: block;
`
const Input = styled.input`
 border: 0.15rem solid rgba(33, 51, 79, 0.15);
 color: #21334F;
 width: calc(100% - 1.5rem);
 padding: 0.4rem 0.5rem;
 display: inline-block;
 margin-bottom: 0.8rem;
 font-size: 0.9rem;
 line-height: 1.5rem;
 height: 1.3rem;
`

const FormInput: (props: FormInputProps) => JSX.Element = (props: FormInputProps) => {
 const { label, type, value, name, onChange } = props


 // const [value, setValue] = useState<string>('')
 return (
  <div style={{ marginBottom: '0.4rem', width: '100%' }}>
   <Label>{label}</Label>
   <Input
    type={type}
    value={value}
    onChange={onChange}
    name={name}
   />
  </div>
 )
}

export default FormInput