module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        black: "#1d1d1d",
        red: {
          DEFAULT: "#FF385C",
          // DEFAULT: "#d63031",
          100: "#ff4757",
          900: "#d63031",
        },
        primary: {
          // DEFAULT: "#d63031",
          DEFAULT: "#FF385C",
          100: "#ff4757",
          900: "#d63031",
        },
        gray: {
          DEFAULT: "#2d3436",
          100: "#ffffff",
          200: "#f1f2f6",
          300: "#dfe4ea",
          400: "#ced6e0",
          500: "#a4b0be",
          600: "#747d8c",
          700: "#57606f",
          800: "#2f3542",
          900: "#2d3436",
        },
        secondary: {
          DEFAULT: "#2d3436",
          100: "#ffffff",
          200: "#f1f2f6",
          300: "#dfe4ea",
          400: "#ced6e0",
          500: "#a4b0be",
          600: "#747d8c",
          700: "#57606f",
          800: "#2f3542",
          900: "#2d3436",
        },
        on: {
          primary: {
            DEFAULT: "#fffff",
          },
          secondary: {
            DEFAULT: "#fffff",
          },
        },
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        "1v": "100vh",
        "1w": "100vw",
        "1/8v": "12.5vh",
        "1/8w": "12.5vw",
        "2/8v": "25vh",
        "2/8w": "25vw",
        "3/8v": "37.5vh",
        "3/8w": "37.5vw",
        "4/8v": "50vh",
        "4/8w": "50vw",
        "5/8v": "62.5vh",
        "5/8w": "62.5vw",
        "6/8v": "75vh",
        "6/8w": "75vw",
        "7/8v": "87.5vh",
        "7/8w": "87.5vw",
        "1/16v": "6.25vh",
        "1/16w": "6.25vw",
        "2/16v": "12.5vh",
        "2/16w": "12.5vw",
        "3/16v": "18.75vh",
        "3/16w": "18.75vw",
        "4/16v": "25vh",
        "4/16w": "25vw",
        "5/16v": "31.25vh",
        "5/16w": "31.25vw",
        "6/16v": "37.5vh",
        "6/16w": "37.5vw",
        "7/16v": "43.75vh",
        "7/16w": "43.75vw",
        "8/16v": "50vh",
        "8/16w": "50vw",
        "9/16v": "56.25vh",
        "9/16w": "56.25vw",
        "10/16v": "62.5vh",
        "10/16w": "62.5vw",
        "11/16v": "68.75vh",
        "11/16w": "68.75vw",
        "12/16v": "75vh",
        "12/16w": "75vw",
        "13/16v": "81.25vh",
        "13/16w": "81.25vw",
        "14/16v": "87.5vh",
        "14/16w": "87.5vw",
        "15/16v": "93.75vh",
        "15/16w": "93.75vw",
        "1/12v": "8.33vh",
        "1/12w": "8.33vw",
        "2/12v": "16.67vh",
        "2/12w": "16.67vw",
        "3/12v": "25vh",
        "3/12w": "25vw",
        "4/12v": "33.33vh",
        "4/12w": "33.33vw",
        "5/12v": "41.67vh",
        "5/12w": "41.67vw",
        "6/12v": "50vh",
        "6/12w": "50vw",
        "7/12v": "58.33vh",
        "7/12w": "58.33vw",
        "8/12v": "66.67vh",
        "8/12w": "66.67vw",
        "9/12v": "75vh",
        "9/12w": "75vw",
        "10/12v": "83.33vh",
        "10/12w": "83.33vw",
        "11/12v": "91.67vh",
        "11/12w": "91.67vw",
      },
      height: (theme, { breakpoints }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vh",
      }),
      maxHeight: (theme, { breakpoints }) => ({
        0: "0",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vh",
      }),
      minHeight: (theme, { breakpoints }) => ({
        0: "0",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vh",
      }),
      width: (theme, { breakpoints }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vw",
      }),
      minWidth: (theme, { breakpoints }) => ({
        0: "0",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vw",
      }),
      maxWidth: (theme, { breakpoints }) => ({
        0: "0",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vw",
      }),
      opacity: {
        0: "0",
        8: "0.08",
        10: "0.10",
        20: "0.20",
        40: "0.40",
        60: "0.60",
        80: "0.80",
        25: "0.25",
        50: "0.5",
        75: "0.75",
        100: "1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
}
