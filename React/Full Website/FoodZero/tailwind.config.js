/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nightGreen': "#233000",
        'darkGreen': "#5E6600",
        'Green': "#9CAA00",
        'lightGreen': "#EBF0E4",
        'dark': "#000000",
        'Grey': "#4D4D4D",
        'lightGrey': "#B0B0B0",
      },
      fontFamily: {
        rufina: ['rufina', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },

      fontSize: {
        // Large Title
        'large-title-rufina': ['148px', { fontWeight: '700' }], // Rufina / Bold
        'large-title-lato': ['66px', { fontWeight: '700' }],   // Lato / Bold

        // Heading 1
        'heading1-rufina': ['108px', { fontWeight: '700' }], // Rufina / Bold
        'heading1-lato': ['24px', { fontWeight: '400' }],   // Lato / Regular

        // Heading 2
        'heading2-rufina': ['88px', { fontWeight: '700' }], // Rufina / Bold
        'heading2-lato': ['24px', { fontWeight: '400' }],  // Lato / Regular

        // Heading 3
        'heading3-rufina': ['68px', { fontWeight: '700' }], // Rufina / Bold
        'heading3-lato': ['24px', { fontWeight: '700' }],  // Lato / Bold

        // Heading 4
        'heading4-rufina': ['48px', { fontWeight: '700' }], // Rufina / Bold
        'heading4-lato': ['20px', { fontWeight: '400' }],  // Lato / Regular

        // Heading 5
        'heading5-rufina': ['32px', { fontWeight: '700' }], // Rufina / Bold
        'heading5-lato': ['22px', { fontWeight: '400' }],  // Lato / Regular

        // Heading 6
        'heading6-rufina': ['26px', { fontWeight: '700' }], // Rufina / Bold
        'heading6-lato': ['18px', { fontWeight: '400' }],  // Lato / Regular

        // Widgets
        'widgets-title': ['20px', { fontWeight: '400' }],  // Lato / Regular
        'widgets-comments': ['14px', { fontWeight: '400' }], // Lato / Regular
        'widgets-text': ['18px', { fontWeight: '400' }],   // Lato / Regular
      },
    },
  },
  plugins: [],
}