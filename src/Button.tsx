import { MouseEventHandler } from 'react';

type ButtonProps = {
    name: string;
    method: MouseEventHandler<HTMLButtonElement>;
    nameClass: string;
};

export const Button = ({ name, method, nameClass }: ButtonProps) => {
    return (
        <button className={nameClass} onClick={method}>
            {name}
        </button>
    );
};
