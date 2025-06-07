'use client'

import { motion } from 'framer-motion'
import { Clock, Utensils } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const meals = [
  { id: 1, name: "Petit-déjeuner", time: "08:00", calories: 450, proteins: 25, carbs: 60 },
  { id: 2, name: "Collation", time: "11:00", calories: 200, proteins: 10, carbs: 25 },
  { id: 3, name: "Déjeuner", time: "13:00", calories: 650, proteins: 40, carbs: 70 },
  { id: 4, name: "Goûter", time: "16:30", calories: 250, proteins: 15, carbs: 30 },
  { id: 5, name: "Dîner", time: "20:00", calories: 500, proteins: 35, carbs: 45 },
]

export function RecentMeals() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Derniers repas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Repas</TableHead>
                <TableHead className="text-right">Calories</TableHead>
                <TableHead className="text-right">Protéines</TableHead>
                <TableHead className="text-right">Glucides</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meals.map((meal) => (
                <TableRow key={meal.id}>
                  <TableCell>
                    <div className="font-medium">{meal.name}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-3 w-3" />
                      {meal.time}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{meal.calories} kcal</TableCell>
                  <TableCell className="text-right">{meal.proteins}g</TableCell>
                  <TableCell className="text-right">{meal.carbs}g</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}