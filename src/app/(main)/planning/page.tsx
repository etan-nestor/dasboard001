'use client'

import { motion } from 'framer-motion'
import { Calendar, Plus, ChevronLeft, ChevronRight, Clock, Settings2, Bell } from 'lucide-react'
import { useState } from 'react'

export default function PlanningPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  const hours = Array.from({ length: 14 }, (_, i) => i + 7) // 7h à 20h

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 7)
    setCurrentDate(newDate)
  }

  const goToNextWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 7)
    setCurrentDate(newDate)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-[#A7001E] mb-2">Planification</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Organisez votre semaine nutritionnelle
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mt-4 md:mt-0"
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Settings2 size={18} />
              <span>Options</span>
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#A7001E] hover:bg-[#d32f2f] text-white px-4 py-2 rounded-lg shadow-lg transition-all"
            >
              <Plus size={18} />
              <span>Créer un planning</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Calendar Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-4 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={goToPreviousWeek}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronLeft size={20} />
            </button>
            
            <h2 className="text-xl font-semibold">
              Semaine du {currentDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long' })}
            </h2>
            
            <button 
              onClick={goToNextWeek}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Week Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header with days */}
              <div className="grid grid-cols-8 gap-2 mb-2">
                <div className="h-10"></div> {/* Empty cell for time column */}
                {days.map((day, i) => {
                  const date = new Date(currentDate)
                  date.setDate(date.getDate() - date.getDay() + i)
                  
                  return (
                    <div 
                      key={day} 
                      className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <span className="font-medium">{day}</span>
                      <span className="text-sm text-gray-500">
                        {date.getDate()}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Time slots */}
              {hours.map((hour) => (
                <div key={hour} className="grid grid-cols-8 gap-2 mb-2">
                  <div className="flex items-center justify-center p-2 text-sm text-gray-500">
                    {hour}h
                  </div>
                  
                  {days.map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="h-16 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all flex items-center justify-center"
                    >
                      <Plus size={16} className="text-gray-400" />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scheduled Sessions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-6"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock size={20} className="text-[#A7001E]" />
            <span>Sessions planifiées</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Consultation #{item}</h4>
                    <p className="text-sm text-gray-500">Client {item}</p>
                  </div>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                    <Bell size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={14} />
                  <span>Lun {item+8}h00 - {item+9}h00</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                  <button className="text-sm text-[#A7001E] hover:text-[#d32f2f] font-medium">
                    Voir détails
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}