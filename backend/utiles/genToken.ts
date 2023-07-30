import { Types } from 'mongoose';
import jwt from 'jsonwebtoken';

export const genToken = (id: Types.ObjectId) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '30d' });
};
