/*
  Warnings:

  - You are about to drop the column `gyms_id` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `classes_id` on the `classes_week_days` table. All the data in the column will be lost.
  - You are about to drop the column `week_days_id` on the `classes_week_days` table. All the data in the column will be lost.
  - You are about to drop the column `rolls_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `classes_id` on the `employees_classes` table. All the data in the column will be lost.
  - You are about to drop the column `employees_id` on the `employees_classes` table. All the data in the column will be lost.
  - You are about to drop the column `documents_id` on the `employees_documents` table. All the data in the column will be lost.
  - You are about to drop the column `employees_id` on the `employees_documents` table. All the data in the column will be lost.
  - You are about to drop the column `comments` on the `employees_ratings` table. All the data in the column will be lost.
  - You are about to drop the column `employees_id` on the `employees_ratings` table. All the data in the column will be lost.
  - You are about to drop the column `members_id` on the `employees_ratings` table. All the data in the column will be lost.
  - You are about to drop the column `employees_id` on the `employees_statistics` table. All the data in the column will be lost.
  - You are about to drop the column `employees_statistics_details_id` on the `employees_statistics` table. All the data in the column will be lost.
  - You are about to drop the column `comments` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `employees_id` on the `gyms_employees` table. All the data in the column will be lost.
  - You are about to drop the column `gyms_id` on the `gyms_employees` table. All the data in the column will be lost.
  - You are about to drop the column `gyms_id` on the `gyms_members` table. All the data in the column will be lost.
  - You are about to drop the column `members_id` on the `gyms_members` table. All the data in the column will be lost.
  - You are about to drop the column `gyms_id` on the `gyms_stock` table. All the data in the column will be lost.
  - You are about to drop the column `products_id` on the `gyms_stock` table. All the data in the column will be lost.
  - You are about to drop the column `gyms_id` on the `gyms_subscriptions_plans` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptions_plans_id` on the `gyms_subscriptions_plans` table. All the data in the column will be lost.
  - You are about to drop the column `documents_id` on the `legal_representatives_documents` table. All the data in the column will be lost.
  - You are about to drop the column `legal_representatives_id` on the `legal_representatives_documents` table. All the data in the column will be lost.
  - You are about to drop the column `classes_id` on the `members_classes` table. All the data in the column will be lost.
  - You are about to drop the column `members_id` on the `members_classes` table. All the data in the column will be lost.
  - You are about to drop the column `documents_id` on the `members_documents` table. All the data in the column will be lost.
  - You are about to drop the column `members_id` on the `members_documents` table. All the data in the column will be lost.
  - You are about to drop the column `gyms_id` on the `members_payments` table. All the data in the column will be lost.
  - You are about to drop the column `methods_id` on the `members_payments` table. All the data in the column will be lost.
  - You are about to drop the column `settings_options_id` on the `members_settings` table. All the data in the column will be lost.
  - You are about to drop the column `statistics_id` on the `members_statistics` table. All the data in the column will be lost.
  - You are about to drop the column `members_id` on the `members_workouts_plans` table. All the data in the column will be lost.
  - You are about to drop the column `workouts_plans_id` on the `members_workouts_plans` table. All the data in the column will be lost.
  - You are about to drop the column `categories_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `providers_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptions_plans_id` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `employees_id` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `exercises_id` on the `workouts_exercises` table. All the data in the column will be lost.
  - You are about to drop the column `workouts_id` on the `workouts_exercises` table. All the data in the column will be lost.
  - You are about to drop the column `employees_id` on the `workouts_plans` table. All the data in the column will be lost.
  - You are about to drop the column `workouts_plans_id` on the `workouts_plans_workouts` table. All the data in the column will be lost.
  - Added the required column `gym_id` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `classes_week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `week_day_id` to the `classes_week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roll_id` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `employees_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `employees_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_id` to the `employees_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `employees_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `employees_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_statistic_detail_id` to the `employees_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `gyms_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_id` to the `gyms_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_id` to the `gyms_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `gyms_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_id` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_id` to the `gyms_subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_plan_id` to the `gyms_subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_id` to the `legal_representatives_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `legal_representative_id` to the `legal_representatives_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `members_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `members_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_id` to the `members_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `members_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_id` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method_id` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `settings_option_id` to the `members_settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statistic_id` to the `members_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_id` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workouts_plan_id` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categorie_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_plan_id` to the `subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercise_id` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workout_id` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workouts_plan_id` to the `workouts_plans_workouts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `classes` DROP FOREIGN KEY `classes_gyms_id_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_classes_id_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_week_days_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_rolls_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_classes_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_employees_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_documents` DROP FOREIGN KEY `employees_documents_documents_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_documents` DROP FOREIGN KEY `employees_documents_employees_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_employees_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_members_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employees_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employees_statistics_details_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_employees` DROP FOREIGN KEY `gyms_employees_employees_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_employees` DROP FOREIGN KEY `gyms_employees_gyms_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_members` DROP FOREIGN KEY `gyms_members_gyms_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_members` DROP FOREIGN KEY `gyms_members_members_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_gyms_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_products_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_subscriptions_plans` DROP FOREIGN KEY `gyms_subscriptions_plans_gyms_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_subscriptions_plans` DROP FOREIGN KEY `gyms_subscriptions_plans_subscriptions_plans_id_fkey`;

-- DropForeignKey
ALTER TABLE `legal_representatives_documents` DROP FOREIGN KEY `legal_representatives_documents_documents_id_fkey`;

-- DropForeignKey
ALTER TABLE `legal_representatives_documents` DROP FOREIGN KEY `legal_representatives_documents_legal_representatives_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_classes_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_members_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_documents_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_members_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_gyms_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_methods_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_settings_options_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_statistics_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_workouts_plans` DROP FOREIGN KEY `members_workouts_plans_members_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_workouts_plans` DROP FOREIGN KEY `members_workouts_plans_workouts_plans_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categories_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_providers_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_subscriptions_plans_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts` DROP FOREIGN KEY `workouts_employees_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_exercises` DROP FOREIGN KEY `workouts_exercises_exercises_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_exercises` DROP FOREIGN KEY `workouts_exercises_workouts_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans` DROP FOREIGN KEY `workouts_plans_employees_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans_workouts` DROP FOREIGN KEY `workouts_plans_workouts_workouts_plans_id_fkey`;

-- AlterTable
ALTER TABLE `classes` DROP COLUMN `gyms_id`,
    ADD COLUMN `gym_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `classes_week_days` DROP COLUMN `classes_id`,
    DROP COLUMN `week_days_id`,
    ADD COLUMN `class_id` INTEGER NOT NULL,
    ADD COLUMN `week_day_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `rolls_id`,
    ADD COLUMN `roll_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_classes` DROP COLUMN `classes_id`,
    DROP COLUMN `employees_id`,
    ADD COLUMN `class_id` INTEGER NOT NULL,
    ADD COLUMN `employee_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_documents` DROP COLUMN `documents_id`,
    DROP COLUMN `employees_id`,
    ADD COLUMN `document_id` INTEGER NOT NULL,
    ADD COLUMN `employee_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_ratings` DROP COLUMN `comments`,
    DROP COLUMN `employees_id`,
    DROP COLUMN `members_id`,
    ADD COLUMN `comment` VARCHAR(256) NOT NULL,
    ADD COLUMN `employee_id` INTEGER NOT NULL,
    ADD COLUMN `member_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_statistics` DROP COLUMN `employees_id`,
    DROP COLUMN `employees_statistics_details_id`,
    ADD COLUMN `employee_id` INTEGER NOT NULL,
    ADD COLUMN `employee_statistic_detail_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `exercises` DROP COLUMN `comments`,
    ADD COLUMN `comment` VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE `gyms` ADD COLUMN `zip_code` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_employees` DROP COLUMN `employees_id`,
    DROP COLUMN `gyms_id`,
    ADD COLUMN `employee_id` INTEGER NOT NULL,
    ADD COLUMN `gym_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_members` DROP COLUMN `gyms_id`,
    DROP COLUMN `members_id`,
    ADD COLUMN `gym_id` INTEGER NOT NULL,
    ADD COLUMN `member_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_stock` DROP COLUMN `gyms_id`,
    DROP COLUMN `products_id`,
    ADD COLUMN `gym_id` INTEGER NOT NULL,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gyms_subscriptions_plans` DROP COLUMN `gyms_id`,
    DROP COLUMN `subscriptions_plans_id`,
    ADD COLUMN `gym_id` INTEGER NOT NULL,
    ADD COLUMN `subscription_plan_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `legal_representatives_documents` DROP COLUMN `documents_id`,
    DROP COLUMN `legal_representatives_id`,
    ADD COLUMN `document_id` INTEGER NOT NULL,
    ADD COLUMN `legal_representative_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_classes` DROP COLUMN `classes_id`,
    DROP COLUMN `members_id`,
    ADD COLUMN `class_id` INTEGER NOT NULL,
    ADD COLUMN `member_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_documents` DROP COLUMN `documents_id`,
    DROP COLUMN `members_id`,
    ADD COLUMN `document_id` INTEGER NOT NULL,
    ADD COLUMN `member_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_payments` DROP COLUMN `gyms_id`,
    DROP COLUMN `methods_id`,
    ADD COLUMN `gym_id` INTEGER NOT NULL,
    ADD COLUMN `method_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_settings` DROP COLUMN `settings_options_id`,
    ADD COLUMN `settings_option_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_statistics` DROP COLUMN `statistics_id`,
    ADD COLUMN `statistic_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_workouts_plans` DROP COLUMN `members_id`,
    DROP COLUMN `workouts_plans_id`,
    ADD COLUMN `member_id` INTEGER NOT NULL,
    ADD COLUMN `workouts_plan_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categories_id`,
    DROP COLUMN `providers_id`,
    ADD COLUMN `categorie_id` INTEGER NOT NULL,
    ADD COLUMN `provider_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `subscription` DROP COLUMN `subscriptions_plans_id`,
    ADD COLUMN `subscription_plan_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts` DROP COLUMN `employees_id`,
    ADD COLUMN `employee_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts_exercises` DROP COLUMN `exercises_id`,
    DROP COLUMN `workouts_id`,
    ADD COLUMN `exercise_id` INTEGER NOT NULL,
    ADD COLUMN `workout_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts_plans` DROP COLUMN `employees_id`,
    ADD COLUMN `employee_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `workouts_plans_workouts` DROP COLUMN `workouts_plans_id`,
    ADD COLUMN `workouts_plan_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `members_settings` ADD CONSTRAINT `members_settings_settings_option_id_fkey` FOREIGN KEY (`settings_option_id`) REFERENCES `settings_options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_statistics` ADD CONSTRAINT `members_statistics_statistic_id_fkey` FOREIGN KEY (`statistic_id`) REFERENCES `statistics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_method_id_fkey` FOREIGN KEY (`method_id`) REFERENCES `methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `legal_representatives_documents` ADD CONSTRAINT `legal_representatives_documents_legal_representative_id_fkey` FOREIGN KEY (`legal_representative_id`) REFERENCES `legal_representatives`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `legal_representatives_documents` ADD CONSTRAINT `legal_representatives_documents_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_documents` ADD CONSTRAINT `members_documents_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_documents` ADD CONSTRAINT `members_documents_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_workouts_plans` ADD CONSTRAINT `members_workouts_plans_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_workouts_plans` ADD CONSTRAINT `members_workouts_plans_workouts_plan_id_fkey` FOREIGN KEY (`workouts_plan_id`) REFERENCES `workouts_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_classes` ADD CONSTRAINT `members_classes_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_classes` ADD CONSTRAINT `members_classes_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_plans` ADD CONSTRAINT `workouts_plans_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_plans_workouts` ADD CONSTRAINT `workouts_plans_workouts_workouts_plan_id_fkey` FOREIGN KEY (`workouts_plan_id`) REFERENCES `workouts_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts` ADD CONSTRAINT `workouts_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_exercises` ADD CONSTRAINT `workouts_exercises_workout_id_fkey` FOREIGN KEY (`workout_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_exercises` ADD CONSTRAINT `workouts_exercises_exercise_id_fkey` FOREIGN KEY (`exercise_id`) REFERENCES `exercises`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_roll_id_fkey` FOREIGN KEY (`roll_id`) REFERENCES `rolls`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_statistics` ADD CONSTRAINT `employees_statistics_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_statistics` ADD CONSTRAINT `employees_statistics_employee_statistic_detail_id_fkey` FOREIGN KEY (`employee_statistic_detail_id`) REFERENCES `employees_statistics_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_documents` ADD CONSTRAINT `employees_documents_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_documents` ADD CONSTRAINT `employees_documents_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_ratings` ADD CONSTRAINT `employees_ratings_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_ratings` ADD CONSTRAINT `employees_ratings_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_classes` ADD CONSTRAINT `employees_classes_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_classes` ADD CONSTRAINT `employees_classes_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes` ADD CONSTRAINT `classes_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes_week_days` ADD CONSTRAINT `classes_week_days_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes_week_days` ADD CONSTRAINT `classes_week_days_week_day_id_fkey` FOREIGN KEY (`week_day_id`) REFERENCES `week_days`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_employees` ADD CONSTRAINT `gyms_employees_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_employees` ADD CONSTRAINT `gyms_employees_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_stock` ADD CONSTRAINT `gyms_stock_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_stock` ADD CONSTRAINT `gyms_stock_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_subscriptions_plans` ADD CONSTRAINT `gyms_subscriptions_plans_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_subscriptions_plans` ADD CONSTRAINT `gyms_subscriptions_plans_subscription_plan_id_fkey` FOREIGN KEY (`subscription_plan_id`) REFERENCES `subscriptions_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_members` ADD CONSTRAINT `gyms_members_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_members` ADD CONSTRAINT `gyms_members_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categorie_id_fkey` FOREIGN KEY (`categorie_id`) REFERENCES `products_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_provider_id_fkey` FOREIGN KEY (`provider_id`) REFERENCES `providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_subscription_plan_id_fkey` FOREIGN KEY (`subscription_plan_id`) REFERENCES `subscriptions_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
