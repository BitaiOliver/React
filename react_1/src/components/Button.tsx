import type { ReactNode } from "react";

interface Props {
    children:string
    color?: 'primary' | 'secondary' | 'danger'
    onClick: () => void;
}

const Button1 = ({children, color = 'secondary', onClick}: Props) => {

    return (
    <button 
        className = {"btn btn-" + color} 
        onClick = {onClick}
    >
        {children}
    </button>
    );
}

export default Button1;