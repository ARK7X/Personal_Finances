import { useState } from "react";
import "../Styles/CardContainer.css";
import { CardControl } from "./CardControl";

type item = Array<{
    description: string,
    amount: number
}>

export const CardContainer = () => {
  const [items, setItems] = useState<item>([]);

  const handleClick = () => {
    setItems([
      ...items,
      {
      description: "Example",
      amount: 12,
      }
    ]);
  };
  return (
    <>
      <h3>Incomes</h3>
      <div className="main-container container">
        {
            items.map((item) => (
                <div>
                    <p>{item.description}</p>
                    <p>{item.amount}</p>
                </div>
            ))
        }
        <CardControl />
        <button type="button" onClick={handleClick}>
          Prueba
        </button>
      </div>
    </>
  );
};
