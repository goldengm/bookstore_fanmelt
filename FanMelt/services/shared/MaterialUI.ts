import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
export const theme = createMuiTheme({
    typography: {
        fontFamily: 'inherit',
    },
    palette: {
		primary: {
			main: "#7b6ef1"
		},
		secondary: {
			main: "#000"
		},
		error: {
			main: red.A400
		},
		background: {
			default: "#fff"
		}
	}
});
