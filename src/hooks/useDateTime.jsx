import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Europe/Amsterdam'
})

// Named as a proper hook to match React conventions
export default function useDateTime() {
    const [date, setDate] = useState('');

    useEffect(() => {
        let animationFrame = 0;
        const updateDate = () => {
            const date = new Date()
            const amsTime = formatter.format(date);
            const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
            setDate(`${amsTime}.${milliseconds}`);
            animationFrame = requestAnimationFrame(updateDate);
        };
        updateDate();

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return date;
}