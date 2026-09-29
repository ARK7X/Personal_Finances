import React, { useState } from "react";
import {MESSAGES, type useCardFunctionalities } from "../interfaces/personalFinancesInterfaces";

export const useCardFunctionalitiesHook = ():useCardFunctionalities => {

  const [forms, setForms] = useState<useCardFunctionalities["forms"]>({description: "", amount: ""});
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState<useCardFunctionalities["isDescriptionEmpty"]>(true)
  const [isAmountEmpty, setIsAmountEmpty] = useState<useCardFunctionalities["isAmountEmpty"]>(true)
  const [isEditClicked, setIsEditClicked] = useState<useCardFunctionalities["isEditClicked"]>(false)
  const [editID, setEditID] = useState<useCardFunctionalities["editID"]>("")
  const [message, setMessage] = useState<useCardFunctionalities["message"]>(MESSAGES.FILL_WARNING)

  const formsMachine = (setFormState: React.Dispatch<React.SetStateAction<useCardFunctionalities["forms"]>>) => {
      return (name:string, value:string) => {
        setMessages()
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

  const formsMachineOnEdit = (setFormState: React.Dispatch<React.SetStateAction<useCardFunctionalities["forms"]>>) => {
    return (description:string, amount:string) => {
      setFormState((prev) => ({...prev, description:description, amount:amount}))
    }
  }

  const setMessages = () => {
    isEditClicked ?
      isDescriptionEmpty !== true || isAmountEmpty !== true ? setMessage(MESSAGES.SUCCESS) : setMessage(MESSAGES.EDIT_WARNING)
    :
      isDescriptionEmpty || isAmountEmpty ? setMessage(MESSAGES.FILL_WARNING) : setMessage(MESSAGES.SUCCESS)
  }

  const handleClean = () => {
    setForms({description:"", amount:""})
    setEditID("")
    setIsAmountEmpty(true)
    setIsDescriptionEmpty(true)
  }

  const handleEditClick = (id:string) => {
      setEditID(id)
      setIsEditClicked(true);
      setMessage(MESSAGES.EDIT_WARNING)
  }

  const handleEditEnd = () => {
    setIsEditClicked(false)
  }

  return{
    forms:forms,
    isAmountEmpty:isAmountEmpty,
    isDescriptionEmpty:isDescriptionEmpty,
    isEditClicked:isEditClicked,
    editID:editID,
    message:message,
    formsMachine: formsMachine(setForms),
    formsMachineOnEdit: formsMachineOnEdit(setForms),
    handleEditClick: handleEditClick,
    handleClean: handleClean,
    handleEditEnd: handleEditEnd
  }
}