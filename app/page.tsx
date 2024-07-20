import { BarChartInteractive } from "@/components/Charts/BarChartInteractive";
import { BarChartLabel } from "@/components/Charts/BarChartLabel";
import { LineChartInteractive } from "@/components/Charts/LineChartInteractive";
import { MultipleLineChart } from "@/components/Charts/MultipleLineChart";
import { PieChartDonut } from "@/components/Charts/PieChartDonut";
import { TooltipNoIndicator } from "@/components/Charts/TooltipNoIndicator";
import { Card } from "@/components/ui/card";


export default function Home() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <MultipleLineChart />
        <div className="grid gap-4">
          <BarChartInteractive />
          <LineChartInteractive />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <BarChartLabel />
        <PieChartDonut />
        <TooltipNoIndicator />
      </div>
    </div>
  )
}