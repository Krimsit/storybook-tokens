import styled, { css, RuleSet } from "styled-components"
import { ButtonSize, ButtonVariant, StyledButtonBaseProps } from "./Button.types.ts"

export const buttonVariantStyle: Record<ButtonVariant, RuleSet<object>> = {
  primary: css`
      border: 0;
      background-color: ${({ theme }) => theme.tokens.global.background.primary.default};
      color: ${({ theme }) => theme.tokens.global.text.contrast};

      &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.tokens.global.background.primary.hover};
      }

      &:active {
          background-color: ${({ theme }) => theme.tokens.global.background.primary.active};
      }
  `,
  outlined: css`
      border: ${({ theme }) => theme.tokens.border.primary};
      background-color: ${({ theme }) => theme.tokens.global.background.outlined.default};
      color: ${({ theme }) => theme.tokens.global.text.action};

      &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.tokens.global.background.outlined.hover};
      }

      &:active {
          background-color: ${({ theme }) => theme.tokens.global.background.outlined.active};
      }
  `
}

export const buttonSizeStyles: Record<ButtonSize, RuleSet<object>> = {
  large: css`
      ${({ theme }) => {
          const { horizontal, vertical } = theme.tokens.button.sizes.large

          return css`
              padding: ${vertical} ${horizontal};
          `
      }}
  `,
  medium: css`
      ${({ theme }) => {
          const { horizontal, vertical } = theme.tokens.button.sizes.medium

          return css`
              padding: ${vertical} ${horizontal};
          `
      }}
  `,
  small: css`
      ${({ theme }) => {
          const { horizontal, vertical } = theme.tokens.button.sizes.small

          return css`
              padding: ${vertical} ${horizontal};
          `
      }}
  `,
  micro: css`
      ${({ theme }) => {
          const { horizontal, vertical } = theme.tokens.button.sizes.micro

          return css`
              padding: ${vertical} ${horizontal};
          `
      }}
  `
}

export const buttonDisabledStyle: Record<ButtonVariant, RuleSet> = {
  primary: css`
      border: 0;
      background-color: ${({ theme }) => theme.tokens.global.background.primary.disabled};
      color: ${({ theme }) => theme.tokens.global.text.disabled};
  `,
  outlined: css`
      border: ${({ theme }) => theme.tokens.border.disabled};
      background-color: ${({ theme }) => theme.tokens.global.background.outlined.disabled};
      color: ${({ theme }) => theme.tokens.global.text.disabled};
  `
}

export const ButtonBase = styled.button<StyledButtonBaseProps>`
    ${({ $variant, $size, $disabled, theme }) => {
        const currentVariant = buttonVariantStyle[$variant]
        const currentSize = buttonSizeStyles[$size]
        const currentDisabledVariant = buttonDisabledStyle[$variant]

        return css`
            display: flex;
            align-items: center;
            gap: ${theme.tokens.button.gap};
            border-radius: ${theme.tokens.borderRadius.small};
            outline: 0;
            transition: all .3s ease;
            
            ${!$disabled ? currentVariant : currentDisabledVariant};
            ${currentSize};
        `
    }}
`