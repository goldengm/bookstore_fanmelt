import App from "next/app";
import Head from "next/head";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "services/shared/MaterialUI";
import "services/browser/Tailwind.css";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
	body {
		font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
	}
`;

class CustomApp extends App {
    
	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>Fanmelt</title>
					<GlobalStyles />
				</Head>
				<ThemeProvider theme={theme}>
					<StylesProvider injectFirst>
						<CssBaseline />
						<Component {...pageProps} />
					</StylesProvider>
				</ThemeProvider>
			</>
		);
	}
}

export default CustomApp;
