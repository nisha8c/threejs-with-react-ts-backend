export type Dish = {
    name: string;
    type: 'veg' | 'nonveg' | 'sweet' | 'salad';
};

export type DayMenu = {
    day: string;
    dishes: Dish[];
};

export type WeekMenu = DayMenu[];
