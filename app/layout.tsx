import "../styles/global.scss";
import { Barlow, Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600"],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${barlow.variable} ${fraunces.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
