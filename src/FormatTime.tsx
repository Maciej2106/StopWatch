type FormatTimeProps = {
    time: number;
};

export const FormatTime = ({ time }: FormatTimeProps) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 100);

    return (
        <span>
            {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}:
            {milliseconds < 10 ? '0' + milliseconds : milliseconds}
        </span>
    );
};
