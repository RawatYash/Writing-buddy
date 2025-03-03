import { useState, useEffect } from 'react'
import { Home as HomeIcon, Type, CheckCircle, FileText, Diff, Palette, Table, Search, BarChart, X } from 'lucide-react'
import { CategoryKey } from '../types'

const categories = [
  { name: 'Home', icon: HomeIcon }, 
  { name: 'Paraphrase', icon: Type },
  { name: 'Grammar Checking', icon: CheckCircle },
  { name: 'Content Generation', icon: FileText },
  { name: 'Text Comparison', icon: Diff },
  { name: 'Text Styling', icon: Palette },
  { name: 'Table Operations', icon: Table },
  { name: 'Advanced Querying', icon: Search },
  { name: 'Figure Operations', icon: BarChart },
]

interface SidebarProps {
  onCategoryChange: (category: CategoryKey) => void
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ onCategoryChange, isOpen, onClose }: SidebarProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].name) // Default to Home

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [onClose])

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName)
    onCategoryChange(categoryName as CategoryKey)
    onClose()
  }

  return (
    <>
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-sidebar-bg shadow-lg transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 transition-transform duration-300 ease-in-out
          h-screen
        `}
      >
        <div className="h-full flex flex-col bg-sidebar-bg">
          <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-hover">
            <h2 className="text-lg font-semibold text-sidebar-text">Pick Your Tool</h2>
            <button
              className="md:hidden p-2 rounded-md text-sidebar-text hover:text-white hover:bg-sidebar-hover focus:outline-none focus:ring-2 focus:ring-white"
              onClick={onClose}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`
                  flex items-center px-2 py-2 text-sm font-medium rounded-md w-full
                  ${
                    activeCategory === category.name
                      ? 'bg-sidebar-active text-white'
                      : 'text-sidebar-text hover:bg-sidebar-hover hover:text-white'
                  }
                `}
                onClick={() => handleCategoryClick(category.name)}
              >
                <category.icon className="mr-3 h-6 w-6" />
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 md:hidden" onClick={onClose}></div>
      )}
    </>
  )
}
