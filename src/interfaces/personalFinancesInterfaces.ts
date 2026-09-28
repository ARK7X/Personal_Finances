type item = {
  id: string;
  description: string;
  amount: string;
};

type forms = {
  description: string;
  amount: string;
};

type crud = {
  ADD:string,
  EDIT:string,
  DELETE:string,
  EDIT_CLICK:string
}

export const OPERATIONS:crud = {
  ADD: "ADD",
  EDIT: "EDIT",
  DELETE: "DELETE",
  EDIT_CLICK: "EDIT_CLICK"
}


export type personalFinancesType = {
  Items:item[],
  isEditClicked: boolean,
  editId: string,
  Forms:forms,
  isDescriptionEmpty:boolean,
  isAmountEmpty:boolean,
  handleOnChangeInput: (name: string, value: string) => void,
}

export type personalFinancesBox = {
  Items:item[],
  isEditClicked: boolean,
  editId: string,
  Forms:forms,
  isDescriptionEmpty:boolean,
  isAmountEmpty:boolean,
  addItems:(operation:string, ID?:string) => void,
  handleOnChangeInput: (name: string, value: string) => void,
}

export type tools ={
  Incomes:personalFinancesBox,
  Outcomes:personalFinancesBox;
}

export type FinanceOperation = {
  name:string,
  method: {
    Items:item[],
    isEditClicked: boolean,
    editId: string,
    Forms:forms,
    isDescriptionEmpty:boolean,
    isAmountEmpty:boolean,
    addItems:(operation:string, ID?:string) => void,
    handleOnChangeInput: (name: string, value: string) => void,

  }
}