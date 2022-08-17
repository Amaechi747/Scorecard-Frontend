import React from 'react'
import styled from "styled-components"

type CardProps = {
 children: any
}
// padding: 2rem 2.5rem;

const CardBody = styled.div`
 background: #fff;
 width: 50%;
 height: 80vh;
 margin: 3rem auto 0;
`

const Card = (props: CardProps) => {
 return (
  <CardBody>
   {props.children}
  </CardBody>
 )
} 

export default Card