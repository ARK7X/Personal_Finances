type item = {
  id: string;
  description: string;
  amount: string;
};

type forms = {
  description: string;
  amount: string;
};

export type Paragraph = {
  value:string,
  classID:string
} 


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

type structureMessage = {
  message:string,
  classID:string
}

export type useCardFunctionalities = {
  forms:forms
  isDescriptionEmpty: boolean,
  isAmountEmpty: boolean,
  isEditClicked: boolean,
  editID:string,
  message: structureMessage,
  formsMachine: (name: string, value:string) => void,
  formsMachineOnEdit: (description:string, amount:string) => void,
  handleEditClick: (id:string) => void,
  handleClean: () => void,
  handleEditEnd: () => void
}


export type personalFinancesType = {
  Items:item[],
  isEditClicked: boolean,
  editId: string,
  Forms:forms,
  isDescriptionEmpty:boolean,
  isAmountEmpty:boolean,
  handleOnChangeInput: (name: string, value: string) => void
}

export type personalFinancesBox = {
  Items:item[],
  addItems:(({operation, description, amount, id}:dataFunction) => void)
}

export type Methods ={
  Incomes:personalFinancesBox,
  Outcomes:personalFinancesBox;
  Savings:personalFinancesBox;
  Debts:personalFinancesBox;
}

export type dataFunction = {
  operation?: string,
  description?:string,
  amount?:string,
  id?:string
}

export type FinanceOperation = {
  name:string,
  method: {
    Items:item[],
    addItems:(({operation, description, amount, id}:dataFunction) => void) 
  }
}

type warningMessages = {
  FILL_WARNING:string,
  SUCCESS:string,
  EDIT_WARNING:string,
}

export const MESSAGES:warningMessages = {
  FILL_WARNING: "You must fill all the empty spaces",
  SUCCESS: "Great!",
  EDIT_WARNING: "You must at least modify one parameter"
}

export const MESSAGE_CLASS:warningMessages = {
  FILL_WARNING: "fillWarning",
  SUCCESS: "fillSuccess",
  EDIT_WARNING: "editWarning"
}