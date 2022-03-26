module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      380: '380px',
      540: '540px',
      1124: '1124px'
    },
    colors: {
      gray: {
        500: "#404040",
        400: "#595959",
      },
      white: "#FFFFFF"
    },
    spacing: {
      0: '0px',
      4: '4px',
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px'
    },
    fontFamily: {
      base: ['Inter', 'sans-serif'],
    },
    fontSize: {
      13: ['13px', { lineHeight: '16px' }],
      16: ['16px', { lineHeight: '24px' }],
      24: ['24px', { lineHeight: '32px' }],
      40: ['40px', { lineHeight: '56px' }]
    },
    fontWeight: {
      med: '500',
      black: '900'
    },
    letterSpacing: {
      2: '0.02em',
      4: '0.04em',
    },
    borderRadius: {
      4: '4px',
      8: '8px'
    },
    extend: {},
  },
  plugins: [],
}