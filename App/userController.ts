import { Request, Response } from 'express';
import { pool } from '../config/config';
import logger from '../config/log';
import { User } from './Model/user';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

// Controller to get all users
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        logger.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Controller to get a user by ID
const getUserById = async(req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id, 10);
        if (isNaN(userId)) {
            res.status(400).send('User ID must be a number');
            return;
        } else {
            const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM users WHERE id = ?', [userId]);
            if (rows.length > 0) {
                console.log(rows);
                res.json(rows);
            } else {
                res.status(404).send('User not found');
            }
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Controller to create a new user
const createUser = async(req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        if (name && email) {
            await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
            res.status(201).send('User created');
        } else {
            res.status(400).send('Name and email are required');
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send('Internal Server Error'); 
    }
};

// Controller to update a user
const updateUser = async(req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const { name, email } = req.body;
        if (isNaN(userId)) {
            res.status(400).send('User ID must be a number');
            return;
        } else if (!name || !email) {
            res.status(400).send('Name and email are required');
        } else {
            const [ rows ] = await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, userId]);
            const result = rows as ResultSetHeader;
            logger.info(result.info);
            res.status(200).send('User updated');
        }
    } catch (error) {
        logger.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// Export the controllers
export { getAllUsers, getUserById, createUser, updateUser };