-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "circlelyId" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "name" TEXT,
    "isVerified" BOOLEAN DEFAULT false,
    "password" TEXT,
    "firstLogin" TIMESTAMP(3),
    "lastLogin" TIMESTAMP(3),
    "timezone" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account.phone_unique" ON "Account"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Account.email_unique" ON "Account"("email");
