/*
  Warnings:

  - You are about to drop the column `suggestions` on the `Administrator` table. All the data in the column will be lost.
  - You are about to drop the column `available` on the `Car` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Car` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to drop the column `createdAt` on the `Return` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `Return` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `amount` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - A unique constraint covering the columns `[email]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carId` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CarStatus" AS ENUM ('AVAILABLE', 'SOLD', 'MAINTENANCE');

-- AlterTable
ALTER TABLE "Administrator" DROP COLUMN "suggestions";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "available",
ADD COLUMN     "status" "CarStatus" NOT NULL DEFAULT 'AVAILABLE',
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Return" DROP COLUMN "createdAt",
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "carId" TEXT NOT NULL,
ADD COLUMN     "clientId" TEXT NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
