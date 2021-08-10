import {
  PrismaClient,
} from '@prisma/client'


export async function _existsAccount(args) {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.account.findFirst({
      select: {
        id: true
      },
      where: args
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

export async function _createAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.create(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.findFirst(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getManyAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.findMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _upsertAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.upsert(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.update(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateManyAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.updateMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.delete(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteManyAccount(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.account.deleteMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}
