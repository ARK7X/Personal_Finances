import "../Styles/CardContainer.css";
import { CardControl } from "./CardControl";
import { InputButton } from "./InputButton";
import { InputDescription } from "./InputDescription";
import type { FinanceOperation } from "../interfaces/personalFinancesInterfaces";
import { OPERATIONS } from "../interfaces/personalFinancesInterfaces";
import { useCardFunctionalitiesHook } from "../hooks/CardFunctionalities";


export const CardContainer = ({name, method}:FinanceOperation) => {

  const {forms, isDescriptionEmpty, isAmountEmpty, isEditClicked,editID, message, formsMachine, formsMachineOnEdit, handleEditClick, handleClean, handleEditEnd} = useCardFunctionalitiesHook();

  return (
    <div className="wholeCard">
      <h3>{name}</h3>
      <div className="main-container">
        <div className="card-container">
        {method.Items.map((item) =>
          isEditClicked &&
          item.id == editID ? (
            <div className="cardItem" key={item.id}>
              <InputDescription
                label="Description"
                placeHolder="Type your description"
                value={forms.description}
                disabled={true}
                handleOnChangeInput={() => formsMachineOnEdit(item.description, item.amount)}
              />
              <InputDescription
                label="Amount"
                placeHolder="Type your Amount"
                value={forms.amount}
                disabled={true}
                handleOnChangeInput={() => formsMachineOnEdit(item.description, item.amount)}
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
                handleClick={() => {handleEditClick(item.id), formsMachineOnEdit(item.description, item.amount)}}
              />
              <InputButton
                xmlns="http://www.w3.org/2000/svg"
                classID="deleteButton"
                path="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                viewBox="0 0 16 16"
                handleClick={() => method.addItems({operation:OPERATIONS.DELETE, id:item.id})}
              />
            </div>
          ),
        )}
        </div>
        <CardControl 
          valueDescription={forms.description} 
          valueAmount={forms.amount}
          isAmountEmpty={isAmountEmpty}
          isDescriptionEmpty={isDescriptionEmpty}
          editClicked={isEditClicked}
          editId={editID}
          message={message.message}
          classID={message.classID}
          handleConfirmEdit={() => {method.addItems({operation:OPERATIONS.EDIT, description:forms.description, amount:forms.amount, id:editID}); handleEditEnd(); handleClean()}}
          handleOnChangeInput={formsMachine}
          handleSendForm={() => {method.addItems({operation:OPERATIONS.ADD, description:forms.description, amount:forms.amount}); handleClean()}}/>
      </div>
    </div>
  );
};
