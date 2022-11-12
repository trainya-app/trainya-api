/*
  Warnings:

  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classes_week_days` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees_classes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members_classes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `week_days` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `classes` DROP FOREIGN KEY `classes_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_week_day_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_member_id_fkey`;

-- DropTable
DROP TABLE `classes`;

-- DropTable
DROP TABLE `classes_week_days`;

-- DropTable
DROP TABLE `employees_classes`;

-- DropTable
DROP TABLE `members_classes`;

-- DropTable
DROP TABLE `week_days`;
