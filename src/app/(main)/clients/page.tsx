'use client'

import { motion } from 'framer-motion'
import { Users, Search, Filter, Plus, MoreVertical, ArrowUpDown, UserCheck, UserX } from 'lucide-react'
import { useState } from 'react'

const clients = [
  { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com', status: 'actif', lastSession: '2023-05-15' },
  { id: 2, name: 'Marie Lambert', email: 'marie.lambert@example.com', status: 'actif', lastSession: '2023-05-18' },
  { id: 3, name: 'Pierre Durand', email: 'pierre.durand@example.com', status: 'inactif', lastSession: '2023-04-22' },
  { id: 4, name: 'Sophie Martin', email: 'sophie.martin@example.com', status: 'actif', lastSession: '2023-05-20' },
  { id: 5, name: 'Thomas Bernard', email: 'thomas.bernard@example.com', status: 'nouveau', lastSession: '2023-05-21' },
]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')

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
            <h1 className="text-3xl font-bold text-[#A7001E] mb-2">Clients</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gérez votre portefeuille de clients
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 bg-[#A7001E] hover:bg-[#d32f2f] text-white px-4 py-2 rounded-lg shadow-lg transition-all mt-4 md:mt-0"
          >
            <Plus size={18} />
            <span>Ajouter un client</span>
          </motion.button>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md p-4 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un client..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A7001E] bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Filter size={18} />
              <span>Filtrer</span>
            </button>
          </div>
        </motion.div>

        {/* Clients Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-[#1a2236] rounded-xl shadow-md overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button className="flex items-center gap-1">
                      <span>Nom</span>
                      <ArrowUpDown size={14} />
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button className="flex items-center gap-1">
                      <span>Statut</span>
                      <ArrowUpDown size={14} />
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dernière session
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1a2236] divide-y divide-gray-200 dark:divide-gray-800">
                {clients.map((client) => (
                  <motion.tr
                    key={client.id}
                    whileHover={{ backgroundColor: '#f9fafb', transition: { duration: 0.2 } }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-[#A7001E] to-[#d32f2f] flex items-center justify-center text-white font-medium">
                          {client.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {client.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {client.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        client.status === 'actif' ? 'bg-green-100 text-green-800' :
                        client.status === 'nouveau' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(client.lastSession).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end items-center gap-2">
                        <button className="text-[#A7001E] hover:text-[#d32f2f] p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                          <UserCheck size={18} />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}