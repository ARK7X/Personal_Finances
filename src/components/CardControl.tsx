import { InputDescription } from "./InputDescription";
import { InputButton } from "./InputButton";
import { useState } from "react";

type propsCardControl = {
  handleClick: (description: string, amount: string) => void;
};

type forms = {
  description: string;
  amount: string;
};

export const CardControl = (props: propsCardControl) => {
  const [forms, setForms] = useState<forms>({ description: " ", amount: " " });

  const handleOnChangeInput = (name: string, value: string) => {
    console.log(value);
    if (name == "Description") {
      setForms({
        ...forms,
        description: value,
      });
    } else {
      setForms({
        ...forms,
        amount: value,
      });
    }
  };

  const sendForm = () => {
    props.handleClick(forms.description, forms.amount)
  };

  return (
    <div className="CardControlContainer">
      <InputDescription
        label="Description"
        placeHolder="Description"
        value={forms.description}
        handleOnChangeInput={handleOnChangeInput}
      />
      <InputDescription
        label="Amount"
        placeHolder="Amount"
        value={forms.amount}
        handleOnChangeInput={handleOnChangeInput}
      />
      <InputButton nameButton="Add" handleClick={sendForm} />
    </div>
  );
};
