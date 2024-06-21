import daisyui from "daisyui"

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [daisyui],
  daisyui:{
    themes: ["light", "dark", "cupcake"],
  }
}

