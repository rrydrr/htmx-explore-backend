import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser } from '../App/userController';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.post('/users/:id', updateUser)

export default router;