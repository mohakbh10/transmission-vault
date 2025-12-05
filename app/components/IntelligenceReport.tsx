"use client";
import React from "react";

interface IntelligenceReportProps {
  // currently placeholder usage; kept flexible for future report object
    report?: any;
}

export default function IntelligenceReport({ report }: IntelligenceReportProps) {
    return (
        <p className="text-green-300 mt-8">INTELLIGENCE REPORT (placeholder)</p>
    );
}