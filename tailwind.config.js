module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  darkMode: false,
  theme: {
    colors: {
      firstbrand: '#1a253a',
      secondbrand: "#7cd3ff",
      thirdbrand: "#8e12e2",
      fourthbrand: "#020d24",
      white: "#fff",
    },
    extend: {
      backgroundImage: {
        'leadingBg': "-webkit-gradient(linear, left top, left bottom, from(rgba(2, 13, 36, 0.8)), color-stop(100%, #020d24), color-stop(102%, rgba(2, 13, 36, 0.8))), url('https://uploads-ssl.webflow.com/623634729c194d6497a55433/6237933d64caf2c25cf42b65_Image%3AHome-Bg.png')",
        'leadingCode': "url('https://uploads-ssl.webflow.com/623634729c194d6497a55433/623794a884beceee4b0c6746_Image%3ACode-Snippet.png')",
        'aboutUsBg': "url('https://uploads-ssl.webflow.com/623634729c194d6497a55433/62385e20954f4421c776bd7d_Image%3AAbout-Bg-T.png')",
        'aboutUsImg1': "url('https://uploads-ssl.webflow.com/623634729c194d6497a55433/623721bae0bb176347ecffd2_About-p-500.jpeg')",
        'aboutUsImg2': "url('https://uploads-ssl.webflow.com/623634729c194d6497a55433/623721b9ad218708ab048b6a_Team-p-500.jpeg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
