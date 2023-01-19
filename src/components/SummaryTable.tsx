import { Day } from "./Day"
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates"



const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateRangeDatesFromYearStart()

const minimumSize = 24 * 7 // 12 weeks
const amountOfDaysToFill = minimumSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-row-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <div key={index} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(day => (
          <Day key={day.toString()} />
        ))}
        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
          <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 opacity-40 rounded-lg cursor-not-allowed" />
        ))}
      </div>
    </div>
  )
}