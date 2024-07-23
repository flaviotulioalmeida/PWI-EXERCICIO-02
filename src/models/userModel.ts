import prisma from '../utils/prismaClient';
import { User } from '@prisma/client';

export const createUser = async (name: string, username: string): Promise<User> => {
  return await prisma.user.create({
    data: {
      name,
      username,
    },
  });
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { username },
  });
};
