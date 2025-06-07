import { Navbar } from '@/components/Dashboard/Navbar'
import { Sidebar } from '@/components/Dashboard/Sidebar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <main className="container py-4 px-4 md:px-6 mx-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}