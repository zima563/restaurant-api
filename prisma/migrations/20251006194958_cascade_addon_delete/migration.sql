-- DropForeignKey
ALTER TABLE `cartitemaddon` DROP FOREIGN KEY `CartItemAddon_addonId_fkey`;

-- DropForeignKey
ALTER TABLE `orderitemaddon` DROP FOREIGN KEY `OrderItemAddon_addonId_fkey`;

-- DropIndex
DROP INDEX `CartItemAddon_addonId_fkey` ON `cartitemaddon`;

-- DropIndex
DROP INDEX `OrderItemAddon_addonId_fkey` ON `orderitemaddon`;

-- AlterTable
ALTER TABLE `review` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `CartItemAddon` ADD CONSTRAINT `CartItemAddon_addonId_fkey` FOREIGN KEY (`addonId`) REFERENCES `ProductAddon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItemAddon` ADD CONSTRAINT `OrderItemAddon_addonId_fkey` FOREIGN KEY (`addonId`) REFERENCES `ProductAddon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
