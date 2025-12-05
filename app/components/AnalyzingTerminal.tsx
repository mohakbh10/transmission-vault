"use client";
import React from "react";

interface AnalyzingTerminalProps {
  currentStep: number;
  analysisSteps: string[];
}

export default function AnalyzingTerminal({
  currentStep,
  analysisSteps,
}: AnalyzingTerminalProps) {
  return (
    <div className="text-green-300 mt-8 font-mono space-y-2">
      {analysisSteps.slice(0, currentStep + 1).map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
}