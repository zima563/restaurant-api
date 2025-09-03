-- AlterTable
ALTER TABLE `Order` ADD COLUMN `deliveryInstructions` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Review` ALTER COLUMN `updatedAt` DROP DEFAULT;
