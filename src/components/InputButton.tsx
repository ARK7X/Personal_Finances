
type propsButton = {
    nameButton:string
}

export const InputButton = (props:propsButton) => {
  return (
    <>
        <button type="button">{props.nameButton}</button>
    </>
  )
}
