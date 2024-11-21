import "./globals.css";
import NavBar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-dust-100">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
