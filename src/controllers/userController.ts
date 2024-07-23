import { Request, Response } from 'express';
import { createUser, findUserByUsername } from '../models/userModel';

export const registerUser = async (req: Request, res: Response) => {
  const { name, username } = req.body;

  if (!name || !username) {
    return res.status(400).json({ error: 'Name and username are required' });
  }

  const existingUser = await findUserByUsername(username);

  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const newUser = await createUser(name, username);
  return res.status(201).json(newUser);
};
