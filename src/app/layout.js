import "./globals.css";
import PageTransition from "./components/PageTransition";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
