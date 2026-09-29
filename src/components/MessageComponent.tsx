import type { Paragraph } from "../interfaces/personalFinancesInterfaces"
import { GenericParagraph } from "./GenericParagraph"


export const MessageComponent = ({value, classID}:Paragraph) => {
  return (
    <>
        <GenericParagraph value={value} classID={classID} />
    </>
  )
}
