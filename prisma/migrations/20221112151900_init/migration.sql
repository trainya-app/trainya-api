/*
  Warnings:

  - You are about to drop the `auth_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_roles_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees_roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members_roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `auth_roles_permissions` DROP FOREIGN KEY `auth_roles_permissions_authRole_id_fkey`;

-- DropForeignKey
ALTER TABLE `auth_roles_permissions` DROP FOREIGN KEY `auth_roles_permissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_permissions` DROP FOREIGN KEY `employees_permissions_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_permissions` DROP FOREIGN KEY `employees_permissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_roles` DROP FOREIGN KEY `employees_roles_authRole_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_roles` DROP FOREIGN KEY `employees_roles_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_permissions` DROP FOREIGN KEY `members_permissions_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_permissions` DROP FOREIGN KEY `members_permissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_roles` DROP FOREIGN KEY `members_roles_authRole_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_roles` DROP FOREIGN KEY `members_roles_member_id_fkey`;

-- DropTable
DROP TABLE `auth_permissions`;

-- DropTable
DROP TABLE `auth_roles`;

-- DropTable
DROP TABLE `auth_roles_permissions`;

-- DropTable
DROP TABLE `employees_permissions`;

-- DropTable
DROP TABLE `employees_roles`;

-- DropTable
DROP TABLE `members_permissions`;

-- DropTable
DROP TABLE `members_roles`;
