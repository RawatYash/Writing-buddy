import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

const paraphraseOptions = ['Paraphrase List', 'Paraphrase Text']

interface ParaphraseProps {
  onOptionSelect: (option: string) => void
  selectedOption: string | null
  onReset: () => void
}

export function Paraphrase({ onOptionSelect, selectedOption, onReset }: ParaphraseProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Paraphrase</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {paraphraseOptions.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              selectedOption === option
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => onOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        {selectedOption ? (
          <div className="flex items-center gap-2">
            <p className="text-gray-600 dark:text-gray-400">Selected option: {selectedOption}</p>
            <button
              onClick={onReset}
              className="p-1.5 text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md transition duration-200 ease-in-out"
              title="Reset Selection"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">Please select an option to continue</p>
        )}
      </div>
    </div>
  )
}

