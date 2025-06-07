'use client'

import { motion } from 'framer-motion'
import { BarChart2, Users, Utensils, Calendar, TrendingUp, Circle, Download } from 'lucide-react'
import { useState } from 'react'

export default function StatsPage() {
  const [timeRange, setTimeRange] = useState('month')
  const [activeChart, setActiveChart] = useState('clients')

  const stats = [
    { label: "Nouveaux clients", value: "24", change: "+12%", icon: Users },
    { label: "Repas planifiés", value: "156", change: "+8%", icon: Utensils },
    { label: "Rendez-vous", value: "42", change: "+5%", icon: Calendar },
    { label: "Taux de rétention", value: "89%", change: "+3%", icon: TrendingUp }
  ]

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
            <h1 className="text-3xl font-bold text-[#A7001E] mb-2">Statistiques</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Analysez vos performances et tendances
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mt-4 md:mt-0"
          >
            <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {['day', 'week', 'month', 'year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    timeRange === range 
                      ? 'bg-[#A7001E] text-white' 
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {range === 'day' ? 'Jour' : 
                   range === 'week' ? 'Semaine' : 
                   range === 'month' ? 'Mois' : 'Année'}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <Download size={16} />
              <span>Exporter</span>
            </button>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-[#1a2236] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="p-2 rounded-lg bg-[#A7001E]/10">
                    <Icon size={20} className="text-[#A7001E]" />
                  </div>
                </div>
                <div className={`mt-3 text-sm flex items-center ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change} 
                  <TrendingUp size={14} className="ml-1" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Chart Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {[
            { id: 'clients', label: 'Clients' },
            { id: 'meals', label: 'Repas' },
            { id: 'revenue', label: 'Revenus' },
            { id: 'engagement', label: 'Engagement' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveChart(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeChart === tab.id
                  ? 'bg-[#A7001E] text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-6 mb-8"
        >
          <div className="h-80 flex items-center justify-center">
            <div className="text-center">
              <BarChart2 size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-3" />
              <h3 className="text-lg font-medium mb-1">Visualisation des données</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Les graphiques seront affichés ici en fonction de la période sélectionnée
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Insights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Circle size={16} className="text-[#A7001E]" />
              <span>Top clients</span>
            </h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-sm font-medium">C{i}</span>
                    </div>
                    <div>
                      <p className="font-medium">Client {i}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{i * 5} sessions</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{i * 20} repas</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Circle size={16} className="text-[#A7001E]" />
              <span>Repas populaires</span>
            </h3>
            <div className="space-y-4">
              {['Salade César', 'Poulet rôti', 'Poisson grillé', 'Bowl végétarien', 'Omelette'].map((meal, i) => (
                <div key={meal} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#A7001E]/10 flex items-center justify-center">
                      <Utensils size={14} className="text-[#A7001E]" />
                    </div>
                    <p className="font-medium">{meal}</p>
                  </div>
                  <span className="text-sm font-medium">{i * 12 + 15} plans</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}