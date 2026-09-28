import type React from "react";
import { useState } from "react";
import { PersonalFinancesContext } from "./PersonalFinancesContext";
import type { personalFinancesType } from "../interfaces/personalFinancesInterfaces";
import { OPERATIONS } from "../interfaces/personalFinancesInterfaces";

interface props {
    children: React.ReactNode
}

export const PersonalFinancesProvider = ({children}: props) => {
      const [Items, setItems] = useState<personalFinancesType["Items"]>([]);
      const [gastos, setGastos] = useState<personalFinancesType["Items"]>([]);
      const [isEditClicked, setIsEditClicked] = useState<personalFinancesType["isEditClicked"]>(false);
      const [editId, setEditId] = useState<personalFinancesType["editId"]>("");
      const [Forms, setForms] = useState<personalFinancesType["Forms"]>({ description: "", amount: "" });
      const [formsOutcomes, setFormsOutcomes] = useState<personalFinancesType["Forms"]>({ description: "", amount: "" });
      const [isDescriptionEmpty, setIsDescriptionEmpty] = useState<personalFinancesType["isDescriptionEmpty"]>(true);
      const [isAmountEmpty, setIsAmountEmpty] = useState<personalFinancesType["isAmountEmpty"]>(true);

      const setMachine = (
          setState: React.Dispatch<React.SetStateAction<personalFinancesType["Items"]>>,
          state:personalFinancesType["Items"],
          formOnChange:personalFinancesType["Forms"],
          setForm:React.Dispatch<React.SetStateAction<personalFinancesType["Forms"]>>) =>
        {
          return (operation:string, ID?:string) => {
              switch (operation) {
                case OPERATIONS.ADD:
                  if (isDescriptionEmpty !== true && isAmountEmpty !== true) {
                    setState((prev) => [...prev, {...prev, id: crypto.randomUUID(), description: formOnChange.description, amount: formOnChange.amount}])
                    setForm((prev) => ({...prev, description: "", amount: ""}))
                    setIsAmountEmpty(true);
                    setIsDescriptionEmpty(true);
                  }
                  break;
            
                case OPERATIONS.EDIT:
                  state.map((item) => item.id == editId && (item.description = formOnChange.description, item.amount = formOnChange.amount ))
                  setForm((prev) => ({...prev, description: "", amount: ""}))
                  setIsEditClicked(false);
                  setEditId("");
                  setForms({ ...Forms, description: "", amount: "" });
                  setIsAmountEmpty(true);
                  setIsDescriptionEmpty(true);
                  break;
                
                case OPERATIONS.EDIT_CLICK:
                  setIsEditClicked(true);
                  if (!ID) {
                    console.error("Error ID esta vacío");
                    return
                  }
                  setEditId(ID);
                  state.map((item) =>
                    item.id == ID
                    && setForms({
                      ...formOnChange,
                      description: item.description,
                      amount: item.amount,
                      })
                    );
                break;

                case OPERATIONS.DELETE:
                  setState(state.filter((item) => item.id !== ID));
                break;

                default:
                  break;
            }
          }
      }

      const formsMachine = (setFormState: React.Dispatch<React.SetStateAction<personalFinancesType["Forms"]>>) => {
        return (name:string, value:string) => {
          const whichInput: boolean = name === "Description";
          if (whichInput) {
            setFormState((prev) => ({...prev, description:value}))
            value.length === 0 ? setIsDescriptionEmpty(true) : setIsDescriptionEmpty(false);
          } else {
            setFormState((prev) => ({...prev, amount:value}))
            value.length === 0 ? setIsAmountEmpty(true) : setIsAmountEmpty(false);
          }
        }
      }
    
        return (<PersonalFinancesContext.Provider value={{
          Incomes: {
            Items: Items, 
            Forms: Forms,
            isEditClicked: isEditClicked,
            editId: editId,
            isAmountEmpty: isAmountEmpty,
            isDescriptionEmpty: isDescriptionEmpty,
            addItems: setMachine(setItems, Items, Forms, setForms),
            handleOnChangeInput: formsMachine(setForms),
          },
          Outcomes: {
            Items: gastos, 
            Forms: formsOutcomes,
            isEditClicked: isEditClicked,
            editId: editId,
            isAmountEmpty: isAmountEmpty,
            isDescriptionEmpty: isDescriptionEmpty,
            addItems: setMachine(setGastos, gastos, formsOutcomes, setFormsOutcomes),
            handleOnChangeInput: formsMachine(setFormsOutcomes),
          }
          }}
        >
            {children}
        </PersonalFinancesContext.Provider>)
}