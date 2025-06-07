import { StatsCards } from "@/components/Dashboard/StatsCards";
import { NutritionChart } from "@/components/Dashboard/NutritionChart";
import { WaterIntake } from "@/components/Dashboard/WaterIntake";
import { RecentMeals } from "@/components/Dashboard/RecentMeals";


export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-6">
      <StatsCards />
      
      <div className="grid gap-6 md:grid-cols-2">
        <NutritionChart />
        <WaterIntake />
      </div>
      
      <RecentMeals />
    </div>
  )
}