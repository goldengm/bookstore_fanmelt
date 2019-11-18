const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
    	spacing: {
    		'300': '3px',
    		'500': '5px',
    		'600': '6px',
    		'700': '7px',
    		'900': '9px',
    		'180': '18px',
    		'100': '10px',
    		'13': '13px',
    		'15': '15px',
    		'21': '21px',
    		'25': '25px',
    		'260': '26px',
    		'560': '56px',
    		'30': '30px',
    		'60': '60px',
    		'65': '65px',
    		'70': '70px',
    		'16-7': '16.66667%',
    	},

    	screens: {
	  		'lmd': '992px',
	  		'm-sm': {'max': '639px'},
	  		'm-md': {'max': '767px'},
	  		'm-lmd': {'max': '991px'},
	  		'm-lg': {'max': '1023px'},
	  		'm-xl': {'max': '1279px'},
	  	},

	  	lineHeight: {
	  		'48': '3rem',
	  		"1-1": '1.1',
	  	},

	  	letterSpacing: {
	  		"1": '.1px',
	  		"1-1": '1.1px',
	  		'10': '10px',
	  		'10-m': '-10px',
	  	},

	  	height: {
	  		'500': '500px'
	  	},

	  	fontSize: {
	  		'175': "175px",
	  		'26': '26px',
	  		'32': '32px',
	  		'25': '25px',
	  		'22': '22px'
	  	},

	  	borderRadius: {
	  		'large': '10px',
	  		'half': '50%'
	  	},

	  	minHeight: {
	  		
	  	},

	  	width: {
	  		'120': '120px',
	  		'750': '750px',
	  		'1170': '1170px',
	  		'970': '970px',
	  		'56': '56px',
	  		'78': '78px'
	  	},

	  	height: {
	  		'38': '38px',
	  		'120': '120px',
	  		'500': '500px',
	  		'56': '56px',
	  		'78': '78px'
	  	},

	  	minHeight: {
	  		'1200': '1200px',
	  	},


	  	inset: {
	  		'15': '15px',
	  		'25': '25px'
	  	},

	  	borderColor: {
	  		'eee': '#eee',
	  		'pink-c': '#d538ff',
	  		'fa': '#fa005c'
	  	},

	  	textColor: {
	  		"999": "#999",
	  		"4d": "#4d4d4d",
	  		'fa': '#fa005c'
	  	},

	  	margin: {
	  		'25-p': '25%'
	  	},

	  	backgroundColor: theme => ({
	  		...theme('colors'),
	  		'fa': '#fa005c',
	  		'ec': "#ececec",
	  		'f7': "#f7f7f7"
	  	})
    },
  },
  variants: {
  },
  plugins: [
  	 function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen xl': {
            maxWidth: '1170px',
          },
        }
      })
    }
  ]
}
