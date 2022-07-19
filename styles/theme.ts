const theme = {
  color: {
    white: '#ffffff',
    inherit: 'inherit',
    gray_0: '#ffffff',
    gray_2: '#fbfaff',
    gray_5: '#f1f0f7',
    gray_10: '#e3e1eb',
    gray_20: '#cac9d1',
    gray_30: '#b2b1ba',
    gray_40: '#9a98a3',
    gray_50: '#817f8a',
    gray_60: '#676570',
    gray_70: '#4d4c54',
    gray_80: '#323138',
    gray_90: '#1b1a1f',
    brand_blue_tint_light: '#7e9afc',
    brand_blue_tint_dark: '#5061fa',
    brand_blue_full: '#3342c9',
    brand_blue_shade_light: '#1e266b',
    brand_blue_shade_dark: '#151d47',
    brand_yellow_tint_light: '#ffed8c',
    brand_yellow_tint_dark: '#ffcd4e',
    brand_yellow_full: '#ffa63d',
    brand_solar_red: '#F74857',
    green_tint_light: '#F6FFED',
    green_tint_dark: '#A6E47A',
    green_full: '#52C41A',
    green_shade_light: '#237804',
    green_shade_dark: '#092B00',
    red_tint_light: '#FFF1F0',
    red_tint_dark: '#FF8E8A',
    red_full: '#DD1D1D',
    red_shade_light: '#A8071A',
    red_shade_dark: '#5C0011',
    orange_tint_light: '#FFF7E6',
    orange_tint_dark: '#FFCB7D',
    orange_full: '#FA8C16',
    orange_shade_light: '#AD4E00',
    orange_shade_dark: '#612500',
    yellow_tint_light: '#FEFFE6',
    yellow_tint_dark: '#FFF87B',
    yellow_full: '#FADB14',
    yellow_shade_light: '#AD8B00',
    yellow_shade_dark: '#614700',
    teal_tint_light: '#E6FFFB',
    teal_tint_dark: '#72E2D9',
    teal_full: '#13C2C2',
    teal_shade_light: '#006D75',
    teal_shade_dark: '#002329',
    blue_tint_light: '#E6F7FF',
    blue_tint_dark: '#7DCBFF',
    blue_full: '#1890FF',
    blue_shade_light: '#0050B3',
    blue_shade_dark: '#002766',
  },
  shadow: {
    dp_2: '0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)',
    dp_4: '0px 2px 4px rgba(58, 58, 68, 0.2), 0px 4px 8px rgba(90, 91, 106, 0.2)',
    dp_8: '0px 4px 8px rgba(58, 58, 68, 0.16), 0px 8px 16px rgba(90, 91, 106, 0.16)',
    dp_16:
      '0px 8px 16px rgba(58, 58, 68, 0.12), 0px 16px 32px rgba(90, 91, 106, 0.12)',
    dp_24:
      '0px 12px 24px rgba(58, 58, 68, 0.08), 0px 24px 48px rgba(90, 91, 106, 0.08)',
  },
  fontSize: {
    pageHeading: '32px',
    subHeading: '20px',
    heading: '14px',
    caption: '12px',
    body: '14px',
  },
  lineHeight: {
    pageHeading: '38px',
    subHeading: '23px',
    heading: '16px',
    caption: '18px',
    body: '21px',
  },
} as const;

export default theme;
