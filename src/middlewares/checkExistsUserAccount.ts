import { Request, Response, NextFunction } from 'express';
import { findUserByUsername } from '../models/userModel';

export const checkExistsUserAccount = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.headers;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username header is required' });
  }

  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(404).json({ error: 'User not exists' });
  }

  req.user = user;
  return next();
};
