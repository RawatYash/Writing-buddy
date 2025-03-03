'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '../components/Sidebar'
import { TextArea } from '../components/TextArea'
import { Paraphrase } from '../components/Paraphrase'
import { GrammarChecking } from '../components/GrammarChecking'
import { ContentGeneration } from '../components/ContentGeneration'
import { TextComparison } from '../components/TextComparison'
import { TextStyling } from '../components/TextStyling'
import { TableOperations } from '../components/TableOperations'
import { AdvancedQuerying } from '../components/AdvancedQuerying'
import { FigureOperations } from '../components/FigureOperations'
import { Home } from '../components/Home'
import { Menu } from 'lucide-react'
import { CategoryKey, categories as categoryTypes } from '../types'
import { PromptBox } from '../components/PromptBox'

const categories = {
  Home: Home,
  Paraphrase: Paraphrase,
  'Grammar Checking': GrammarChecking,
  'Content Generation': ContentGeneration,
  'Text Comparison': TextComparison,
  'Text Styling': TextStyling,
  'Table Operations': TableOperations,
  'Advanced Querying': AdvancedQuerying,
  'Figure Operations': FigureOperations,
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('Home')
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isChatView, setIsChatView] = useState(false)

  useEffect(() => setMounted(true), [])

  // Reset selectedOption when category changes
  useEffect(() => {
    setSelectedOption(null)
  }, [activeCategory])

  const ActiveComponent = categories[activeCategory]

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  const handleOptionReset = () => {
    setSelectedOption(null)
  }

  // Function to handle logo click
  const handleLogoClick = () => {
    setIsChatView(false)
    setActiveCategory('Home')
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar 
        onCategoryChange={setActiveCategory} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <button onClick={handleLogoClick} className="text-2xl sm:text-3xl font-semibold font-serif text-gray-900">
              Writing Buddy
            </button>
            <button
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sidebar-active"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              {activeCategory === 'Home' && !isChatView ? (
                <div className="animate-in">
                  <ActiveComponent onOptionSelect={() => {}} selectedOption={null} onReset={() => {}} />
                </div>
              ) : (
                <div className="flex flex-col space-y-6 mb-6">
                  <ActiveComponent 
                    onOptionSelect={handleOptionSelect} 
                    selectedOption={selectedOption}
                    onReset={handleOptionReset}
                  />
                  {activeCategory !== 'Home' && (
                    <PromptBox 
                      category={activeCategory} 
                      selectedOption={selectedOption}
                    />
                  )}
                  <TextArea label="Input" />
                  <TextArea label="Output" />
                </div>
              )}
            </div>
          </div>
        </main>
        <footer className="py-4 bg-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Writing Buddy may produce inaccurate or misleading information. Use with caution.
          </p>
        </footer>
      </div>
    </div>
  )
}
