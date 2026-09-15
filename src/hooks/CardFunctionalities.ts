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
  handleOnChangeInput: (name: string, value: string) => void,
  handleClick: (id: string, description: string, amount: string) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  handleConfirmEdit: (id:string) => void ;
}

export const useCardFunctionalitiesHook = ():cardFunctionalitiesHook => {
  const [Items, setItems] = useState<cardFunctionalitiesHook["Items"]>([]);
  const [isEditClicked, setIsEditClicked] = useState<cardFunctionalitiesHook["isEditClicked"]>(false);
  const [editId, setEditId] = useState<cardFunctionalitiesHook["editId"]>("");
  const [Forms, setForms] = useState<cardFunctionalitiesHook["Forms"]>({ description: " ", amount: " " });
  
  const handleOnChangeInput = (name: string, value: string) => {
      const whichInput: boolean = name === "Description";
      whichInput
        ? setForms({ ...Forms, description: value })
        : setForms({ ...Forms, amount: value });
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
      setIsEditClicked(false);
      setEditId("");
      Items.map((item) => item.id == id && (item.description = Forms.description, item.amount = Forms.amount ))
    };

    return {Items, Forms, isEditClicked, editId, handleOnChangeInput, handleClick, handleEdit, handleConfirmEdit, handleDelete}
}