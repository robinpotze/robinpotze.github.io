import LsdJam, { Data as LsdJamData } from './LsdJam/LsdJam';
import DayDrinkingDay, { Data as DayDrinkingDayData } from './DayDrinkingDay/DayDrinkingDay';

export const pages = {
    'lsdjam': { Component: LsdJam, data: LsdJamData },
    'ld58': { Component: DayDrinkingDay, data: DayDrinkingDayData },
}