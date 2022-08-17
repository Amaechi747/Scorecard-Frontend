import React from 'react'
import styled from "styled-components"

type ButtonProps = {
  text: string
}

const ButtonBody = styled.button`
&:hover {
letter-spacing: 0.4px;
}
width: calc(100% - 0.21rem);
height: 2.5rem;
font-weight: 700;
cursor: pointer;
border: unset;
margin: 0.4rem 0;
background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);
color: #fff
`

const AuthButton = (props: ButtonProps) => {
  const { text } = props
  return (
    <ButtonBody type='submit'>
      {text}
    </ButtonBody>
  )
}
export default AuthButton;