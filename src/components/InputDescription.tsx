type InputProps = {
  label: string;
  placeHolder: string;
  value: string
  handleOnChangeInput: (
    name:string,
    amount:string
  ) => void
};

export const InputDescription = (props: InputProps) => {
  return (
    <div className="InputDescription">
        <label htmlFor="">{props.label}</label>
      <input type="text" placeholder={props.placeHolder} name={props.label} value={props.value} onChange={(e) => props.handleOnChangeInput(e.target.name, e.target.value)}/>
    </div>
  );
};
