import { useState } from "react";

type item = {
  id: string;
  description: string;
  amount: string;
};

type forms = {
  description: string;
  amount: string;
};

type cardFunctionalitiesHook = {
  Items:item[],
  isEditClicked: boolean,
  editId: string,
  Forms:forms,
  isDescriptionEmpty:boolean,
  isAmountEmpty:boolean,
  handleOnChangeInput: (name: string, value: string) => void,
  handleClick: (id: string, description: string, amount: string) => void,
  handleEdit: (id: string) => void,
  handleDelete: (id: string) => void,
  handleConfirmEdit: (id:string) => void,
  handleSendForm: () => void;
}

export const useCardFunctionalitiesHook = ():cardFunctionalitiesHook => {
  const [Items, setItems] = useState<cardFunctionalitiesHook["Items"]>([]);
  const [isEditClicked, setIsEditClicked] = useState<cardFunctionalitiesHook["isEditClicked"]>(false);
  const [editId, setEditId] = useState<cardFunctionalitiesHook["editId"]>("");
  const [Forms, setForms] = useState<cardFunctionalitiesHook["Forms"]>({ description: " ", amount: " " });
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState<cardFunctionalitiesHook["isDescriptionEmpty"]>(true);
  const [isAmountEmpty, setIsAmountEmpty] = useState<cardFunctionalitiesHook["isAmountEmpty"]>(true);
  
  const handleOnChangeInput = (name: string, value: string) => {
    const whichInput: boolean = name === "Description";
    if (whichInput) {
      setForms({ ...Forms, description: value });
      value.length === 0
        ? setIsDescriptionEmpty(true)
        : setIsDescriptionEmpty(false);
    } else {
      setForms({ ...Forms, amount: value });
      value.length === 0 ? setIsAmountEmpty(true) : setIsAmountEmpty(false);
    }
  };

  const handleClick = (id: string, description: string, amount: string): void => {
      setItems([
       ...Items,
        {
          id: id,
          description: description,
          amount: amount,
        },
      ]);
    };

  const handleEdit = (id: string): void => {
      setIsEditClicked(true);
      setEditId(id);
      Items.map((item) =>
        item.id == id
          && setForms({
              ...Forms,
              description: item.description,
              amount: item.amount,
            })
      );
    };

  const handleDelete = (id: string): void => {
      setItems(Items.filter((item) => item.id !== id));
    };

  const handleConfirmEdit = (id:string): void => {
    if (isDescriptionEmpty !== true && isAmountEmpty !== true || isDescriptionEmpty !== true && isAmountEmpty === true || isDescriptionEmpty === true && isAmountEmpty !== true) {
      setIsEditClicked(false);
      setEditId("");
      Items.map((item) => item.id == id && (item.description = Forms.description, item.amount = Forms.amount ))
      setForms({ ...Forms, description: "", amount: "" });
      setIsAmountEmpty(true);
      setIsDescriptionEmpty(true);
    }
  };
  
  const handleSendForm = () => {
    if (isDescriptionEmpty !== true && isAmountEmpty !== true) {
      let idCategory: string = "income" + Math.random();
          setItems([
            ...Items,
              {
                id: idCategory,
                description: Forms.description,
                amount: Forms.amount,
              },
           ]);
        setForms({ ...Forms, description: "", amount: "" });
        setIsAmountEmpty(true);
        setIsDescriptionEmpty(true);
    }
  };

    return {Items, Forms, isEditClicked, editId, isAmountEmpty, isDescriptionEmpty, handleOnChangeInput, handleClick, handleEdit, handleConfirmEdit, handleDelete, handleSendForm}
}