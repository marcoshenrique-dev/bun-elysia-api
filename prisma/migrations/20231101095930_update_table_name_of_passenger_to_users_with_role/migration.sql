/*
  Warnings:

  - You are about to drop the `passengers` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('PASSENGER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "reservations" DROP CONSTRAINT "reservations_passengerId_fkey";

-- DropTable
DROP TABLE "passengers";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "user_role" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
