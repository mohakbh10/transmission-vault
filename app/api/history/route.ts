import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        // 2️⃣ Fetch all reports from database
        const reports = await prisma.intelligenceReport.findMany();
        
        // 3️⃣ Return reports
        return Response.json(reports, { status: 200 });
    } catch (error) {
        console.error("History fetch error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
