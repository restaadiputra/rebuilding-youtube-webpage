module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      spacing: {
        '_5': '0.125rem',
        '7': '1.75rem',
        '14': '3.5rem',
        '60': '15rem',
      },
      colors: {
        'gray-100-youtube': '#F9F9F9',
        'gray-200-youtube': '#F0F0F0',
        'gray-300-youtube': '#E0E0E0',
        'gray-400-youtube': '#CCCCCC',
        'gray-600-youtube': '#606060',
        'gray-700-youtube': '#333333',
        'red-youtube': '#FF0000',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
