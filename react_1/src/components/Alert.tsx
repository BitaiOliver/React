import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: ()=>void;
}

function Alert({children, onClose}: Props) {
//const Alert = () => {

    return (
        /*<div
            className="alert alert-primary"
            > {children} 
        </div>*/
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!{children}</strong>
        <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
    
}

export default Alert;