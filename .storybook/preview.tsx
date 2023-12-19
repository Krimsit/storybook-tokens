import { Preview } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import theme from "../theme/theme"

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
