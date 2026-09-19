import { InputDescription } from "./InputDescription";
import { InputButton } from "./InputButton";
import { useState } from "react";

type propsCardControl = {
  handleClick: (id: string, description: string, amount: string) => void;
};

type forms = {
  description: string;
  amount: string;
};

export const CardControl = (props: propsCardControl) => {
  const [forms, setForms] = useState<forms>({ description: "", amount: "" });
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState<boolean>(true);
  const [isAmountEmpty, setIsAmountEmpty] = useState<boolean>(true);

  const handleOnChangeInput = (name: string, value: string) => {
    const whichInput: boolean = name === "Description";
    if (whichInput) {
      setForms({ ...forms, description: value })
      value.length === 0 ? setIsDescriptionEmpty(true) : setIsDescriptionEmpty(false);
      
    } else {
      setForms({ ...forms, amount: value });
      value.length === 0 ? setIsAmountEmpty(true) : setIsAmountEmpty(false)
    }
  };

  const sendForm = () => {
    if (isDescriptionEmpty !== true && isAmountEmpty !== true) {
        let idCategory: string = "income" + Math.random();
        props.handleClick(idCategory, forms.description, forms.amount);
        setForms({ ...forms, description: "", amount: "" })
        setIsAmountEmpty(true)
        setIsDescriptionEmpty(true)
    }
  };

  return (
    <>
    <div className="CardControlContainer">
      <InputDescription
        label="Description"
        placeHolder="Description"
        value={forms.description}
        isEmpty={isDescriptionEmpty}
        handleOnChangeInput={handleOnChangeInput}
      />
      <InputDescription
        label="Amount"
        placeHolder="Amount"
        value={forms.amount}
        isEmpty={isAmountEmpty}
        handleOnChangeInput={handleOnChangeInput}
      />
      <InputButton nameButton="Add" handleClick={sendForm} />
    </div>
    {isDescriptionEmpty || isAmountEmpty && <p className="fillWarning">You must fill all the empty spaces</p>}
    </>
  );
};
