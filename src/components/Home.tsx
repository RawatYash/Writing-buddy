import { useState, useRef, useEffect } from "react"
import { Sparkles, Loader, Copy, SendHorizontal } from "lucide-react"

// Define a type for the message
interface Message {
  id: string
  type: "user" | "assistant"
  content: string
}

export function Home() {
  const [inputText, setInputText] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isChatView, setIsChatView] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [copied, setCopied] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const examples = [
    "Paraphrase this paragraph:",
    "Check the grammar in this sentence:",
    "Generate a blog post about:",
    "Compare these two texts:",
  ]

  const capabilities = [
    "Paraphrase and rephrase text",
    "Check grammar and spelling",
    "Generate content on various topics",
    "Compare and analyze different texts",
    "Style and format your writing",
    "Work with tables and structured data",
    "Answer questions about your text",
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputText.trim() || isLoading) return

    const newMessage: Message = { id: Date.now().toString(), type: "user", content: inputText }
    setMessages((prev) => [...prev, newMessage])
    setInputText("")

    if (!isChatView) {
      setIsTransitioning(true)
      setTimeout(() => {
        setIsChatView(true)
        setIsTransitioning(false)
      }, 300)
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "assistant",
        content: "backend response.",
      },
    ])
    setIsLoading(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const chatView = (
    <div className="flex-1 flex flex-col h-full bg-gray-50 transition-opacity duration-300">
      {/* Chat Messages */}
      <div className="flex-1 p-4">
        {messages.map((message) => (
          <div key={message.id} className={`mb-4 ${message.type === "user" ? "text-right" : "text-left"}`}>
            <div
              className={`inline-block p-3 rounded-lg max-w-full break-words ${
                message.type === "user" ? "bg-sidebar-active text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <Loader className="inline-block animate-spin text-sidebar-active" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="sticky bottom-0 p-4 border-t border-gray-200 bg-gray-50">
        <form onSubmit={handleSubmit} className="flex space-x-2 relative">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your writing task here..."
            className="flex-grow px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-sidebar-active pr-10"
            disabled={isLoading}
          />
          <button
            className="absolute right-16 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-500 hover:text-sidebar-active focus:outline-none focus:ring-2 focus:ring-sidebar-active rounded-md transition duration-200 ease-in-out"
            onClick={handleCopy}
            title="Copy"
            type="button"
          >
            <Copy className="h-5 w-5" />
            {copied && (
              <span className="absolute top-0 right-0 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-md animate-fade-in">
                Copied!
              </span>
            )}
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-sidebar-active text-white hover:bg-sidebar-hover transition duration-150 ease-in-out disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="h-5 w-5 animate-spin" /> : <SendHorizontal className="h-5 w-5" />}
          </button>
        </form>
      </div>
    </div>
  )

  const landingView = (
    <div className="max-w-4xl mx-auto px-4 py-8 h-full">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Writing Buddy</h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Your AI-powered writing assistant for better, faster, and more efficient writing.
      </p>

      <form onSubmit={handleSubmit} className="mb-12">
        <div className="flex rounded-lg shadow-sm relative">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your writing task here..."
            className="flex-grow px-4 py-3 rounded-l-lg border-2 border-r-0 border-gray-300 focus:outline-none focus:border-sidebar-active pr-10"
          />
          <button
            className="absolute right-16 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-500 hover:text-sidebar-active focus:outline-none focus:ring-2 focus:ring-sidebar-active rounded-md transition duration-200 ease-in-out"
            onClick={handleCopy}
            title="Copy"
            type="button"
          >
            <Copy className="h-5 w-5" />
            {copied && (
              <span className="absolute top-0 right-0 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-md animate-fade-in">
                Copied!
              </span>
            )}
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-r-lg bg-sidebar-active text-white hover:bg-sidebar-hover transition duration-150 ease-in-out"
          >
            <SendHorizontal className="h-5 w-5" />
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Examples</h2>
          <ul className="space-y-3">
            {examples.map((example, index) => (
              <li key={index}>
                <button
                  onClick={() => setInputText(example)}
                  className="text-left w-full p-3 rounded-lg border border-gray-300 hover:border-sidebar-active transition duration-150 ease-in-out"
                >
                  {example}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Capabilities</h2>
          <ul className="space-y-3">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start">
                <Sparkles className="h-5 w-5 text-sidebar-active mr-2 mt-1" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  return <div className="h-screen">{isChatView ? chatView : landingView}</div>
}
