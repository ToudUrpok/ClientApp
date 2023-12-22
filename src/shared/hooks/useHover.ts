import { useCallback, useMemo, useState } from 'react'

interface UseHoverBindings {
    onMouseEnter: () => void
    onMouseLeave: () => void
}

type UseHoverReturnType = [boolean, UseHoverBindings]

interface UseHoverProps {
    mouseEnterCallback?: () => void
    mouseLeaveCallback?: () => void
}

export const useHover = (props: UseHoverProps): UseHoverReturnType => {
    const {
        mouseEnterCallback,
        mouseLeaveCallback
    } = props

    const [isHover, setIsHover] = useState(false)

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
        mouseEnterCallback?.()
    }, [mouseEnterCallback])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
        mouseLeaveCallback?.()
    }, [mouseLeaveCallback])

    return useMemo(() => [
        isHover,
        { onMouseLeave, onMouseEnter }
    ],
    [isHover, onMouseLeave, onMouseEnter])
}
