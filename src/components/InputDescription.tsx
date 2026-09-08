type InputProps = {
  label: string;
  placeHolder: string;
};

export const InputDescription = (props: InputProps) => {
  return (
    <div className="InputDescription">
        <label htmlFor="">{props.label}</label>
      <input type="text" placeholder={props.placeHolder} />
    </div>
  );
};
