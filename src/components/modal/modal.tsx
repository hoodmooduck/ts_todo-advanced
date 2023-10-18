
import {  ReactNode, useContext } from 'react'
import './modal.scss'
import Context from '../context';
import { ContextType } from '../types';

interface propsModal{
    closeModal?: () => void,
    children?: ReactNode,
}



const Modal: React.FC<propsModal> = ({children, closeModal}) => {

    const {activeModal} = useContext<ContextType>(Context);

    return (
        <div style={{ display : activeModal !== 'close' ? 'flex' : 'none'}} className='modal'>
            <div className="modalColumn">
                <div onClick={closeModal} className="modalClose">
                    <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39219/preview.png" alt="close" />
                </div>

                {children}
            </div>
        </div>
    )
}

export default Modal
