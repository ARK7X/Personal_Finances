import { InputDescription } from "./InputDescription";
import { InputButton } from "./InputButton";

type propsCardControl = {
  valueDescription:string,
  valueAmount:string,
  isDescriptionEmpty:boolean,
  isAmountEmpty:boolean,
  editClicked:boolean,
  editId:string,
  handleConfirmEdit: (id:string) => void,
  handleOnChangeInput: (name: string, value: string) => void,
  handleSendForm: () => void;
}

export const CardControl = (props:propsCardControl) => {

  return (
    <>
      <div className="CardControlContainer">
        <InputDescription
          label="Description"
          placeHolder="Description"
          value={props.valueDescription}
          isEmpty={props.isDescriptionEmpty}
          handleOnChangeInput={props.handleOnChangeInput}
        />
        <InputDescription
          label="Amount"
          placeHolder="Amount"
          value={props.valueAmount}
          isEmpty={props.isAmountEmpty}
          handleOnChangeInput={props.handleOnChangeInput}
        />
        {props.editClicked ?
          <InputButton
              xmlns="http://www.w3.org/2000/svg"
              classID="confirmButton"
              path="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              viewBox="0 0 16 16"
              handleClick={() => props.handleConfirmEdit(props.editId)}
          />
        :
          <InputButton
              xmlns="http://www.w3.org/2000/svg"
              classID="addButton"
              path="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"
              viewBox="0 0 16 16"
              handleClick={props.handleSendForm}
          />
        }
        {
          props.editClicked ?
            (props.isAmountEmpty !== true || props.isDescriptionEmpty !== true) ?
            <p className="fillSuccess">Great!</p>
            :
            <p className="editWarning">You must at least modify one parameter</p>
          :
            (props.isAmountEmpty || props.isDescriptionEmpty) ?
            <p className="fillWarning">You must fill all the empty spaces</p>
            :
            <p className="fillSuccess">Great!</p>
        }
      </div>
    </>
  );
};
