import type React from "react";
import { useState } from "react";
import { PersonalFinancesContext } from "./PersonalFinancesContext";
import type { dataFunction, personalFinancesType } from "../interfaces/personalFinancesInterfaces";
import { OPERATIONS } from "../interfaces/personalFinancesInterfaces";

interface props {
    children: React.ReactNode
}

export const PersonalFinancesProvider = ({children}: props) => {
      const [incomes, setIncomes] = useState<personalFinancesType["Items"]>([]);
      const [outcomes, setOutcomes] = useState<personalFinancesType["Items"]>([]);
      const [savings, setSavings] = useState<personalFinancesType["Items"]>([]);
      const [debts, setDebts] = useState<personalFinancesType["Items"]>([]);


      const setMachine = (
          setState: React.Dispatch<React.SetStateAction<personalFinancesType["Items"]>>,
          state:personalFinancesType["Items"],) =>
        {
          return ({operation, description, amount, id}:dataFunction = {}) => {
              switch (operation) {
                case OPERATIONS.ADD:
                  if (!description || !amount) {
                    console.error("Puede que algunas de las siguientes variable sea undefined: description, amount"); // <= optimizar esta clase de verificaciones, customHook?
                    return
                  }
                  if (description.length !== 0 && amount.length !== 0) {
                    setState((prev) => [...prev, {...prev, id: crypto.randomUUID(), description: description, amount: amount}])
                  }
                  break;
            
                case OPERATIONS.EDIT:
                  if (!description || !amount || !id) {
                    console.error("Puede que algunas de las siguientes variable sea undefined: description, amount, ID"); // <= optimizar esta clase de verificaciones, customHook?
                    return
                  }
                  state.map((item) => item.id == id && (item.description = description, item.amount = amount ))
                  break;

                case OPERATIONS.DELETE:
                  setState(state.filter((item) => item.id !== id));
                break;

                default:
                  break;
            }
          }
      }
    
        return (<PersonalFinancesContext.Provider value={{
          Incomes: {
            Items: incomes,
            addItems: setMachine(setIncomes, incomes),
          },
          Outcomes: {
            Items: outcomes, 
            addItems: setMachine(setOutcomes, outcomes),
          },
          Savings: {
            Items: savings,
            addItems: setMachine(setSavings, savings),
          },
          Debts: {
            Items: debts, 
            addItems: setMachine(setDebts, debts),
          }
          }}
          
        >
            {children}
        </PersonalFinancesContext.Provider>)
}