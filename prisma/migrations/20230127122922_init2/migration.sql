/*
  Warnings:

  - Added the required column `memoryLimit` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdfLink` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeLimit` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "memoryLimit" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "pdfLink" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL,
ADD COLUMN     "timeLimit" INTEGER NOT NULL;
