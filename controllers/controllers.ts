import { Request, Response } from 'express';
import { WeekMenu } from "../model/schema";

export const getAllWeekMenuItems = async (_req: Request, res: Response) => {
    const allWeekMenus = await WeekMenu.find();
    res.json(allWeekMenus);
};

export const getPaginatedWeekMenuItems = async (req: Request, res: Response) => {
    const page: number = parseInt(req.params.page);
    const limit: number = parseInt(req.params.limit);
    const allWeekMenus = await WeekMenu.find({})
        .skip(page * limit)
        .limit(limit)
        .exec();
    res.json(allWeekMenus);
};

export const getWeekMenuById = async (req: Request, res: Response) => {
    const weekMenuId:string  = req.params.id;
    const oneWeekMenu = await WeekMenu.findById(weekMenuId);
    res.json(oneWeekMenu);
};

module.exports = {
    getAllWeekMenuItems,
    getPaginatedWeekMenuItems,
    getWeekMenuById
};
