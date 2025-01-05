import { FormatTime } from './FormatTime';

type TotalTimeProps = {
    time: number;
};

export const TotalTime = ({ time }: TotalTimeProps) => {
    return (
        <div>
            <span>Total time:</span>
            <FormatTime time={time} />
        </div>
    );
};
