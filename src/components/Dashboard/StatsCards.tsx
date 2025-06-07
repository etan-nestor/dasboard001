'use client'

import { motion } from 'framer-motion'
import { Flame, Salad, Droplets, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  { title: "Calories", value: "1,850", unit: "kcal", change: "+2.5%", icon: Flame, color: "text-[#A7001E]" },
  { title: "Protéines", value: "145", unit: "g", change: "+5.2%", icon: Salad, color: "text-blue-500" },
  { title: "Hydratation", value: "2.5", unit: "L", change: "+0.8%", icon: Droplets, color: "text-cyan-500" },
  { title: "Activité", value: "1,250", unit: "steps", change: "-3.1%", icon: Zap, color: "text-yellow-500" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function StatsCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <motion.div key={index} variants={item}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stat.value} <span className="text-sm font-normal text-gray-500">{stat.unit}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stat.change} vs hier
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}