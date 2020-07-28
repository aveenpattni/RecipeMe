//Define your standard font sizes here
const font_sizes = {
  h4: "20px",
  h5: "16px",
  h6: "12px",
  button: "14px"
};
//Define your standard line height here
const line_heights = {};
//Define your standard base colours here
const base_colours = {
  primary: "#BFD7B5",
  secondary: "#D9D5DE",
  tertiary: "#A3C4BC",
  text: "#0F0F0F",
  textBackground: "#FAFAFA",
  white: "#FFF"
};

export const theme = {
  breakpoints: [640, 960],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  maxWidths: [480, 960, 1440],
  fontWeights: {
    normal: "400",
    bold: "500"
  },
  fontSizes: {
    ...font_sizes
  },
  lineHeights: { ...line_heights },
  colors: {
    ...base_colours
  },
}