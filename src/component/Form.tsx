import React from 'react'
import styled from "styled-components"

type FormProps = {
 children: any
}

// const Form = styled.form`

// `

const Form = (props: FormProps) => {
  return (
    <form>
     {props.children}
    </form>
  )
}

export default Form