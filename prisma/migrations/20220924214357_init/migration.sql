-- AlterTable
ALTER TABLE `employees` MODIFY `daily_workload` INTEGER NULL,
    MODIFY `weekdays_workload` INTEGER NULL,
    MODIFY `payment_date` DATETIME(3) NULL,
    MODIFY `profile_img` VARCHAR(191) NULL,
    MODIFY `wage` INTEGER NULL;

-- AlterTable
ALTER TABLE `employees_documents` MODIFY `value` VARCHAR(191) NOT NULL;
