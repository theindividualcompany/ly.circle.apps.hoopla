-- CreateTable
CREATE TABLE "Reminder" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "to" TEXT NOT NULL,
    "sendAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start" TIMESTAMP(3),
    "timezone" TEXT,
    "title" TEXT DEFAULT E'You\'re supposed to be doing something right now',
    "subtitle" TEXT,
    "description" TEXT,
    "type" TEXT DEFAULT E'event',
    "data" JSONB,
    "sent" BOOLEAN DEFAULT false,

    PRIMARY KEY ("id")
);
