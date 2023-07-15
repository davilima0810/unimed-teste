export default {
    font: {
        family: "'Open Sans', sans-serif",
        light: 300,
        normal: 400,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        sizes: {
            hxx: '5.2rem',
            hx: '3.6rem',
            h1: '2.4rem',
            h2: '2rem',
            h3: '1.6rem',
            body: '1.6rem',
            button: '1.4rem',
            caption: '1.2rem'
        },

        'line-height': {
            'lh-24': '1.5rem',
            'lh-32': '2rem'
        }
    },

    spacings: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        sp20: '2.0rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
    },
    colors: {
        primary: {
            500: '#2B45D4',

            default: '#0050E5'
        },

        secondary: {
            600: '#E59500',
            500: '#FFCC00',
            400: '#f7ebd1'
        },

        octopus: {
            primary: {
                light: '#00446B',

                default: '#002439',

                dark: '#00101A',

                opacity: 'rgba(45, 162, 170, 0.04)',

                '40': 'rgba(45, 162, 170, 0.4)'
            },

            secondary: {
                light: '#34BBC4',

                default: '#2DA2AA',

                dark: '#268B91'
            }
        },

        bodyColor: {
            white: '#FFFFFF',

            grey: '#F6F6F6'
        },

        pink: {
            primary: {
                default: '#FF0073',

                dark: '#FF0073'
            }
        },

        black: {
            '04': 'rgba(0, 0, 0, 0.04)',

            '08': 'rgba(0, 0, 0, 0.08)',

            '16': 'rgba(0,0,0,0.16)',

            '40': 'rgba(0, 0, 0, 0.4)',

            '56': 'rgba(0, 0, 0, 0.56)',

            '88': 'rgba(0, 0, 0, 0.88)'
        },

        white: {
            bg: '#FAFAFA',

            '100': '#FFFFFF'
        },

        info: {
            light: '#008AD229',
            medium: '#009AEB',
            dark: '#0099E9'
        },

        warning: {
            light: '#FFB00029',
            medium: '#E59500',
            dark: '#FFB000'
        },

        success: {
            light: '#38B44929',
            medium: '#38B449',
            dark: '#309C3F',
            '40': '#d8ebdd'
        },

        alert: {
            light: '#FFC61A',
            medium: '#ffc107',
            dark: '#E5A100'
        },

        danger: {
            light: '#F4433629',
            medium: '#DB3C31',
            dark: '#D93A30',
            '40': '#f6d9d4'
        },
        noColor: {
            transparent: 'transparent'
        }
    }
} as const
