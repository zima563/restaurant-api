-- DropForeignKey
ALTER TABLE `CartItemaddon` DROP FOREIGN KEY `CartItemAddon_addonId_fkey`;

-- DropForeignKey
ALTER TABLE `OrderItemaddon` DROP FOREIGN KEY `OrderItemAddon_addonId_fkey`;

-- DropIndex
DROP INDEX `CartItemAddon_addonId_fkey` ON `CartItemaddon`;

-- DropIndex
DROP INDEX `OrderItemAddon_addonId_fkey` ON `OrderItemaddon`;

-- AlterTable
ALTER TABLE `Review` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `CartItemAddon` ADD CONSTRAINT `CartItemAddon_addonId_fkey` FOREIGN KEY (`addonId`) REFERENCES `ProductAddon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItemAddon` ADD CONSTRAINT `OrderItemAddon_addonId_fkey` FOREIGN KEY (`addonId`) REFERENCES `ProductAddon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
