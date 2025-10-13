import LsdJam, { Data as LsdJamData } from './LsdJam/LsdJam';
import DayDrinkingDay, { Data as DayDrinkingDayData } from './DayDrinkingDay/DayDrinkingDay';

export const pages = {
    'lsd-jam': { Component: LsdJam, data: LsdJamData },
    'day-drinking-day': { Component: DayDrinkingDay, data: DayDrinkingDayData },
}