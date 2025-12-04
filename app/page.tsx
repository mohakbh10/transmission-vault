"use client";
import { useState } from "react";


export default function Page(){
  const [file, setFile] = useState<File | null>(null);
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  }
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState("");
  function handleAnalyze() {
    if (!file) return;
    setIsAnalyzing(true);
    setAnalysisMessage("Analyzing...");
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisMessage("Analysis complete (Demo Mode)");
    }, 2000);
  }


  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-3xl text-green-400 ">Signal/ Morse Analyzer</h1>
      <p className="opacity-20 animate-pulse">Secure Transmission Console</p>
      <div className="p-4">Upload Audio Transmission</div>
      {/* Placeholder for file upload input */  }
      <label
        htmlFor="fileInput"
        className="text-center text-green-300 border-2 border-dashed p-4 cursor-pointer"
      >
        {file ? file.name : "Choose an audio file"}
      </label>

      <input
        id="fileInput"               // <-- REQUIRED so label triggers input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        hidden                       // <-- cleaner than hidden={true}
        // remove styling since it's hidden
      />

      <button 
        disabled={!file || isAnalyzing}  // Disable is true if no file or analyzing
        className="mt-4 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
        onClick={handleAnalyze}
      >
        Analyze
      </button>
      {analysisMessage && <p className="mt-4 text-green-300">{analysisMessage}</p>}

    </div>
  );
}