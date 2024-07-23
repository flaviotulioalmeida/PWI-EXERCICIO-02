import prisma from '../utils/prismaClient';
import { Technology } from '@prisma/client';

export const addTechnology = async (userId: string, title: string, deadline: Date): Promise<Technology> => {
  return await prisma.technology.create({
    data: {
      title,
      deadline,
      userId,
    },
  });
};

export const findTechnologyById = async (id: string): Promise<Technology | null> => {
  return await prisma.technology.findUnique({
    where: { id },
  });
};

export const updateTechnology = async (id: string, title: string, deadline: Date): Promise<Technology> => {
  return await prisma.technology.update({
    where: { id },
    data: { title, deadline },
  });
};

export const markTechnologyAsStudied = async (id: string): Promise<Technology> => {
  return await prisma.technology.update({
    where: { id },
    data: { studied: true },
  });
};

export const deleteTechnology = async (id: string): Promise<void> => {
  await prisma.technology.delete({
    where: { id },
  });
};
