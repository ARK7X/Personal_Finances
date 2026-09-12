import { useState } from "react";
import "../Styles/CardContainer.css";
import { CardControl } from "./CardControl";
import { InputButton } from "./InputButton";

type item = {
  id: string;
  description: string;
  amount: string;
};

export const CardContainer = () => {
  const [items, setItems] = useState<item[]>([]);

  const handleClick = (id:string, description: string, amount: string) => {
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
    alert("Button Edit "+id)
  }

  const handleDelete = (id: string) => {
   setItems(items.filter(item => item.id !== id))
  }

  return (
    <>
      <h3>Incomes</h3>
      <div className="main-container container">
        {items.map((item, index) => (
          <div className="cardItem" key={item.id}>
            <p>{index}</p>
            <p>{item.description}</p>
            <p>{item.amount}</p>
            <InputButton nameButton="Edit" handleClick={() => handleEdit(item.id)}/>
            <InputButton nameButton="Delete" handleClick={() => handleDelete(item.id)}/>
          </div>
        ))}
        <CardControl handleClick={handleClick} />
      </div>
    </>
  );
};
