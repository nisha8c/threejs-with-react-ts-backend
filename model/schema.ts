import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['veg', 'nonveg', 'sweet', 'salad'], required: true },
});

const DayMenuSchema = new mongoose.Schema({
    day: { type: String, required: true },
    dishes: { type: [DishSchema], required: true },
});

const WeekMenuSchema = new mongoose.Schema({
    menus: { type: [DayMenuSchema], required: true },
});

export const WeekMenu = mongoose.model('WeekMenu', WeekMenuSchema);
