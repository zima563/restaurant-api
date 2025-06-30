-- AlterTable
ALTER TABLE `cartitem` ADD COLUMN `sizeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `orderitem` ADD COLUMN `sizeId` INTEGER NULL;

-- CreateTable
CREATE TABLE `CartItemAddon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cartItemId` INTEGER NOT NULL,
    `addonId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItemAddon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderItemId` INTEGER NOT NULL,
    `addonId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CartItem` ADD CONSTRAINT `CartItem_sizeId_fkey` FOREIGN KEY (`sizeId`) REFERENCES `ProductSize`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItemAddon` ADD CONSTRAINT `CartItemAddon_cartItemId_fkey` FOREIGN KEY (`cartItemId`) REFERENCES `CartItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CartItemAddon` ADD CONSTRAINT `CartItemAddon_addonId_fkey` FOREIGN KEY (`addonId`) REFERENCES `ProductAddon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_sizeId_fkey` FOREIGN KEY (`sizeId`) REFERENCES `ProductSize`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItemAddon` ADD CONSTRAINT `OrderItemAddon_orderItemId_fkey` FOREIGN KEY (`orderItemId`) REFERENCES `OrderItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItemAddon` ADD CONSTRAINT `OrderItemAddon_addonId_fkey` FOREIGN KEY (`addonId`) REFERENCES `ProductAddon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
