import React from 'react'
import { FaTimes } from 'react-icons/fa'

import './modal.css'

const Modal = ({ value, onClose }) => {

    return (
        <div className="modal">
            <div className="container">
                <div className="content">{value.code}</div>
                <div className="rodape">
                    <FaTimes onClick={onClose} />
                </div>
            </div>
        </div>
    )
}


export default Modal