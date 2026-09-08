import { InputDescription } from "./InputDescription"
import { InputButton } from "./InputButton"

export const CardControl = () => {
 
    return(
        <div className="CardControlContainer">
            <InputDescription label={"Description"} placeHolder={"Type your description"}/>
            <InputDescription label={"Amount"} placeHolder={"Type the amount"}/>
            <InputButton nameButton="Add"/>
        </div>
    )
}