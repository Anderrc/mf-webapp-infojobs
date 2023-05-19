/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: {
        d1: '#121212',
        n: '#2D3133'
      },
      white: '#FFFFFF',
      gray: {
        d4: '#484B4D',
        d3: '#5E6061',
        d2: '#797A7A',
        d1: '#89898A',
        n: '#999999',
        l1: '#B8B8B8',
        l2: '#CCCCCC',
        l3: '#E6E6E6',
        l4: '#F5F5F5',
        l5: '#FAFAFA',
      },
      primary: {
        d5: "#0A3E60",
        d4: '#274454',
        d3: '#23536E',
        d2: '#1D668F',
        d1: '#1972A3',
        n: '#167DB7',
        l1: '#5CA4CD',
        l2: '#8BBEDB',
        l3: '#C5DFED',
        l4: '#E8F2F8',
        l5: '#F3F9FB',
      },
      accent: {
        d4: '#623E36',
        d3: '#8C4839',
        d2: '#C0543C',
        d1: '#E05C3E',
        n: '#FF6340',
        l1: '#FF9279',
        l2: '#FFB1A0',
        l3: '#FFD8CF',
        l4: '#FCEDEB',
        l5: '#FFF7F5',
      },
      success: {
        d4: '#224E3A',
        d3: '#196540',
        d2: '#0E8247',
        d1: '#07944C',
        n: '#00A550',
        l1: '#4DC085',
        l2: '#80D2A8',
        l3: '#BFE9D3',
        l4: '#E6F6EE',
        l5: '#F2FBF6',
      },
      alert: {
        d4: '#5E562A',
        d3: '#857323',
        d2: '#B6981A',
        d1: '#D4AE14',
        n: '#F1C40F',
        l1: '#F5D657',
        l2: '#F8E287',
        l3: '#FCF0C3',
        l4: '#FEF9E7',
        l5: '#FEFCF3',
      },
      error: {
        d4: '#3A1010',
        d3: '#691C1D',
        d2: '#A32B2D',
        d1: '#C63536',
        n: '#E93E40',
        l1: '#F07879',
        l2: '#F49FA0',
        l3: '#FACFCF',
        l4: '#FDECEC',
        l5: '#FFF6F6',
      },
      social: {
        facebook: '#3B5998',
        twitter: '#55ACEE',
        google: '#D34836',
        youtube: '#BB0000',
        whatsapp: '#00A544',
        instagram: '#8A3AB9',
      }
    },
    desktop: {
      large_title: {
        'font-family': 'SFProText-Semibold',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '34px',
        'line-height': '40px',
      },
      title_1: {
        'font-family': 'SFProText-Semibold',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '28px',
        'line-height': '34px',
      },
      title_2: {
        'font-family': 'SFProText-Semibold',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '22px',
        'line-height': '28px',
      },
      title_3: {
        'font-family': 'SFProText-Semibold',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '20px',
        'line-height': '24px',
      },
      headline_1: {
        'font-family': 'SFProText-Semibold',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '18px',
        'line-height': '22px',
      },
      headline_2: {
        'font-family': 'SFProText-Semibold',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '16px',
        'line-height': '20px',
      },
      body_1: {
        'font-family': 'SFProText-Regular',
        'font-style': 'normal',
        'font-weight': 400,
        'font-size': '16px',
        'line-height': '20px',
      },
      body_2: {
        'font-family': 'SFProText-Regular',
        'font-style': 'normal',
        'font-weight': 400,
        'font-size': '14px',
        'line-height': '16px',
      },
      callout: {
        'font-family': 'SFProText-Regular',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '14px',
        'line-height': '16px',
        'text-transform': 'uppercase'
      },
      caption: {
        'font-family': 'SFProText-Regular',
        'font-style': 'normal',
        'font-weight': 400,
        'font-size': '12px',
        'line-height': '16px',
      },
      overline: {
        'font-family': 'SFProText-Regular',
        'font-style': 'normal',
        'font-weight': 600,
        'font-size': '10px',
        'line-height': '16px',
        'text-transform': 'uppercase'
      },
    },
    extend: {
      fontFamily: {
        'SFProText-Semibold': ['SFProText-Semibold', 'sans-serif'],
        'SFProText-Regular': ['SFProText-Regular', 'sans-serif'],
        'info-jobs': ['info-jobs'],
      },
      boxShadow: {
        s: '0px 1px 1px rgba(0, 0, 0, 0.24)',
        m: '0px 1px 4px rgba(0, 0, 0, 0.24)',
        l: ' 0px 3px 8px rgba(0, 0, 0, 0.16)',
        base: ' 6px 0px 6px rgba(0, 0, 0, 0.4)',
        mult: '0px 2px 4px rgba(0, 0, 0, 0.08), 0px 1px 16px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.04)',
        focus: ' 0px 0px 3px rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
