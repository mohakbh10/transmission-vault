"use client";
import React from "react";

interface IntelligenceReportProps {
    report: {
        status: string;
        signalType: string;
        decodedMessage?: string;
        confidence?: number;
        timestamp?: string;
        anomalies?: string[];
        fileName?: string;
    };
}

export default function IntelligenceReport({ report }: IntelligenceReportProps) {
    return (
        <div className="text-green-300 mt-8 font-mono border border-green-700 p-6 w-[92%] max-w-2xl">
        <h2 className="text-green-400 text-lg mb-4">
            ─── TRANSMISSION INTELLIGENCE REPORT ───
        </h2>

        <p><span className="text-green-500">File:</span> {report.fileName ?? "unknown"}</p>
        <p><span className="text-green-500">Status:</span> {report.status === "communication_detected" ? "Communication Detected" : "No Structured Communication Detected"}</p>
        <p><span className="text-green-500">Signal Type:</span> {report.signalType}</p>

        {report.decodedMessage ? (
            <p className="mt-2"><span className="text-green-500">Decoded Message:</span> "{report.decodedMessage}"</p>
        ) : null}

        {typeof report.confidence === "number" && (
            <p><span className="text-green-500">Confidence:</span> {report.confidence}%</p>
        )}

        {report.timestamp && (
            <p><span className="text-green-500">Timestamp:</span> {report.timestamp}</p>
        )}

        <div className="mt-4">
            <p className="text-green-500">Detected Anomalies:</p>
            {report.anomalies && report.anomalies.length > 0 ? (
            <ul className="list-disc ml-6">
                {report.anomalies.map((a: string, idx: number) => (
                <li key={idx}>{a}</li>
                ))}
            </ul>
            ) : (
            <p className="ml-1">None detected</p>
            )}
        </div>
        </div>
    );
}