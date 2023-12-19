import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import { ButtonProps } from "./Button.types"

export default {
  title: "Button",
  component: Button
} satisfies Meta<ButtonProps>

export const Playground: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    size: "large",
    disabled: false
  },
  render: (props) => <Button {...props}>
    Props
  </Button>
}
