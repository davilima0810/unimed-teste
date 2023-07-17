import { ReactNode } from 'react'
import * as S from './styles'

type ModalProps = {
    children: ReactNode
    containerStyle?: React.CSSProperties
    /**Open the modal*/
    isOpen?: boolean
    /**Define the modal title */
    title?: string
    titleStyle?: React.CSSProperties
    /**Callback function when close modal*/
    onClose: () => void
    /**Show overlay (optional) */
    showOverlay?: boolean
    overZIndex?: number
    style?: any
}
const Modal = ({
    children,
    titleStyle,
    isOpen,
    title,
    onClose,
    showOverlay = true,
    style,
    overZIndex
}: ModalProps) => {
    return (
        <>
            <S.Content>
                <S.Wrapper
                    className={`modal ${isOpen ? 'active' : 'none'}`}
                    id="modal"
                    zIndex={overZIndex}
                    style={style}
                >
                    <S.Header>
                        <h2 style={titleStyle}>{title}</h2>
                    </S.Header>
                    <S.Body>{children}</S.Body>
                </S.Wrapper>
                {showOverlay && (
                    <div
                        id={isOpen ? 'overlay' : 'none'}
                        onClick={() => onClose()}
                        style={{ opacity: isOpen ? 1 : 0 }}
                    ></div>
                )}
            </S.Content>
        </>
    )
}

export default Modal
