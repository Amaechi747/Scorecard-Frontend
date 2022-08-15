import React from 'react'
import styled from "styled-components"

type ButtonProps = {
  text: string
}

const ButtonBody = styled.button`

&:hover{
background: #249800;
}
width: calc(100% - 0.21rem);
font-weight: 500;
font-size: 1rem;
line-heigth: 1.5rem;
border: unset;
padding: 0.8rem;
text-align: center;
color: #fff;
margin: 0.4rem 0;
background: #14A800;
cursor: pointer
`

// const ButtonText = styled.p`
// color: #FFFFFF;
// `

const FormButton = (props: ButtonProps) => {
  const { text } = props
  return (
    <ButtonBody>
      {/* <ButtonText> */}
        {text}
        {/* </ButtonText> */}
    </ButtonBody>
  )
}

export default FormButton