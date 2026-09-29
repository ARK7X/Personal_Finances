import { createContext } from "react";
import type { Methods } from "../interfaces/personalFinancesInterfaces";


export const PersonalFinancesContext = createContext<Methods | undefined>(undefined)