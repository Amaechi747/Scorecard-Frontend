import styled from "styled-components"

export const Heading = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 39px;
color: #03435F;
text-align: center;
`
export const ScoreCardHeading = styled.span`
font-weight: 600;
font-size: 32px;
color: #03435F;
margin-top: 50px;
`
export const LoginHeading = styled.h3`
font-weight: 600;
font-size: 32px;
font-weight: bold;
color: #03435F;
margin: 5rem 0;
`

export const Label = styled.label`
 margin-bottom: 0.5rem;
 color: #03435F;
 display: block;
`
export const Input = styled.input`
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

export const Paragraph = styled.p`
font-weight: 200;
font-size: 1rem;
color: #BDBDBD;
padding: 2rem 2.5rem 1.5rem 2.5rem;
box-shadow: inset 0px -0.51px #bdbdbd;
`


export const ButtonBody = styled.button`
&:hover{
background: #249800;
}
width: calc(100% - 0.21rem);
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
border: unset;
padding: 0.8rem;
text-align: center;
color: #fff;
margin: 0.4rem 0;
background: #14A800;
cursor: pointer
`

export const CardBody = styled.div`
 background: #fff;
 width: 50%;
 height: 80vh;
 margin: 3rem auto 0;
`

export const LoginButtonBody = styled.button`
width: calc(100% - 0.21rem);
height: 2.5rem;
border: 1px solid rgba(33, 51, 79, 0.15);
margin: 0.4rem 0;
background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);
`

export const SearchBar = styled.input`
 width: 100%;
 height: 48px;
 background: #F8F9FA;
 border: 1px solid rgba(0, 0, 0, 0.05);
 border: none;
 outline: none;
`