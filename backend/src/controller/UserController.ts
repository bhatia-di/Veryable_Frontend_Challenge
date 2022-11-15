
import express, { Request, Response } from 'express';
import userJson from '../resources/users.json';

export const fetchUserInfo = async (req: Request, res: Response) => {

    try {

        res.status(200).send(userJson);

    }
    catch (err) {

        console.error(err.message);
        res.status(500).send({
            "message": " Something went wrong with your request. "
        });
    }

};
