/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "createdAt",
ADD COLUMN     "data" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
