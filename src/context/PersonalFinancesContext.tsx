import { createContext } from "react";
import type { tools } from "../interfaces/personalFinancesInterfaces";


export const PersonalFinancesContext = createContext<tools | undefined>(undefined)