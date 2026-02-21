import "./globals.css";
import Navbar from "../components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">

        <Navbar />

        {children}

      </body>
    </html>
  );
}