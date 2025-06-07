'use client'

import { motion } from 'framer-motion'
import { HeartPulse, Activity, Droplets, Moon, Sun, Thermometer, Weight } from 'lucide-react'
import { useState } from 'react'

const healthMetrics = [
  { id: 1, name: 'Rythme cardiaque', value: '72', unit: 'bpm', icon: HeartPulse, trend: 'stable' },
  { id: 2, name: 'Pas aujourd\'hui', value: '8,542', unit: 'pas', icon: Activity, trend: 'up' },
  { id: 3, name: 'Hydratation', value: '2.1', unit: 'L', icon: Droplets, trend: 'down' },
  { id: 4, name: 'Sommeil', value: '7.5', unit: 'h', icon: Moon, trend: 'stable' },
  { id: 5, name: 'Température', value: '36.6', unit: '°C', icon: Thermometer, trend: 'stable' },
  { id: 6, name: 'Poids', value: '68.4', unit: 'kg', icon: Weight, trend: 'down' },
]

const sleepData = [
  { day: 'Lun', hours: 6.5, quality: 75 },
  { day: 'Mar', hours: 7.2, quality: 82 },
  { day: 'Mer', hours: 6.8, quality: 78 },
  { day: 'Jeu', hours: 7.5, quality: 85 },
  { day: 'Ven', hours: 8.0, quality: 90 },
  { day: 'Sam', hours: 7.0, quality: 80 },
  { day: 'Dim', hours: 7.8, quality: 88 },
]

export default function HealthPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#A7001E] flex items-center gap-2">
            <HeartPulse size={28} />
            <span>Santé & Bien-être</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Suivez vos indicateurs de santé et vos progrès
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          {['overview', 'activity', 'nutrition', 'sleep', 'trends'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm relative ${activeTab === tab ? 'text-[#A7001E]' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              {tab === 'overview' && 'Aperçu'}
              {tab === 'activity' && 'Activité'}
              {tab === 'nutrition' && 'Nutrition'}
              {tab === 'sleep' && 'Sommeil'}
              {tab === 'trends' && 'Tendances'}
              {activeTab === tab && (
                <motion.div
                  layoutId="healthTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A7001E]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {healthMetrics.map((metric) => (
                <motion.div
                  key={metric.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-[#1a2236] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{metric.name}</p>
                      <div className="flex items-end mt-1">
                        <span className="text-2xl font-bold">{metric.value}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1 mb-1">{metric.unit}</span>
                      </div>
                    </div>
                    <div className={`p-2 rounded-lg ${metric.trend === 'up' ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' : metric.trend === 'down' ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' : 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'}`}>
                      <metric.icon size={20} />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      {metric.trend === 'up' && (
                        <>
                          <span className="text-green-500">↑ 2.5%</span>
                          <span className="mx-1">·</span>
                          <span>vs hier</span>
                        </>
                      )}
                      {metric.trend === 'down' && (
                        <>
                          <span className="text-red-500">↓ 1.2%</span>
                          <span className="mx-1">·</span>
                          <span>vs hier</span>
                        </>
                      )}
                      {metric.trend === 'stable' && (
                        <>
                          <span className="text-blue-500">→ Stable</span>
                          <span className="mx-1">·</span>
                          <span>vs hier</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sleep Chart */}
            <div className="bg-white dark:bg-[#1a2236] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Moon size={18} className="text-[#A7001E]" />
                Qualité de sommeil cette semaine
              </h3>
              <div className="h-64">
                <div className="flex items-end h-48 gap-1 mt-4">
                  {sleepData.map((day, index) => (
                    <motion.div
                      key={day.day}
                      initial={{ height: 0 }}
                      animate={{ height: `${day.quality}%` }}
                      transition={{ delay: index * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-[#A7001E] to-[#ff4d4d] rounded-t-lg relative group"
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {day.hours}h
                      </div>
                      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                        {day.day}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab !== 'overview' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              {activeTab === 'activity' && <Activity size={32} className="text-[#A7001E]" />}
              {activeTab === 'nutrition' && <HeartPulse size={32} className="text-[#A7001E]" />}
              {activeTab === 'sleep' && <Moon size={32} className="text-[#A7001E]" />}
              {activeTab === 'trends' && <Sun size={32} className="text-[#A7001E]" />}
            </div>
            <h3 className="text-xl font-medium mb-2">
              {activeTab === 'activity' && 'Activité physique'}
              {activeTab === 'nutrition' && 'Nutrition'}
              {activeTab === 'sleep' && 'Sommeil'}
              {activeTab === 'trends' && 'Tendances'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
              Cette section est en cours de développement. Elle sera disponible dans une prochaine mise à jour.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}