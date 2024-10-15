import { ChangeEvent } from "react"

interface PropsInput {
  placeholder: string,
  value?: string | number,
  type: string,
  className?: string,
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
}
function InputSearch(props: PropsInput) {

  return (
    <input 
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.handleChangeInput}
      value={props.value}

    />
  )
}

export default InputSearch