import React from 'react';
import styles from './modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return (
        <div className = {styles.backdrop} />
    )
}

const ModalOverlay = (props) => {
    return(
        <div className = {styles.modal} >
            <div className = {styles.content} >
                {props.children}
            </div>
        </div>
    )
}

const portalDestination = document.getElementById('overlay')

const Modal = props => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalDestination )}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalDestination )}
        </React.Fragment>
    )
}

export default Modal;