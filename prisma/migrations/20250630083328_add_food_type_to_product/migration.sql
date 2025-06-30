/*
  Warnings:

  - Added the required column `foodType` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `foodType` ENUM('GRILLED', 'DESSERTS', 'JUICES', 'PASTA', 'SEAFOOD', 'OTHERS') NOT NULL;
