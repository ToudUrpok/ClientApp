import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpened: boolean
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpened,
        onClose
    } = props

    return (
        <Modal
            className={className}
            isOpened={isOpened}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    )
}
