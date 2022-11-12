/*
  Warnings:

  - You are about to drop the `employees_ratings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees_statistics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees_statistics_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gyms_subscriptions_plans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `legal_representatives` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `legal_representatives_documents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members_documents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members_payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members_settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members_statistics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `methods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings_options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `statistics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscriptions_plans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employee_statistic_detail_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_subscriptions_plans` DROP FOREIGN KEY `gyms_subscriptions_plans_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_subscriptions_plans` DROP FOREIGN KEY `gyms_subscriptions_plans_subscription_plan_id_fkey`;

-- DropForeignKey
ALTER TABLE `legal_representatives` DROP FOREIGN KEY `legal_representatives_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `legal_representatives_documents` DROP FOREIGN KEY `legal_representatives_documents_document_id_fkey`;

-- DropForeignKey
ALTER TABLE `legal_representatives_documents` DROP FOREIGN KEY `legal_representatives_documents_legal_representative_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_document_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_method_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_settings_option_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_statistic_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_subscription_plan_id_fkey`;

-- DropTable
DROP TABLE `employees_ratings`;

-- DropTable
DROP TABLE `employees_statistics`;

-- DropTable
DROP TABLE `employees_statistics_details`;

-- DropTable
DROP TABLE `gyms_subscriptions_plans`;

-- DropTable
DROP TABLE `legal_representatives`;

-- DropTable
DROP TABLE `legal_representatives_documents`;

-- DropTable
DROP TABLE `members_documents`;

-- DropTable
DROP TABLE `members_payments`;

-- DropTable
DROP TABLE `members_settings`;

-- DropTable
DROP TABLE `members_statistics`;

-- DropTable
DROP TABLE `methods`;

-- DropTable
DROP TABLE `settings_options`;

-- DropTable
DROP TABLE `statistics`;

-- DropTable
DROP TABLE `subscription`;

-- DropTable
DROP TABLE `subscriptions_plans`;
