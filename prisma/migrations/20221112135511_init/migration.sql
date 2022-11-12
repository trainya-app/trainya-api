-- CreateTable
CREATE TABLE `MemberWorkoutPlanWorkout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_complete` BOOLEAN NOT NULL,
    `memberId` INTEGER NULL,
    `workoutPlanWorkoutId` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MemberWorkoutPlanWorkout` ADD CONSTRAINT `MemberWorkoutPlanWorkout_workoutPlanWorkoutId_fkey` FOREIGN KEY (`workoutPlanWorkoutId`) REFERENCES `workouts_plans_workouts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemberWorkoutPlanWorkout` ADD CONSTRAINT `MemberWorkoutPlanWorkout_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `members`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
