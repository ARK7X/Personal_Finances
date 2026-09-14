import { useState } from "react";
import "../Styles/CardContainer.css";
import { CardControl } from "./CardControl";
import { InputButton } from "./InputButton";
import { InputDescription } from "./InputDescription";

type item = {
  id: string;
  description: string;
  amount: string;
};

type forms = {
  description: string;
  amount: string;
};

export const CardContainer = () => {
  const [items, setItems] = useState<item[]>([]);
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const [forms, setForms] = useState<forms>({ description: " ", amount: " " });

  const handleOnChangeInput = (name: string, value: string) => {
    const whichInput: boolean = name === "Description";
    whichInput
      ? setForms({ ...forms, description: value })
      : setForms({ ...forms, amount: value });
  };

  const handleClick = (id: string, description: string, amount: string) => {
    setItems([
      ...items,
      {
        id: id,
        description: description,
        amount: amount,
      },
    ]);
  };

  const handleEdit = (id: string) => {
    setIsEditClicked(true);
    setEditId(id);
    items.map((item) =>
      item.id == id
        && setForms({
            ...forms,
            description: item.description,
            amount: item.amount,
          })
    );
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleConfirmEdit = (id:string) => {
    setIsEditClicked(false);
    setEditId("");
    items.map((item) => item.id == id && (item.description = forms.description, item.amount = forms.amount ))
  };

  return (
    <>
      <h3>Incomes</h3>
      <div className="main-container container">
        {items.map((item, index) =>
          isEditClicked && item.id == editId ? (
            <div className="cardItem" key={item.id}>
              <InputDescription
                label="Description"
                placeHolder="Type your description"
                value={forms.description}
                handleOnChangeInput={handleOnChangeInput}
              />
              <InputDescription
                label="Amount"
                placeHolder="Type your Amount"
                value={forms.amount}
                handleOnChangeInput={handleOnChangeInput}
              />
              <InputButton
                nameButton="Confirm"
                handleClick={() => handleConfirmEdit(item.id)}
              />
            </div>
          ) : (
            <div className="cardItem" key={item.id}>
              <p>{index}</p>
              <p>{item.description}</p>
              <p>{item.amount}</p>
              <InputButton
                nameButton="Edit"
                handleClick={() => handleEdit(item.id)}
              />
              <InputButton
                nameButton="Delete"
                handleClick={() => handleDelete(item.id)}
              />
            </div>
          ),
        )}
        <CardControl handleClick={handleClick} />
      </div>
    </>
  );
};
