import React, { useState } from 'react';

export function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleClearSelection = () => {
    setSelectedFile(null);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-2"
      />
      {selectedFile && (
        <div>
          <p>File: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
          <button onClick={handleClearSelection} className="text-red-500">Clear</button>
        </div>
      )}
    </div>
  );
} 