import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'
import { Loader } from 'shared/ui/Loader/Loader'

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
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
}
