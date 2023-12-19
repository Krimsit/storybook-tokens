const theme = {
  "palette": {
    "blue": {
      "20": "#F5FBFF",
      "50": "#E5F4FF",
      "100": "#CCE9FF",
      "200": "#99D2FF",
      "300": "#66BCFF",
      "400": "#33A5FF",
      "500": "#008FFF",
      "600": "#0072CC",
      "700": "#005699",
      "800": "#003966",
      "900": "#001D33"
    },
    "grey": {
      "20": "#F5F5F5",
      "50": "#EFF0F0",
      "100": "#E6E6E6",
      "200": "#CBCCCD",
      "300": "#B1B2B5",
      "400": "#97989B",
      "500": "#7D7F82",
      "600": "#646568",
      "700": "#4B4C4E",
      "800": "#323334",
      "900": "#19191A"
    },
    "common": { "white": "#FFFFFF", "black": "#000000", "red": "#FFFFFF", "orange": "#000000" }
  },
  "tokens": {
    "global": {
      "background": {
        "primary": {
          "default": "#008FFF",
          "hover": "#0072CC",
          "active": "#005699",
          "focus": "#008FFF",
          "disabled": "#E6E6E6"
        },
        "outlined": {
          "default": "#FFFFFF",
          "hover": "#E5F4FF",
          "active": "#CCE9FF",
          "focus": "#FFFFFF",
          "disabled": "#FFFFFF"
        }
      },
      "text": {
        "primary": "#323334",
        "secondary": "#7D7F82",
        "disabled": "#97989B",
        "contrast": "#FFFFFF",
        "action": "#008FFF",
        "darkAction": "#0072CC"
      }
    },
    "button": {
      "gap": "8px",
      "sizes": {
        "large": { "horizontal": "16px", "vertical": "8px" },
        "medium": { "horizontal": "12px", "vertical": "6px" },
        "small": { "horizontal": "8px", "vertical": "3px" },
        "micro": { "horizontal": "8px", "vertical": "0px" }
      }
    },
    "borderRadius": { "small": "4px", "medium": "8px", "large": "16px" },
    "border": { "primary": "1px solid #008FFF", "disabled": "1px solid #97989B" }
  }
}

export type Theme = typeof theme

export default theme
    