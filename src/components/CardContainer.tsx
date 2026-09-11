import { useState } from "react";
import "../Styles/CardContainer.css";
import { CardControl } from "./CardControl";

type item = Array<{
  id: string;
  description: string;
  amount: string;
}>;

export const CardContainer = () => {
  const [items, setItems] = useState<item>([]);

  const handleClick = (id:string,description: string, amount: string) => {
    setItems([
      ...items,
      {
        id: id,
        description: description,
        amount: amount,
      },
    ]);
  };
  return (
    <>
      <h3>Incomes</h3>
      <div className="main-container container">
        {items.map((item) => (
          <div className="cardItem" key={item.id}>
            <p>{item.description}</p>
            <p>{item.amount}</p>
          </div>
        ))}
        <CardControl handleClick={handleClick} />
      </div>
    </>
  );
};
