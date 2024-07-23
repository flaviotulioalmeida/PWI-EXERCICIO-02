import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';
import {
  addTechnology,
  findTechnologyById,
  updateTechnology,
  markTechnologyAsStudied,
  deleteTechnology,
} from '../models/technologyModel';

export const listTechnologies = async (req: Request, res: Response) => {
  const user = req.user!;
  const technologies = await prisma.technology.findMany({ where: { userId: user.id } });
  return res.json(technologies);
};

export const createTechnology = async (req: Request, res: Response) => {
  const user = req.user!;
  const { title, deadline } = req.body;

  if (!title || !deadline) {
    return res.status(400).json({ error: 'Title and deadline are required' });
  }

  const newTechnology = await addTechnology(user.id, title, new Date(deadline));
  return res.status(201).json(newTechnology);
};

export const updateTechnologyDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, deadline } = req.body;

  const technology = await findTechnologyById(id);

  if (!technology) {
    return res.status(404).json({ error: 'Technology not found' });
  }

  const updatedTechnology = await updateTechnology(id, title, new Date(deadline));
  return res.json(updatedTechnology);
};

export const markTechnologyStudied = async (req: Request, res: Response) => {
  const { id } = req.params;

  const technology = await findTechnologyById(id);

  if (!technology) {
    return res.status(404).json({ error: 'Technology not found' });
  }

  const updatedTechnology = await markTechnologyAsStudied(id);
  return res.json(updatedTechnology);
};

export const removeTechnology = async (req: Request, res: Response) => {
  const { id } = req.params;

  const technology = await findTechnologyById(id);

  if (!technology) {
    return res.status(404).json({ error: 'Technology not found' });
  }

  await deleteTechnology(id);
  return res.status(200).json({ message: 'Technology removed successfully' });
};
