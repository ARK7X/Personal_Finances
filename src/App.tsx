import { CardContainer } from "./components/CardContainer"
import { usePersonalFinancesContext } from "./hooks/usePersonalFinancesContext"
function App() {

  const {Incomes, Outcomes} = usePersonalFinancesContext()
  
  return (
    <div className="container-app">
     <CardContainer name={"Incomes"} method={Incomes}/>
     <CardContainer name={"Outcomes"} method={Outcomes}/>
    </div>
  )
}

export default App
