import { useEffect, useState } from "react";

export default function dateTime() {
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const amsTime = new Intl.DateTimeFormat('en-GB', {
                dateStyle: 'short',
                timeStyle: 'medium',
                timeZone: 'Europe/Amsterdam',
            }).format(now);
            const milliseconds = now.getMilliseconds().toString().padEnd(3, '0');
            setDate(`${amsTime}.${milliseconds}`);
        };
        updateDate();
        const interval = setInterval(updateDate, 96);

        return () => clearInterval(interval);
    }, []);

    return date;
}