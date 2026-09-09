import { InputDescription } from "./InputDescription"
import { InputButton } from "./InputButton"
import { useState } from "react"

type propsCardControl = {
    handleClick: (
        description: string,
        amount: string
    ) => void
}

type forms = {
    description: string,
    amount: string
}

export const CardControl = (props:propsCardControl) => {
    
    const [form, setForms] = useState<any>({})

    const handleOnChangeInput = (name:string, amount: string) => {
        console.log(name, amount);
        
        setForms({
            ...form,
                description: name,
                amount: amount
        })
    }

    const sendForm = () => {
        console.log(form);
        
        props.handleClick(form[0], form[1])
    }

    return(
        <div className="CardControlContainer">
            <InputDescription label={"Description"} placeHolder={"Type your description"} value={form[0]} handleOnChangeInput={handleOnChangeInput}/>
            <InputDescription label={"Amount"} placeHolder={"Type the amount"} value={form[1]} handleOnChangeInput={handleOnChangeInput}/>
            <InputButton nameButton="Add" handleClick={sendForm}/>
        </div>
    )
}