/*
  Fixes:
  - Add Review.updatedAt safely (backfill).
  - Add unique (userId, productId).
  - Re-create FKs with ON DELETE CASCADE.
  - Remove wrong "DROP INDEX ..._fkey" lines.
*/

-- اختياري: لو بالفعل فيه FK قديم بأسماء دي، هنشيلهم الأول.
-- لو مش موجودين، السطور دي هتعمل Error؛
-- لو مش متأكد إنهم موجودين فعلاً، احذف سطور DROP FOREIGN KEY دي.
ALTER TABLE `Review` DROP FOREIGN KEY `Review_productId_fkey`;
ALTER TABLE `Review` DROP FOREIGN KEY `Review_userId_fkey`;

-- product: حقول التجميع
ALTER TABLE `Product`
  ADD COLUMN `ratingAverage` DOUBLE NOT NULL DEFAULT 0,
  ADD COLUMN `ratingCount`   INTEGER NOT NULL DEFAULT 0;

-- Review.updatedAt: اضف مؤقتًا NULL ثم اعمل backfill ثم اجعله NOT NULL + DEFAULT/ON UPDATE
ALTER TABLE `Review`
  ADD COLUMN `updatedAt` DATETIME(3) NULL,
  MODIFY `comment` TEXT NULL;

UPDATE `Review`
SET `updatedAt` = NOW(3)
WHERE `updatedAt` IS NULL;

ALTER TABLE `Review`
  MODIFY `updatedAt` DATETIME(3) NOT NULL
  DEFAULT CURRENT_TIMESTAMP(3)
  ON UPDATE CURRENT_TIMESTAMP(3);

-- Unique لكل (userId, productId)
CREATE UNIQUE INDEX `Review_userId_productId_key`
  ON `Review`(`userId`, `productId`);

-- (اختياري) فهارس مساعدة على userId و productId لو محتاج أداء أفضل
CREATE INDEX `Review_productId_idx` ON `Review`(`productId`);
CREATE INDEX `Review_userId_idx`    ON `Review`(`userId`);

-- إعادة إنشاء علاقات الـ FK مع CASCADE
ALTER TABLE `Review`
  ADD CONSTRAINT `Review_userId_fkey`
    FOREIGN KEY (`userId`) REFERENCES `User`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Review_productId_fkey`
    FOREIGN KEY (`productId`) REFERENCES `Product`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE;
