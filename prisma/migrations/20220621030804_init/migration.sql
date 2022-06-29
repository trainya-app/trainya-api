-- AddForeignKey
ALTER TABLE `members_workouts_plans` ADD CONSTRAINT `members_workouts_plans_workouts_plansId_fkey` FOREIGN KEY (`workouts_plansId`) REFERENCES `workouts_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workouts_plans_workouts` ADD CONSTRAINT `workouts_plans_workouts_workouts_plansId_fkey` FOREIGN KEY (`workouts_plansId`) REFERENCES `workouts_plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
