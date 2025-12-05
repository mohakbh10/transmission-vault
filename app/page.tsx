"use client";
import { useState } from "react";
import { useRef, useEffect } from "react";

import UploadPanel from "./components/UploadPanel";
import AnalyzingTerminal from "./components/AnalyzingTerminal";
import IntelligenceReport from "./components/IntelligenceReport";

const analysisSteps = [
  "[01] Establishing secure analysis channel...",
  "[02] Scanning waveform structure...",
  "[03] Detecting communication patterns...",
  "[04] Running signal integrity checks...",
  "[05] Finalizing intelligence report..."
];

export default function Page(){
  const [file, setFile] = useState<File | null>(null);
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  }
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [stage, setStage] = useState<"upload" | "analyzing" | "result">("upload");
  const [currentStep, setCurrentStep] = useState(0);
  
  function handleAnalyze() {
    if (!file) return;

    setIsAnalyzing(true);
    setStage("analyzing");
    setCurrentStep(0);

    let step = 0;

    function runStep() {
      if (step < analysisSteps.length - 1) {
        step++;
        setCurrentStep(step);
        setTimeout(runStep, 600);
      } else {
        // Last step, show result after small delay
        setTimeout(() => {
          setStage("result");
          setIsAnalyzing(false);
        }, 600);
      }
    }

    setTimeout(runStep, 600);
  }

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">

      <h1 className="text-3xl text-green-400 ">Transmission Vault</h1>
      <p className="opacity-20 animate-pulse">Secure Transmission Console</p>

      {stage === "upload" && (
        <UploadPanel
          file={file}
          isAnalyzing={isAnalyzing}
          handleFileChange={handleFileChange}
          handleAnalyze={handleAnalyze}
        />
      )}

      {stage === "analyzing" && (
        <AnalyzingTerminal
          currentStep={currentStep}
          analysisSteps={analysisSteps}
        />
      )}

      {stage === "result" && (
        <IntelligenceReport />
      )}

    </div>
  );
}