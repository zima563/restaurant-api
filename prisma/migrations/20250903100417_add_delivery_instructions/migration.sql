-- AlterTable
ALTER TABLE `Order` ADD COLUMN `deliveryInstructions` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `review` ALTER COLUMN `updatedAt` DROP DEFAULT;
