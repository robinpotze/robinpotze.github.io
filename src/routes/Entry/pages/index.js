import LsdJam, { Data as LsdJamData } from './LsdJam/LsdJam';
import DayDrinkingDay, { Data as DayDrinkingDayData } from './Ld58/Ld58';

export const pages = {
    'lsdjam': { Component: LsdJam, data: LsdJamData },
    'ld58': { Component: DayDrinkingDay, data: DayDrinkingDayData },
}