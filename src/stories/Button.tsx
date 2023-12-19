import {FC, PropsWithChildren} from 'react'
import {ButtonProps} from './Button.types'
import {ButtonBase} from './Button.styles'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
   variant = 'primary',
   disabled = false,
   size = 'large',
   children
}) => <ButtonBase $size={size} $variant={variant} $disabled={disabled}>
    {children}
</ButtonBase>