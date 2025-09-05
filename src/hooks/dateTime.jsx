import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Europe/Amsterdam'
})

export default function dateTime() {
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