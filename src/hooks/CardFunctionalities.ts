import React, { useState } from "react";
import {MESSAGE_CLASS, MESSAGES, type useCardFunctionalities } from "../interfaces/personalFinancesInterfaces";

export const useCardFunctionalitiesHook = ():useCardFunctionalities => {

  const [forms, setForms] = useState<useCardFunctionalities["forms"]>({description: "", amount: ""});
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState<useCardFunctionalities["isDescriptionEmpty"]>(true)
  const [isAmountEmpty, setIsAmountEmpty] = useState<useCardFunctionalities["isAmountEmpty"]>(true)
  const [isEditClicked, setIsEditClicked] = useState<useCardFunctionalities["isEditClicked"]>(false)
  const [editID, setEditID] = useState<useCardFunctionalities["editID"]>("")
  const [message, setMessage] = useState<useCardFunctionalities["message"]>({message: MESSAGES.FILL_WARNING, classID: MESSAGE_CLASS.FILL_WARNING})

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
      isDescriptionEmpty !== true || isAmountEmpty !== true ? 
        setMessage((prev) => ({...prev, message: MESSAGES.SUCCESS, classID:MESSAGE_CLASS.SUCCESS})) 
      : 
        setMessage((prev)=> ({...prev, message:MESSAGES.EDIT_WARNING, classID:MESSAGE_CLASS.EDIT_WARNING}))
    :
      isDescriptionEmpty || isAmountEmpty ? 
        setMessage((prev) => ({...prev, message: MESSAGES.FILL_WARNING, classID:MESSAGE_CLASS.FILL_WARNING})) 
      : 
        setMessage((prev) => ({...prev, message:MESSAGES.SUCCESS, classID: MESSAGE_CLASS.SUCCESS}))
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
      setMessage((prev)=> ({...prev, message:MESSAGES.EDIT_WARNING, classID:MESSAGE_CLASS.EDIT_WARNING}))
      setIsAmountEmpty(false)
      setIsDescriptionEmpty(false)
  }

  const handleEditEnd = () => {
    setMessage((prev) => ({...prev, message: MESSAGES.FILL_WARNING, classID:MESSAGE_CLASS.FILL_WARNING}))
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