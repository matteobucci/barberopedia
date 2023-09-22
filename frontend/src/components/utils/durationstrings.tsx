import { useState, useEffect } from 'react';

interface DurationProps {
    duration: string;
}

const Duration: React.FC<DurationProps> = ({ duration }) => {
    const [durationString, setDurationString] = useState('');

    // duration is a string like PT59M43S

    useEffect(() => {
        let durationString = '';

        const hours = duration.match(/(\d+)H/);
        const minutes = duration.match(/(\d+)M/);
        const seconds = duration.match(/(\d+)S/);

        if (hours) {
            durationString += `${hours[1]}h:`;
        }

        if (minutes) {
            durationString += `${minutes[1]}m:`;
        }else{
            durationString += `00:`;
        }

        if (seconds) {
            durationString += `${seconds[1]}s`;
        }

        setDurationString(durationString.trim());
    }, [duration]);

    return <span>{durationString}</span>;
};

export default Duration;
