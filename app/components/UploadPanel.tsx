"use client";
import React from "react";

interface UploadPanelProps {
    file: File | null;
    isAnalyzing: boolean;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAnalyze: () => void;
}

export default function UploadPanel({
    file,
    isAnalyzing,
    handleFileChange,
    handleAnalyze,
    }: UploadPanelProps) {
    return (
        <>
        <div className="p-4">Upload Audio Transmission</div>

        <label
            htmlFor="fileInput"
            className="text-center text-green-300 border-2 border-dashed p-4 cursor-pointer"
        >
            {file ? file.name : "Choose an audio file"}
        </label>

        <input
            id="fileInput"
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            hidden
        />

        <button
            disabled={!file || isAnalyzing}
            className="mt-4 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
            onClick={handleAnalyze}
        >
            Analyze
        </button>
        </>
    );
}