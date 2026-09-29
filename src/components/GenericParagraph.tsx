import type { Paragraph } from "../interfaces/personalFinancesInterfaces"


export const GenericParagraph = ({value, classID}:Paragraph) => {
  return (
    <>
        <p className={classID}>{value}</p>
    </>
  )
}
