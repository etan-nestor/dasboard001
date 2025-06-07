'use client'

import { motion } from 'framer-motion'
import { Droplets } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function WaterIntake() {
  const waterGoal = 3 // Liters
  const currentIntake = 2.5 // Liters
  const percentage = (currentIntake / waterGoal) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Hydratation</CardTitle>
            <Droplets className="h-5 w-5 text-cyan-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">
                {currentIntake} <span className="text-sm font-normal text-gray-500">L</span>
              </div>
              <div className="text-sm text-gray-500">
                Objectif: {waterGoal}L
              </div>
            </div>
            <Progress value={percentage} className="h-3" indicatorClassName="bg-cyan-500" />
            <div className="grid grid-cols-4 gap-2 text-sm">
              {[0, 1, 2, 3].map((liter) => (
                <div 
                  key={liter} 
                  className={`flex items-center justify-center h-8 rounded-md ${
                    currentIntake >= liter ? 'bg-cyan-500/10 text-cyan-500' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  {liter}L
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}