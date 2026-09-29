import { CardContainer } from "./components/CardContainer"
import { usePersonalFinancesContext } from "./hooks/usePersonalFinancesContext"
function App() {

  const {Incomes, Outcomes, Savings, Debts} = usePersonalFinancesContext()
  
  return (
    <div className="container-app">
     <CardContainer name="Incomes" method={Incomes}/>
     <CardContainer name="Outcomes" method={Outcomes}/>
     <CardContainer name="Savings" method={Savings}/>
     <CardContainer name="Debts" method={Debts}/>
    </div>
  )
}

export default App
