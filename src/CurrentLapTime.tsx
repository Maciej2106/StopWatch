import { FormatTime } from './FormatTime';

type CurrentLapTime = {
    time: number;
};

export const CurrentLapTime = ({ time }: CurrentLapTime) => {
    return (
        <div>
            <span>Lap time: </span>
            <FormatTime time={time} />
        </div>
    );
};
