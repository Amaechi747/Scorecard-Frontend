import React from 'react'
import styled from "styled-components"

type FormProps = {
 children: any
}

// const Form = styled.form`

// `

const Form = (props: FormProps) => {
  return (
    <div>
     {props.children}
    </div>
  )
}

export default Form