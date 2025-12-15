-- CreateTable
CREATE TABLE "IntelligenceReport" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "signalType" TEXT NOT NULL,
    "decodedMessage" TEXT,
    "confidence" INTEGER,
    "anomalies" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IntelligenceReport_pkey" PRIMARY KEY ("id")
);
