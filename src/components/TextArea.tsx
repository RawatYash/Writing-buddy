import { useState } from 'react'
import { Copy, RotateCcw, SendHorizontal, Upload, Loader } from 'lucide-react'

interface TextAreaProps {
  label: string
}

export function TextArea({ label }: TextAreaProps) {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploadingFiles, setUploadingFiles] = useState<Set<string>>(new Set())

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setText('')
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files)
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray])
      filesArray.forEach((file) => {
        setUploadingFiles((prev) => new Set(prev).add(file.name))
        // Simulate file upload
        setTimeout(() => {
          setUploadingFiles((prev) => {
            const newSet = new Set(prev)
            newSet.delete(file.name)
            return newSet
          })
          console.log('File uploaded:', file.name)
        }, 2000)
      })
    }
  }

  const handleRemoveFile = (fileName: string) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName))
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <label className="block text-base font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative flex flex-col gap-2">
        <textarea
          className="w-full h-32 sm:h-40 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-sidebar-active focus:border-transparent transition duration-200 ease-in-out pr-10"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={label === 'Input' ? `Enter your ${label.toLowerCase()} here...` : ''}
          readOnly={label === 'Output'}
        />

        {label === 'Input' && (
          <button
            className="absolute right-2 top-2 p-1.5 text-white bg-sidebar-active hover:bg-sidebar-hover focus:outline-none focus:ring-2 focus:ring-sidebar-active rounded-md transition duration-200 ease-in-out"
            title="Run"
          >
            <SendHorizontal className="h-5 w-5" />
          </button>
        )}

        <div className="flex justify-end items-center gap-2 px-2">
          {label === 'Input' && (
            <label
              className="p-1.5 text-gray-500 hover:text-sidebar-active focus:outline-none focus:ring-2 focus:ring-sidebar-active rounded-md transition duration-200 ease-in-out cursor-pointer"
              title="Upload Files"
            >
              <Upload className="h-5 w-5" />
              <input type="file" onChange={handleFileChange} className="hidden" multiple />
            </label>
          )}

          {/* Copy Button */}
          <button
            className="p-1.5 text-gray-500 hover:text-sidebar-active focus:outline-none focus:ring-2 focus:ring-sidebar-active rounded-md transition duration-200 ease-in-out"
            onClick={handleCopy}
            title="Copy"
          >
            <Copy className="h-5 w-5" />
            {copied && (
              <span className="absolute top-0 right-0 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-md animate-fade-in">
                Copied!
              </span>
            )}
          </button>

          {/* Reset Button */}
          <button
            className="p-1.5 text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md transition duration-200 ease-in-out"
            onClick={handleReset}
            title="Reset"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        {/* Display Uploaded Files */}
        {selectedFiles.map((file) => (
          <div key={file.name} className="flex items-center justify-between mt-2 text-gray-700">
            <div>
              <p className="text-sm">{file.name}</p>
              <p className="text-xs">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
            {uploadingFiles.has(file.name) ? (
              <Loader className="h-5 w-5 animate-spin text-gray-500" />
            ) : (
              <button
                onClick={() => handleRemoveFile(file.name)}
                className="text-red-500 text-xs"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
