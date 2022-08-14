import React from 'react'
import styled from "styled-components"

type ButtonProps = {
  text: string
}

const ButtonBody = styled.button`
width: calc(100% - 0.21rem);
height: 2.5rem;
border: 1px solid rgba(33, 51, 79, 0.15);
margin: 0.4rem 0;
background: #14A800;
`

const ButtonText = styled.p`
color: #FFFFFF;
`

const Button = (props: ButtonProps) => {
  const { text } = props
  return (
    <ButtonBody>
      <ButtonText>{text}</ButtonText>
    </ButtonBody>
  )
}

export default Button