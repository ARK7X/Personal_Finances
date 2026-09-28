import "../Styles/CardContainer.css";
import { CardControl } from "./CardControl";
import { InputButton } from "./InputButton";
import { InputDescription } from "./InputDescription";
import type { FinanceOperation } from "../interfaces/personalFinancesInterfaces";
import { OPERATIONS } from "../interfaces/personalFinancesInterfaces";


export const CardContainer = ({name, method}:FinanceOperation) => {

  return (
    <div className="wholeCard">
      <h3>{name}</h3>
      <div className="main-container container">
        <div className="card-container">
        {method.Items.map((item) =>
          method.isEditClicked &&
          item.id == method.editId ? (
            <div className="cardItem" key={item.id}>
              <InputDescription
                label="Description"
                placeHolder="Type your description"
                value={method.Forms.description}
                disabled={true}
                handleOnChangeInput={method.handleOnChangeInput}
              />
              <InputDescription
                label="Amount"
                placeHolder="Type your Amount"
                value={method.Forms.amount}
                disabled={true}
                handleOnChangeInput={method.handleOnChangeInput}
              />
            </div>
          ) : (
            <div className="cardItem" key={item.id}>
              <p>{item.description}</p>
              <p>{item.amount}</p>
              <InputButton
                xmlns="http://www.w3.org/2000/svg"
                classID="editButton"
                path="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"
                viewBox="0 0 16 16"
                handleClick={() => method.addItems(OPERATIONS.EDIT_CLICK, item.id)}
              />
              <InputButton
                xmlns="http://www.w3.org/2000/svg"
                classID="deleteButton"
                path="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                viewBox="0 0 16 16"
                handleClick={() => method.addItems(OPERATIONS.DELETE, item.id)}
              />
            </div>
          ),
        )}
        </div>
        <CardControl 
          valueDescription={method.Forms.description} 
          valueAmount={method.Forms.amount}
          isAmountEmpty={method.isAmountEmpty}
          isDescriptionEmpty={method.isDescriptionEmpty}
          editClicked={method.isEditClicked}
          editId={method.editId}
          handleConfirmEdit={() => method.addItems(OPERATIONS.EDIT)}
          handleOnChangeInput={method.handleOnChangeInput}
          handleSendForm={() => method.addItems(OPERATIONS.ADD)}/>
      </div>
    </div>
  );
};
