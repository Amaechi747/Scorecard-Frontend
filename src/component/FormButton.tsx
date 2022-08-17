import { ButtonBody } from "../styling/css"

type ButtonProps = {
  text: string
}

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