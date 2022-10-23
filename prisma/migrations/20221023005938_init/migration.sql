-- DropForeignKey
ALTER TABLE `auth_roles_permissions` DROP FOREIGN KEY `auth_roles_permissions_authRole_id_fkey`;

-- DropForeignKey
ALTER TABLE `auth_roles_permissions` DROP FOREIGN KEY `auth_roles_permissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `classes` DROP FOREIGN KEY `classes_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `classes_week_days` DROP FOREIGN KEY `classes_week_days_week_day_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_classes` DROP FOREIGN KEY `employees_classes_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_documents` DROP FOREIGN KEY `employees_documents_document_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_permissions` DROP FOREIGN KEY `employees_permissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_ratings` DROP FOREIGN KEY `employees_ratings_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_roles` DROP FOREIGN KEY `employees_roles_authRole_id_fkey`;

-- DropForeignKey
ALTER TABLE `employees_statistics` DROP FOREIGN KEY `employees_statistics_employee_statistic_detail_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_employees` DROP FOREIGN KEY `gyms_employees_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_members` DROP FOREIGN KEY `gyms_members_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_members` DROP FOREIGN KEY `gyms_members_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_product_id_fkey`;

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
ALTER TABLE `member_months_day_progress` DROP FOREIGN KEY `member_months_day_progress_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `member_months_day_progress` DROP FOREIGN KEY `member_months_day_progress_month_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_classes` DROP FOREIGN KEY `members_classes_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_document_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_documents` DROP FOREIGN KEY `members_documents_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_goals` DROP FOREIGN KEY `members_goals_goal_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_goals` DROP FOREIGN KEY `members_goals_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_method_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_permissions` DROP FOREIGN KEY `members_permissions_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_permissions` DROP FOREIGN KEY `members_permissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_roles` DROP FOREIGN KEY `members_roles_authRole_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_roles` DROP FOREIGN KEY `members_roles_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_settings` DROP FOREIGN KEY `members_settings_settings_option_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_statistics` DROP FOREIGN KEY `members_statistics_statistic_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_workouts_plans` DROP FOREIGN KEY `members_workouts_plans_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `members_workouts_plans` DROP FOREIGN KEY `members_workouts_plans_workouts_plan_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categorie_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_provider_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_subscription_plan_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_exercises` DROP FOREIGN KEY `workouts_exercises_exercise_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_exercises` DROP FOREIGN KEY `workouts_exercises_workout_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans_workouts` DROP FOREIGN KEY `workouts_plans_workouts_workout_id_fkey`;

-- DropForeignKey
ALTER TABLE `workouts_plans_workouts` DROP FOREIGN KEY `workouts_plans_workouts_workouts_plan_id_fkey`;

-- AlterTable
ALTER TABLE `members` MODIFY `adress_number` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `state` VARCHAR(191) NULL,
    MODIFY `street` VARCHAR(256) NULL,
    MODIFY `at_gym` BOOLEAN NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `members_goals` ADD CONSTRAINT `members_goals_goal_id_fkey` FOREIGN KEY (`goal_id`) REFERENCES `goals`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_goals` ADD CONSTRAINT `members_goals_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_settings` ADD CONSTRAINT `members_settings_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_settings` ADD CONSTRAINT `members_settings_settings_option_id_fkey` FOREIGN KEY (`settings_option_id`) REFERENCES `settings_options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_statistics` ADD CONSTRAINT `members_statistics_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_statistics` ADD CONSTRAINT `members_statistics_statistic_id_fkey` FOREIGN KEY (`statistic_id`) REFERENCES `statistics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_method_id_fkey` FOREIGN KEY (`method_id`) REFERENCES `methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `legal_representatives` ADD CONSTRAINT `legal_representatives_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `workouts_plans_workouts` ADD CONSTRAINT `workouts_plans_workouts_workouts_plan_id_fkey` FOREIGN KEY (`workouts_plan_id`) REFERENCES `workouts_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_plans_workouts` ADD CONSTRAINT `workouts_plans_workouts_workout_id_fkey` FOREIGN KEY (`workout_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_exercises` ADD CONSTRAINT `workouts_exercises_workout_id_fkey` FOREIGN KEY (`workout_id`) REFERENCES `workouts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_exercises` ADD CONSTRAINT `workouts_exercises_exercise_id_fkey` FOREIGN KEY (`exercise_id`) REFERENCES `exercises`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_statistics` ADD CONSTRAINT `employees_statistics_employee_statistic_detail_id_fkey` FOREIGN KEY (`employee_statistic_detail_id`) REFERENCES `employees_statistics_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_documents` ADD CONSTRAINT `employees_documents_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_ratings` ADD CONSTRAINT `employees_ratings_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_classes` ADD CONSTRAINT `employees_classes_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes` ADD CONSTRAINT `classes_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes_week_days` ADD CONSTRAINT `classes_week_days_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes_week_days` ADD CONSTRAINT `classes_week_days_week_day_id_fkey` FOREIGN KEY (`week_day_id`) REFERENCES `week_days`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `gyms_members` ADD CONSTRAINT `gyms_members_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gyms_members` ADD CONSTRAINT `gyms_members_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_provider_id_fkey` FOREIGN KEY (`provider_id`) REFERENCES `providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categorie_id_fkey` FOREIGN KEY (`categorie_id`) REFERENCES `products_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_subscription_plan_id_fkey` FOREIGN KEY (`subscription_plan_id`) REFERENCES `subscriptions_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_permissions` ADD CONSTRAINT `members_permissions_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_permissions` ADD CONSTRAINT `members_permissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `auth_permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_roles` ADD CONSTRAINT `members_roles_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `members_roles` ADD CONSTRAINT `members_roles_authRole_id_fkey` FOREIGN KEY (`authRole_id`) REFERENCES `auth_roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `auth_roles_permissions` ADD CONSTRAINT `auth_roles_permissions_authRole_id_fkey` FOREIGN KEY (`authRole_id`) REFERENCES `auth_roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `auth_roles_permissions` ADD CONSTRAINT `auth_roles_permissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `auth_permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_roles` ADD CONSTRAINT `employees_roles_authRole_id_fkey` FOREIGN KEY (`authRole_id`) REFERENCES `auth_roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employees_permissions` ADD CONSTRAINT `employees_permissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `auth_permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_months_day_progress` ADD CONSTRAINT `member_months_day_progress_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_months_day_progress` ADD CONSTRAINT `member_months_day_progress_month_id_fkey` FOREIGN KEY (`month_id`) REFERENCES `months`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
