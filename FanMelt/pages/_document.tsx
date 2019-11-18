import Document, { Html,Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import { ServerStyleSheet } from "styled-components";
import { theme } from "services/shared/MaterialUI";
import { TypographyStyle, GoogleFont } from "react-typography";
import { typography } from "services/browser/Typography";

interface Props {
  styles: any;
}

class CustomDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const materialUIStyleSheet = new ServerStyleSheets();
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => ({
            ...styledComponentsSheet.collectStyles(<App {...props} />),
            ...materialUIStyleSheet.collect(<App {...props} />)
          })
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {materialUIStyleSheet.getStyleElement()}
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </>
        )
      };
    } catch (error) {
      console.log(error);
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    const { styles } = this.props;
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {styles}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
