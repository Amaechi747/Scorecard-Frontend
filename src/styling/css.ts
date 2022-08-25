import styled from "styled-components"

export const Heading = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 39px;
color: #03435F;
text-align: center;
`

export const Heading2 = styled.h3`
width: 50%;
margin: 2rem auto 0;
font-weight: 600;
display: flex;
justify-content: space-between;
align-items: end;
font-size: 32px;
line-height: 32px;
color: #03435F;
@media screen and (max-width: 1023) {
    width: 80%;



}
@media screen and (max-width: 700px) {
   width: calc(100% - 2rem);
   margin: 2rem 1rem 0 2rem;

  `

   display: block;
}`



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
 color: #21334f89;
 width: calc(100% - 3.1rem);
 display: inline-block;
 padding: 0.4rem 1.5rem;
 outline: unset;
 font-size: 1rem;
 line-height: 1.5rem;
 height: 1.3rem;
 &::placeholder, &::-webkit-input-placeholder {
   color: #21334F29;
   font-weight: 200;
 }
 &:-ms-input-placeholder {
    color: #21334F29;
    font-weight: 200;
 }
 @media screen and (max-width: 900px) {
    padding: 0.3rem 1rem;
    outline: unset;
    width: calc(100% - 2rem);
    font-size: 0.8rem;
    line-height: 1.3rem;
    height: 1rem;
 }
`

export const Select2 = styled.select`
color: #21334f89;
width: calc(100%);
display: inline-block;
border: 0.5px solid #CFD0D145;
outline: unset;
font-size: 1rem;
line-height: 1.5rem;
padding: 0.4rem 1rem;
@media screen and (max-width: 900px) {
   padding: 0.3rem 1rem;
   outline: unset;
   width: calc(100%);
   font-size: 0.8rem;
   line-height: 1.3rem;
`;


export const Paragraph = styled.p`
font-weight: 200;
font-size: 1rem;
color: #BDBDBD;
padding: 2rem 2.5rem 1.5rem 2.5rem;
box-shadow: inset 0px -0.51px #bdbdbd;
`
export const Paragraph2 = styled(Paragraph)`
padding: 2rem 0 1.5rem;
`


export const ButtonBody = styled.button`
&:hover{
background: #249800;
}
width: 100%;
font-weight: 600;
font-size: 1rem;
line-height: 1.5rem;
border: unset;
padding: 0.5rem;
text-align: center;
color: #fff;
margin: 1.5rem 0 0 0;
background: #14A800;
cursor: pointer;

`

export const CardBody = styled.div`
 background: #fff;
 height: 85vh;
 margin: 2rem auto 0;
 width: 50%;
 @media screen and (max-width: 700px) {
    width: 100%;
}
`

export const Card2 = styled(CardBody)`
padding: 0 2rem 2rem;
height: unset;
@media screen and (max-width: 700px) {
    width: calc(100% - 4rem);
}
@media screen and (max-width: 1000px) {
    height: unset;
    padding-bottom: 2rem;
}
`

export const LoginButtonBody = styled.button`
width: calc(100% - 0.21rem);
height: 2.5rem;
border: 1px solid rgba(33, 51, 79, 0.15);
margin: 0.4rem 0;
background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);
`

export const ProfileImage = styled.div`
padding: 2rem 0; 
display: flex; 
justify-content: center;
& > div {
    border-radius: 50%; 
    border: 1px solid green;
    max-width: 12rem;
    min-width: 6rem;
    line-height: 0;
    overflow: hidden;
    position: relative;
}
& > div > button {
    background-color: #00000099;
    padding: 1rem;
    position: absolute;
    display: none;
    border: unset;
    right: 5%;
    bottom: 5%;
    border-radius: 50%;
    cursor: pointer;
}
& > div:hover > button {
    display: inline-block;
}
@media screen and (max-width: 1140px) {
    & > div > button {
        display: inline-block;
    }
}
`

export const Tr = styled.tr`
background: rgba(0, 0, 0, 0.04);
height: 42px;
`

export const Table = styled.table`
  margin: 10% auto;
  width: 80%;
`

export const Th = styled.th`

  border: 1px solid #dddddd;

  text-align: center;

  text-color: red;

  padding: 8px;
`

export const Select = styled.select`
 border: 0.15rem solid rgba(33, 51, 79, 0.15);
 color: #21334F;
 width: calc(100% - 0.4rem);
 padding: 0.4rem 0.5rem;
 display: inline-block;
 margin-bottom: 0.8rem;
 font-size: 0.9rem;
 line-height: 1.5rem;
 height: 2.5rem;
`

export const Option = styled.option`
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
