import "../Styles/CardContainer.css";
import { CardControl } from "./CardControl";
import { InputButton } from "./InputButton";
import { InputDescription } from "./InputDescription";
import { useCardFunctionalitiesHook } from "../hooks/CardFunctionalities";

export const CardContainer = () => {
  const cardFunctionalities = useCardFunctionalitiesHook();

  return (
    <>
      <h3>Incomes</h3>
      <div className="main-container container">
        {cardFunctionalities.Items.map((item, index) =>
          cardFunctionalities.isEditClicked &&
          item.id == cardFunctionalities.editId ? (
            <div className="cardItem" key={item.id}>
              <InputDescription
                label="Description"
                placeHolder="Type your description"
                value={cardFunctionalities.Forms.description}
                handleOnChangeInput={cardFunctionalities.handleOnChangeInput}
              />
              <InputDescription
                label="Amount"
                placeHolder="Type your Amount"
                value={cardFunctionalities.Forms.amount}
                handleOnChangeInput={cardFunctionalities.handleOnChangeInput}
              />
              <InputButton
                nameButton="Confirm"
                handleClick={() =>
                  cardFunctionalities.handleConfirmEdit(item.id)
                }
              />
            </div>
          ) : (
            <div className="cardItem" key={item.id}>
              <p>{index}</p>
              <p>{item.description}</p>
              <p>{item.amount}</p>
              <InputButton
                nameButton="Edit"
                handleClick={() => cardFunctionalities.handleEdit(item.id)}
              />
              <InputButton
                nameButton="Delete"
                handleClick={() => cardFunctionalities.handleDelete(item.id)}
              />
            </div>
          ),
        )}
        <CardControl handleClick={cardFunctionalities.handleClick} />
      </div>
    </>
  );
};
