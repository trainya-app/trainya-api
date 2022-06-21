/*
  Warnings:

  - You are about to drop the column `gymsId` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `classesId` on the `classes_week_days` table. All the data in the column will be lost.
  - You are about to drop the column `week_daysId` on the `classes_week_days` table. All the data in the column will be lost.
  - You are about to drop the column `rollsId` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `classesId` on the `employees_classes` table. All the data in the column will be lost.
  - You are about to drop the column `employeesId` on the `employees_classes` table. All the data in the column will be lost.
  - You are about to drop the column `documentsId` on the `employees_documents` table. All the data in the column will be lost.
  - You are about to drop the column `employeesId` on the `employees_documents` table. All the data in the column will be lost.
  - You are about to drop the column `employeesId` on the `employees_ratings` table. All the data in the column will be lost.
  - You are about to drop the column `membersId` on the `employees_ratings` table. All the data in the column will be lost.
  - You are about to drop the column `employeesId` on the `employees_statistics` table. All the data in the column will be lost.
  - You are about to drop the column `employees_statistics_detailsId` on the `employees_statistics` table. All the data in the column will be lost.
  - You are about to drop the column `employeesId` on the `gyms_employees` table. All the data in the column will be lost.
  - You are about to drop the column `gymsId` on the `gyms_employees` table. All the data in the column will be lost.
  - You are about to drop the column `gymsId` on the `gyms_members` table. All the data in the column will be lost.
  - You are about to drop the column `membersId` on the `gyms_members` table. All the data in the column will be lost.
  - You are about to drop the column `gymsId` on the `gyms_stock` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `gyms_stock` table. All the data in the column will be lost.
  - You are about to drop the column `gymsId` on the `gyms_subscriptions_plans` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptions_plansId` on the `gyms_subscriptions_plans` table. All the data in the column will be lost.
  - You are about to drop the column `classesId` on the `members_classes` table. All the data in the column will be lost.
  - You are about to drop the column `membersId` on the `members_classes` table. All the data in the column will be lost.
  - You are about to drop the column `documentsId` on the `members_documents` table. All the data in the column will be lost.
  - You are about to drop the column `membersId` on the `members_documents` table. All the data in the column will be lost.
  - You are about to drop the column `goalId` on the `members_goals` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `members_goals` table. All the data in the column will be lost.
  - You are about to drop the column `gymsId` on the `members_payments` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `members_payments` table. All the data in the column will be lost.
  - You are about to drop the column `methodsId` on the `members_payments` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `members_settings` table. All the data in the column will be lost.
  - You are about to drop the column `settings_optionsId` on the `members_settings` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `members_statistics` table. All the data in the column will be lost.
  - You are about to drop the column `statisticsId` on the `members_statistics` table. All the data in the column will be lost.
  - You are about to drop the column `membersId` on the `members_workouts_plans` table. All the data in the column will be lost.
  - You are about to drop the column `workouts_plansId` on the `members_workouts_plans` table. All the data in the column will be lost.
  - You are about to drop the column `categoriesId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `providersId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `responsibles` table. All the data in the column will be lost.
  - You are about to drop the column `documentsId` on the `responsibles_documents` table. All the data in the column will be lost.
  - You are about to drop the column `responsiblesId` on the `responsibles_documents` table. All the data in the column will be lost.
  - You are about to drop the column `employeesId` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `exercisesId` on the `workouts_exercises` table. All the data in the column will be lost.
  - You are about to drop the column `workoutsId` on the `workouts_exercises` table. All the data in the column will be lost.
  - You are about to drop the column `employeesId` on the `workouts_plans` table. All the data in the column will be lost.
  - You are about to drop the column `workoutId` on the `workouts_plans_workouts` table. All the data in the column will be lost.
  - You are about to drop the column `workouts_plansId` on the `workouts_plans_workouts` table. All the data in the column will be lost.
  - You are about to drop the `subscriptions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gyms_id` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classes_id` to the `classes_week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `week_days_id` to the `classes_week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rolls_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classes_id` to the `employees_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_id` to the `employees_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documents_id` to the `employees_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_id` to the `employees_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_id` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members_id` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_id` to the `employees_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_statistics_details_id` to the `employees_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_id` to the `gyms_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gyms_id` to the `gyms_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gyms_id` to the `gyms_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members_id` to the `gyms_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gyms_id` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `products_id` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gyms_id` to the `gyms_subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptions_plans_id` to the `gyms_subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classes_id` to the `members_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members_id` to the `members_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documents_id` to the `members_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members_id` to the `members_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `members_goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gyms_id` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `methods_id` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `members_settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `settings_options_id` to the `members_settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `members_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statistics_id` to the `members_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members_id` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workouts_plans_id` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categories_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providers_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `responsibles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documents_id` to the `responsibles_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibles_id` to the `responsibles_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_id` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercises_id` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workouts_id` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_id` to the `workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workout_id` to the `workouts_plans_workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workouts_plans_id` to the `workouts_plans_workouts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `classes` DROP FOREIGN KEY `classes_gymsId_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_classesId_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_week_daysId_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_rollsId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_classesId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_employeesId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_documents` DROP FOREIGN KEY `employees_documents_documentsId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_documents` DROP FOREIGN KEY `employees_documents_employeesId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_employeesId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_membersId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employeesId_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employees_statistics_detailsId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_employees` DROP FOREIGN KEY `gyms_employees_employeesId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_employees` DROP FOREIGN KEY `gyms_employees_gymsId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_members` DROP FOREIGN KEY `gyms_members_gymsId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_members` DROP FOREIGN KEY `gyms_members_membersId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_gymsId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_productsId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_subscriptions_plans` DROP FOREIGN KEY `gyms_subscriptions_plans_gymsId_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_subscriptions_plans` DROP FOREIGN KEY `gyms_subscriptions_plans_subscriptions_plansId_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_classesId_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_membersId_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_documentsId_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_membersId_fkey`;

-- DropForeignKey
ALTER TABLE `members_goals` DROP FOREIGN KEY `members_goals_goalId_fkey`;

-- DropForeignKey
ALTER TABLE `members_goals` DROP FOREIGN KEY `members_goals_memberId_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_gymsId_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_memberId_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_methodsId_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_memberId_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_settings_optionsId_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_memberId_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_statisticsId_fkey`;

-- DropForeignKey
ALTER TABLE `members_workouts_plans` DROP FOREIGN KEY `members_workouts_plans_membersId_fkey`;

-- DropForeignKey
ALTER TABLE `members_workouts_plans` DROP FOREIGN KEY `members_workouts_plans_workouts_plansId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categoriesId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_providersId_fkey`;

-- DropForeignKey
ALTER TABLE `responsibles` DROP FOREIGN KEY `responsibles_memberId_fkey`;

-- DropForeignKey
ALTER TABLE `responsibles_documents` DROP FOREIGN KEY `responsibles_documents_documentsId_fkey`;

-- DropForeignKey
ALTER TABLE `responsibles_documents` DROP FOREIGN KEY `responsibles_documents_responsiblesId_fkey`;

-- DropForeignKey
ALTER TABLE `subscriptions` DROP FOREIGN KEY `subscriptions_membersId_fkey`;

-- DropForeignKey
ALTER TABLE `subscriptions` DROP FOREIGN KEY `subscriptions_subscriptions_plansId_fkey`;

-- DropForeignKey
ALTER TABLE `workouts` DROP FOREIGN KEY `workouts_employeesId_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_exercises` DROP FOREIGN KEY `workouts_exercises_exercisesId_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_exercises` DROP FOREIGN KEY `workouts_exercises_workoutsId_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans` DROP FOREIGN KEY `workouts_plans_employeesId_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans_workouts` DROP FOREIGN KEY `workouts_plans_workouts_workoutId_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans_workouts` DROP FOREIGN KEY `workouts_plans_workouts_workouts_plansId_fkey`;

-- AlterTable
ALTER TABLE `classes` DROP COLUMN `gymsId`,
    ADD COLUMN `gyms_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `classes_week_days` DROP COLUMN `classesId`,
    DROP COLUMN `week_daysId`,
    ADD COLUMN `classes_id` INTEGER NOT NULL,
    ADD COLUMN `week_days_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `rollsId`,
    ADD COLUMN `rolls_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_classes` DROP COLUMN `classesId`,
    DROP COLUMN `employeesId`,
    ADD COLUMN `classes_id` INTEGER NOT NULL,
    ADD COLUMN `employees_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_documents` DROP COLUMN `documentsId`,
    DROP COLUMN `employeesId`,
    ADD COLUMN `documents_id` INTEGER NOT NULL,
    ADD COLUMN `employees_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_ratings` DROP COLUMN `employeesId`,
    DROP COLUMN `membersId`,
    ADD COLUMN `employees_id` INTEGER NOT NULL,
    ADD COLUMN `members_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_statistics` DROP COLUMN `employeesId`,
    DROP COLUMN `employees_statistics_detailsId`,
    ADD COLUMN `employees_id` INTEGER NOT NULL,
    ADD COLUMN `employees_statistics_details_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_employees` DROP COLUMN `employeesId`,
    DROP COLUMN `gymsId`,
    ADD COLUMN `employees_id` INTEGER NOT NULL,
    ADD COLUMN `gyms_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_members` DROP COLUMN `gymsId`,
    DROP COLUMN `membersId`,
    ADD COLUMN `gyms_id` INTEGER NOT NULL,
    ADD COLUMN `members_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_stock` DROP COLUMN `gymsId`,
    DROP COLUMN `productsId`,
    ADD COLUMN `gyms_id` INTEGER NOT NULL,
    ADD COLUMN `products_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_subscriptions_plans` DROP COLUMN `gymsId`,
    DROP COLUMN `subscriptions_plansId`,
    ADD COLUMN `gyms_id` INTEGER NOT NULL,
    ADD COLUMN `subscriptions_plans_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_classes` DROP COLUMN `classesId`,
    DROP COLUMN `membersId`,
    ADD COLUMN `classes_id` INTEGER NOT NULL,
    ADD COLUMN `members_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_documents` DROP COLUMN `documentsId`,
    DROP COLUMN `membersId`,
    ADD COLUMN `documents_id` INTEGER NOT NULL,
    ADD COLUMN `members_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_goals` DROP COLUMN `goalId`,
    DROP COLUMN `memberId`,
    ADD COLUMN `goal_id` INTEGER NULL,
    ADD COLUMN `member_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_payments` DROP COLUMN `gymsId`,
    DROP COLUMN `memberId`,
    DROP COLUMN `methodsId`,
    ADD COLUMN `gyms_id` INTEGER NOT NULL,
    ADD COLUMN `member_id` INTEGER NOT NULL,
    ADD COLUMN `methods_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_settings` DROP COLUMN `memberId`,
    DROP COLUMN `settings_optionsId`,
    ADD COLUMN `member_id` INTEGER NOT NULL,
    ADD COLUMN `settings_options_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_statistics` DROP COLUMN `memberId`,
    DROP COLUMN `statisticsId`,
    ADD COLUMN `member_id` INTEGER NOT NULL,
    ADD COLUMN `statistics_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_workouts_plans` DROP COLUMN `membersId`,
    DROP COLUMN `workouts_plansId`,
    ADD COLUMN `members_id` INTEGER NOT NULL,
    ADD COLUMN `workouts_plans_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoriesId`,
    DROP COLUMN `providersId`,
    ADD COLUMN `categories_id` INTEGER NOT NULL,
    ADD COLUMN `providers_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `responsibles` DROP COLUMN `memberId`,
    ADD COLUMN `member_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `responsibles_documents` DROP COLUMN `documentsId`,
    DROP COLUMN `responsiblesId`,
    ADD COLUMN `documents_id` INTEGER NOT NULL,
    ADD COLUMN `responsibles_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts` DROP COLUMN `employeesId`,
    ADD COLUMN `employees_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts_exercises` DROP COLUMN `exercisesId`,
    DROP COLUMN `workoutsId`,
    ADD COLUMN `exercises_id` INTEGER NOT NULL,
    ADD COLUMN `workouts_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts_plans` DROP COLUMN `employeesId`,
    ADD COLUMN `employees_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts_plans_workouts` DROP COLUMN `workoutId`,
    DROP COLUMN `workouts_plansId`,
    ADD COLUMN `workout_id` INTEGER NOT NULL,
    ADD COLUMN `workouts_plans_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `subscriptions`;

-- CreateTable
CREATE TABLE `subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subscriptions_plans_id` INTEGER NOT NULL,
    `member_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `members_goals` ADD CONSTRAINT `members_goals_goal_id_fkey` FOREIGN KEY (`goal_id`) REFERENCES `goals`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_goals` ADD CONSTRAINT `members_goals_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_settings` ADD CONSTRAINT `members_settings_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_settings` ADD CONSTRAINT `members_settings_settings_options_id_fkey` FOREIGN KEY (`settings_options_id`) REFERENCES `settings_options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_statistics` ADD CONSTRAINT `members_statistics_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_statistics` ADD CONSTRAINT `members_statistics_statistics_id_fkey` FOREIGN KEY (`statistics_id`) REFERENCES `statistics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_methods_id_fkey` FOREIGN KEY (`methods_id`) REFERENCES `methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_gyms_id_fkey` FOREIGN KEY (`gyms_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `responsibles` ADD CONSTRAINT `responsibles_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `responsibles_documents` ADD CONSTRAINT `responsibles_documents_responsibles_id_fkey` FOREIGN KEY (`responsibles_id`) REFERENCES `responsibles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `responsibles_documents` ADD CONSTRAINT `responsibles_documents_documents_id_fkey` FOREIGN KEY (`documents_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_documents` ADD CONSTRAINT `members_documents_members_id_fkey` FOREIGN KEY (`members_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_documents` ADD CONSTRAINT `members_documents_documents_id_fkey` FOREIGN KEY (`documents_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_workouts_plans` ADD CONSTRAINT `members_workouts_plans_members_id_fkey` FOREIGN KEY (`members_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_workouts_plans` ADD CONSTRAINT `members_workouts_plans_workouts_plans_id_fkey` FOREIGN KEY (`workouts_plans_id`) REFERENCES `workouts_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_classes` ADD CONSTRAINT `members_classes_members_id_fkey` FOREIGN KEY (`members_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_classes` ADD CONSTRAINT `members_classes_classes_id_fkey` FOREIGN KEY (`classes_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_plans` ADD CONSTRAINT `workouts_plans_employees_id_fkey` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_plans_workouts` ADD CONSTRAINT `workouts_plans_workouts_workouts_plans_id_fkey` FOREIGN KEY (`workouts_plans_id`) REFERENCES `workouts_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_plans_workouts` ADD CONSTRAINT `workouts_plans_workouts_workout_id_fkey` FOREIGN KEY (`workout_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts` ADD CONSTRAINT `workouts_employees_id_fkey` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_exercises` ADD CONSTRAINT `workouts_exercises_workouts_id_fkey` FOREIGN KEY (`workouts_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_exercises` ADD CONSTRAINT `workouts_exercises_exercises_id_fkey` FOREIGN KEY (`exercises_id`) REFERENCES `exercises`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_rolls_id_fkey` FOREIGN KEY (`rolls_id`) REFERENCES `rolls`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_statistics` ADD CONSTRAINT `employees_statistics_employees_id_fkey` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_statistics` ADD CONSTRAINT `employees_statistics_employees_statistics_details_id_fkey` FOREIGN KEY (`employees_statistics_details_id`) REFERENCES `employees_statistics_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_documents` ADD CONSTRAINT `employees_documents_documents_id_fkey` FOREIGN KEY (`documents_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_documents` ADD CONSTRAINT `employees_documents_employees_id_fkey` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_ratings` ADD CONSTRAINT `employees_ratings_members_id_fkey` FOREIGN KEY (`members_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_ratings` ADD CONSTRAINT `employees_ratings_employees_id_fkey` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_classes` ADD CONSTRAINT `employees_classes_employees_id_fkey` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_classes` ADD CONSTRAINT `employees_classes_classes_id_fkey` FOREIGN KEY (`classes_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes` ADD CONSTRAINT `classes_gyms_id_fkey` FOREIGN KEY (`gyms_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes_week_days` ADD CONSTRAINT `classes_week_days_classes_id_fkey` FOREIGN KEY (`classes_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes_week_days` ADD CONSTRAINT `classes_week_days_week_days_id_fkey` FOREIGN KEY (`week_days_id`) REFERENCES `week_days`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_employees` ADD CONSTRAINT `gyms_employees_employees_id_fkey` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_employees` ADD CONSTRAINT `gyms_employees_gyms_id_fkey` FOREIGN KEY (`gyms_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_stock` ADD CONSTRAINT `gyms_stock_gyms_id_fkey` FOREIGN KEY (`gyms_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_stock` ADD CONSTRAINT `gyms_stock_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_subscriptions_plans` ADD CONSTRAINT `gyms_subscriptions_plans_gyms_id_fkey` FOREIGN KEY (`gyms_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_subscriptions_plans` ADD CONSTRAINT `gyms_subscriptions_plans_subscriptions_plans_id_fkey` FOREIGN KEY (`subscriptions_plans_id`) REFERENCES `subscriptions_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_members` ADD CONSTRAINT `gyms_members_members_id_fkey` FOREIGN KEY (`members_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_members` ADD CONSTRAINT `gyms_members_gyms_id_fkey` FOREIGN KEY (`gyms_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categories_id_fkey` FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_providers_id_fkey` FOREIGN KEY (`providers_id`) REFERENCES `providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_subscriptions_plans_id_fkey` FOREIGN KEY (`subscriptions_plans_id`) REFERENCES `subscriptions_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
