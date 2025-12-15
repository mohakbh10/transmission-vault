import { prisma } from "@/lib/prisma";

type PageProps = {
    params: {
        id: string;
    };
};

export default async function ReportPage({ params }: PageProps) {
    const { id } = await params;

    // 1️⃣ Fetch single report
    const report = await prisma.intelligenceReport.findUnique({
        where: { id },
    });

    // 2️⃣ Handle not found
    if (!report) {
        return (
        <div className="min-h-screen p-8 text-green-300 font-mono">
            <h1 className="text-xl text-green-400">Report not found</h1>
        </div>
        );
    }

    // 3️⃣ Render full report
    return (
        <div className="min-h-screen p-8 text-green-300 font-mono">
        <h1 className="text-2xl text-green-400 mb-6">
            Intelligence Report
        </h1>

        <div className="border border-green-700 p-6 rounded-md space-y-3">
            <p>
            <span className="text-green-500">File:</span>{" "}
            {report.fileName}
            </p>

            <p>
            <span className="text-green-500">Status:</span>{" "}
            {report.status}
            </p>

            <p>
            <span className="text-green-500">Signal Type:</span>{" "}
            {report.signalType}
            </p>

            {report.decodedMessage && (
            <p>
                <span className="text-green-500">Decoded Message:</span>{" "}
                {report.decodedMessage}
            </p>
            )}

            {report.confidence !== null && (
            <p>
                <span className="text-green-500">Confidence:</span>{" "}
                {report.confidence}%
            </p>
            )}

            <div>
            <span className="text-green-500">Anomalies:</span>
            {report.anomalies.length > 0 ? (
                <ul className="list-disc ml-6 mt-1">
                {report.anomalies.map((a, idx) => (
                    <li key={idx}>{a}</li>
                ))}
                </ul>
            ) : (
                <p className="ml-1">None detected</p>
            )}
            </div>

            <p>
            <span className="text-green-500">Time:</span>{" "}
            {new Date(report.createdAt).toLocaleString()}
            </p>
        </div>
        </div>
    );
}
