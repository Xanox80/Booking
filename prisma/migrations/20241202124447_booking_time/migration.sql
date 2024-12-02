-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "user" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startTime" VARCHAR(255) NOT NULL,
    "endTime" VARCHAR(255) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
