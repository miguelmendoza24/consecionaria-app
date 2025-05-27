-- CreateTable
CREATE TABLE "Auto" (
    "id" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "disponible" BOOLEAN NOT NULL,
    "fechaVenta" TIMESTAMP(3),

    CONSTRAINT "Auto_pkey" PRIMARY KEY ("id")
);
