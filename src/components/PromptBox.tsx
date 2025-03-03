import { useState, useEffect } from 'react'
import { promptsConfig } from '../types'

interface PromptBoxProps {
  category: string
  selectedOption: string | null
}

export function PromptBox({ category, selectedOption }: PromptBoxProps) {
  const [prompt, setPrompt] = useState('')

  useEffect(() => {
    const categoryConfig = promptsConfig[category]
    if (!categoryConfig) return

    if (selectedOption && categoryConfig.options[selectedOption]) {
      setPrompt(categoryConfig.options[selectedOption])
    } else {
      setPrompt(categoryConfig.default)
    }
  }, [category, selectedOption])

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <label className="block text-base font-semibold text-gray-700 mb-2">
        Prompt
      </label>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-sidebar-active focus:border-transparent transition duration-200 ease-in-out"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={2}
      />
    </div>
  )
} 