/*
  Warnings:

  - Added the required column `performanceDate` to the `ShowPerformance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShowPerformance" ADD COLUMN     "performanceDate" TIMESTAMP(3) NOT NULL;
