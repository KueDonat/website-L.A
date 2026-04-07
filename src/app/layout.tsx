import Navbar from "@/components/Navbar"; // Import Navbar
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import ClickEffect from "@/components/ClickEffect";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          <ClickEffect /> {/* Panggil di sini */}
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
