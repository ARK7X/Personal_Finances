import { useContext } from "react"
import { PersonalFinancesContext } from "../context/PersonalFinancesContext"

export const usePersonalFinancesContext = () => {
    const context = useContext(PersonalFinancesContext);

    if (!context) {
        throw new Error("usePersonalFinances must be use inside PersonalFinancesProvider")
    }

    return context
}