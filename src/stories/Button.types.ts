export type ButtonVariant = "primary" | "outlined"

export type ButtonSize = "large" | "medium" | "small" | "micro"

export type ButtonProps = {
  variant?: ButtonVariant
  disabled?: boolean
  size?: ButtonSize
}

export type StyledButtonBaseProps = {
  $variant: ButtonVariant
  $size: ButtonSize
  $disabled: boolean
}