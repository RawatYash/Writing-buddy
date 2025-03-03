export const categories = {
  Home: 'Home',
  Paraphrase: 'Paraphrase',
  'Grammar Checking': 'Grammar Checking',
  'Content Generation': 'Content Generation',
  'Text Comparison': 'Text Comparison',
  'Text Styling': 'Text Styling',
  'Table Operations': 'Table Operations',
  'Advanced Querying': 'Advanced Querying',
  'Figure Operations': 'Figure Operations',
} as const

export type CategoryKey = keyof typeof categories

// Types for prompt management
export interface PromptConfig {
  default: string
  options: {
    [key: string]: string
  }
}

export interface PromptsType {
  [category: string]: PromptConfig
}

// Define  prompts config
export const promptsConfig: PromptsType = {
  'Paraphrase': {
    default: 'I want you to paraphrase the following text while maintaining its original meaning:',
    options: {
      'Paraphrase List': 'Paraphrase each item in the following list:',
      'Paraphrase Text': 'Paraphrase the following text maintaining its original meaning:'
    }
  },
  'Content Generation': {
    default: 'Generate content based on the following input:',
    options: {
      'Summarization': 'Create a concise summary of the following text:',
      'List Expansion': 'Expand the following list with relevant items:',
      'Conclusion Generation': 'Generate a conclusion based on the following content:'
    }
  },
  'Table Operations': {
    default: 'Analyze the following table data:',
    options: {
      'Table Summarization': 'Create a summary of the following table data:',
      'Table Conclusion': 'Generate conclusions from the following table data:'
    }
  },
  'Advanced Querying': {
    default: 'Query the following data:',
    options: {
      'Multi-Dimensional Data (MDD) Querying': 'Analyze the following multi-dimensional data:',
      'Multi-Valued Data (MVD) Querying': 'Process the following multi-valued data:',
      'File-based Chat': 'Chat based on the following file content:',
      'LLM-assisted Chat': 'Assist with the following query:'
    }
  },
  'Text Comparison': {
    default: 'Compare the following texts:',
    options: {
      'Text Difference': 'Analyze and highlight the differences between the following texts:'
    }
  },
  'Grammar Checking': {
    default: 'Check the grammar in the following text:',
    options: {
      'Check Grammar': 'Check and correct any grammatical errors in the following text:'
    }
  },
  'Text Styling': {
    default: 'Style the following text:',
    options: {
      'Style Text': 'Apply formatting and styling to the following text:'
    }
  },
  'Figure Operations': {
    default: 'Analyze the following figure:',
    options: {
      'Figure Summarization': 'Create a detailed description of the following figure:'
    }
  },
} 