-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_documents` DROP FOREIGN KEY `employees_documents_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_permissions` DROP FOREIGN KEY `employees_permissions_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_roles` DROP FOREIGN KEY `employees_roles_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_employees` DROP FOREIGN KEY `gyms_employees_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts` DROP FOREIGN KEY `workouts_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans` DROP FOREIGN KEY `workouts_plans_employee_id_fkey`;

-- AddForeignKey
ALTER TABLE `workouts_plans` ADD CONSTRAINT `workouts_plans_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts` ADD CONSTRAINT `workouts_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_statistics` ADD CONSTRAINT `employees_statistics_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_documents` ADD CONSTRAINT `employees_documents_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_ratings` ADD CONSTRAINT `employees_ratings_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_classes` ADD CONSTRAINT `employees_classes_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_employees` ADD CONSTRAINT `gyms_employees_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_roles` ADD CONSTRAINT `employees_roles_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_permissions` ADD CONSTRAINT `employees_permissions_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
