import "./globals.css";
import NavBar from "../components/navbar";

export default function RootLayout({ children }) {
  const colors = {
    primary: "#A67B5B",
    secondary: "#F0E6D9",
    background: "#FAF9F6",
    text: "#2C1810",
    green: "#2F4F4F",
  };
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
