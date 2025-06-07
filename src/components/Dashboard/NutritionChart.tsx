'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const data = [
  { name: 'Lun', calories: 1800, proteins: 120, carbs: 200 },
  { name: 'Mar', calories: 1750, proteins: 130, carbs: 180 },
  { name: 'Mer', calories: 1900, proteins: 140, carbs: 220 },
  { name: 'Jeu', calories: 1650, proteins: 110, carbs: 170 },
  { name: 'Ven', calories: 2000, proteins: 150, carbs: 240 },
  { name: 'Sam', calories: 2100, proteins: 160, carbs: 260 },
  { name: 'Dim', calories: 1850, proteins: 125, carbs: 190 },
]

export function NutritionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Apports nutritionnels</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)'
                }}
              />
              <Bar dataKey="calories" fill="#A7001E" radius={[4, 4, 0, 0]} />
              <Bar dataKey="proteins" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="carbs" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}