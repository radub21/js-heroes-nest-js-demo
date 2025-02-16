-- CreateTable
CREATE TABLE "Comedian" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bio" TEXT,

    CONSTRAINT "Comedian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Joke" (
    "id" TEXT NOT NULL,
    "comedianId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Joke_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShowPerformance" (
    "id" TEXT NOT NULL,
    "jokeId" TEXT NOT NULL,
    "comedianId" TEXT NOT NULL,

    CONSTRAINT "ShowPerformance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Joke" ADD CONSTRAINT "Joke_comedianId_fkey" FOREIGN KEY ("comedianId") REFERENCES "Comedian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowPerformance" ADD CONSTRAINT "ShowPerformance_jokeId_fkey" FOREIGN KEY ("jokeId") REFERENCES "Joke"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowPerformance" ADD CONSTRAINT "ShowPerformance_comedianId_fkey" FOREIGN KEY ("comedianId") REFERENCES "Comedian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
