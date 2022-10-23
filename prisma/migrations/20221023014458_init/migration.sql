-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_members` DROP FOREIGN KEY `gyms_members_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `legal_representatives` DROP FOREIGN KEY `legal_representatives_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `member_months_day_progress` DROP FOREIGN KEY `member_months_day_progress_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_permissions` DROP FOREIGN KEY `members_permissions_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_roles` DROP FOREIGN KEY `members_roles_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_workouts_plans` DROP FOREIGN KEY `members_workouts_plans_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_member_id_fkey`;

-- AddForeignKey
ALTER TABLE `members_settings` ADD CONSTRAINT `members_settings_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_statistics` ADD CONSTRAINT `members_statistics_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `legal_representatives` ADD CONSTRAINT `legal_representatives_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_documents` ADD CONSTRAINT `members_documents_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_workouts_plans` ADD CONSTRAINT `members_workouts_plans_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_classes` ADD CONSTRAINT `members_classes_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_ratings` ADD CONSTRAINT `employees_ratings_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_members` ADD CONSTRAINT `gyms_members_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_permissions` ADD CONSTRAINT `members_permissions_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_roles` ADD CONSTRAINT `members_roles_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_months_day_progress` ADD CONSTRAINT `member_months_day_progress_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
