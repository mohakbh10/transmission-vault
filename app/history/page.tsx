import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function HistoryPage() {
    // 1️⃣ Fetch reports directly from the database
    const reports = await prisma.intelligenceReport.findMany({
        orderBy: {
        createdAt: "desc",
        },
    });

    return (
        <div className="min-h-screen p-8 text-green-300 font-mono">
        <h1 className="text-2xl text-green-400 mb-6">
            Transmission History
        </h1>

        {/* 2️⃣ Empty state */}
        {reports.length === 0 && (
            <p>No transmission history available.</p>
        )}

        {/* 3️⃣ History list */}
        <ul className="space-y-4">
            {reports.map((report) => (
            <Link key={report.id} href={`/history/${report.id}`}>     
                <li
                    className="border border-green-700 p-4 rounded-md"
                >
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

                    <p>
                    <span className="text-green-500">Time:</span>{" "}
                    {new Date(report.createdAt).toLocaleString()}
                    </p>
                </li>
            </Link>
            ))}
        </ul>
        </div>
    );
}
