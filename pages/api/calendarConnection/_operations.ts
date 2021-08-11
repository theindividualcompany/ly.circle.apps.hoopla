import { CalendarConnection, CalendarConnectionFindManyArgs, PrismaClient } from "@prisma/client"

export async function _existsCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.calendarConnection.findOne({
      select: {
        id: true,
      },
      where: args,
    })

    if (result) {
      return true
    }

    return false
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _createCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.create(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.findOne(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getManyCalendarConnection(
  args: CalendarConnectionFindManyArgs
): Promise<CalendarConnection[]> {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.findMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _upsertCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.upsert(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.update(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateManyCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.updateMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.delete(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteManyCalendarConnection(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.calendarConnection.deleteMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
