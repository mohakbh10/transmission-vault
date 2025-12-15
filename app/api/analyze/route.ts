import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        // 1️⃣ Read form data
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file || typeof file === "string") {
        return new Response("No file uploaded", { status: 400 });
        }

        // 2️⃣ Create fake analysis result (Phase 1)
        const reportData = {
        fileName: (file as File).name,
        status: "Communication Detected",
        signalType: "Morse Pattern",
        decodedMessage: "MEET AT 2200",
        confidence: 84,
        anomalies: ["Irregular timing detected"],
        };

        // 3️⃣ Save report to database
        const savedReport = await prisma.intelligenceReport.create({
        data: reportData,
        });

        // 4️⃣ Return saved report
        return Response.json(savedReport, { status: 200 });
    } catch (error) {
        console.error("Analyze error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}



/* export async funtion POST(request: Request) {
    try {
        const formData= await request.formData();
        const file = formData.get('file');
        if(!file || typeof file === 'string') {
            return new Response('No file uploaded', { status: 400 });
        }

        const fielName = (file as File).name;
        const fakeReport = {
            status: "communication_detected",
            signalType: "Morse Pattern",
            decodedMessage: "MEET AT 2300",
            confidence: 84,
            timestamp: "2025-12-04 18:22 UTC",
            anomalies: ["Silence gaps detected", "Timing irregularities observed"],
            fileName: "uploaded_example.wav"
        };
        return Response.json(fakeReport, {status: 200});
    } catch (error) {
        return new Response('Internal Server Error', { status: 500 });
    }
}*/