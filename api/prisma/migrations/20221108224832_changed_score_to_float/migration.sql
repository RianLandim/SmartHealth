/*
  Warnings:

  - You are about to alter the column `time` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Activity` MODIFY `time` DOUBLE NOT NULL;
