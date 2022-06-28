/*
  Warnings:

  - Added the required column `image_url` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `classes_week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birth_date` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `daily_workload` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekdays_workload` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `employees_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `employees_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `employees_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `employees_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `employees_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratings` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `employees_ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `employees_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `employees_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `employees_statistics_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `employees_statistics_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `needs_equipment` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `gyms_employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `gyms_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_amount` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_amount` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `gyms_stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `gyms_subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adress_number` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members_classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `members_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_progress` to the `members_goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desired_progress` to the `members_goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finish_at` to the `members_goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finished_at` to the `members_goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `started_at` to the `members_goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members_goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `due_date` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_date` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members_settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `members_settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `members_statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finish_at` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finished_at` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `started_at` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `members_workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `methods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `methods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adress_number` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `providers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `responsibles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `responsibles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `responsibles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `responsibles_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `responsibles_documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `access_level` to the `rolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `rolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `rolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `settings_options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `settings_options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `started_at` to the `subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `months_covered` to the `subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `subscriptions_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preview_image_url` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video_url` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repetitions` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sets` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `workouts_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goal` to the `workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `workouts_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `workouts_plans_workouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `image_url` VARCHAR(256) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `classes` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(256) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `classes_week_days` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `documents` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `birth_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `daily_workload` INTEGER NOT NULL,
    ADD COLUMN `email` VARCHAR(256) NOT NULL,
    ADD COLUMN `name` VARCHAR(256) NOT NULL,
    ADD COLUMN `password` VARCHAR(256) NOT NULL,
    ADD COLUMN `phone` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `weekdays_workload` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_classes` ADD COLUMN `comments` VARCHAR(256) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `rating` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `employees_documents` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employees_ratings` ADD COLUMN `comments` VARCHAR(256) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `ratings` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `employees_statistics` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `value` VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE `employees_statistics_details` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `title` VARCHAR(256) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `exercises` ADD COLUMN `comments` VARCHAR(256) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `needs_equipment` BOOLEAN NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `goals` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `gyms` ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(256) NOT NULL,
    ADD COLUMN `password` VARCHAR(256) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(256) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `gyms_employees` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `gyms_members` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `gyms_stock` ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `max_amount` INTEGER NOT NULL,
    ADD COLUMN `min_amount` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `gyms_subscriptions_plans` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `members` ADD COLUMN `adress_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `height` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `name` VARCHAR(256) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` INTEGER NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(256) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `weight` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `members_classes` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `members_documents` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members_goals` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `current_progress` INTEGER NOT NULL,
    ADD COLUMN `desired_progress` INTEGER NOT NULL,
    ADD COLUMN `finish_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `finished_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `started_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `members_payments` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `due_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `payment_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `members_settings` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `value` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `members_statistics` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `value` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `members_workouts_plans` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `finish_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `finished_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `started_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `methods` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `image_url` VARCHAR(256) NOT NULL,
    ADD COLUMN `name` VARCHAR(256) NOT NULL,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `providers` ADD COLUMN `adress_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `cnpj` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(256) NOT NULL,
    ADD COLUMN `phone_number` INTEGER NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `responsibles` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(256) NOT NULL,
    ADD COLUMN `phone` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `responsibles_documents` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `rolls` ADD COLUMN `access_level` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `settings_options` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `statistics` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `subscription` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `started_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `subscriptions_plans` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `months_covered` INTEGER NOT NULL,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `title` VARCHAR(256) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `week_days` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `workouts` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(256) NOT NULL,
    ADD COLUMN `duration` VARCHAR(191) NOT NULL,
    ADD COLUMN `level` VARCHAR(191) NOT NULL,
    ADD COLUMN `preview_image_url` VARCHAR(256) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `video_url` VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE `workouts_exercises` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `duration` INTEGER NOT NULL,
    ADD COLUMN `repetitions` INTEGER NOT NULL,
    ADD COLUMN `sets` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `workouts_plans` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `goal` VARCHAR(256) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `workouts_plans_workouts` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
