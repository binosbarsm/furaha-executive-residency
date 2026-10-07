import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://furahaexecutiveresidency.com"),

  title: {
    default: "Furaha Executive Residency | Accommodation in Ihumwa, Dodoma",
    template: "%s | Furaha Executive Residency",
  },

  description:
    "Discover Furaha Executive Residency in Ihumwa, Dodoma — a comfortable and welcoming residence with private units, master bedrooms, kitchen facilities, Wi-Fi, secure parking and security.",

  keywords: [
    "Furaha Executive Residency",
    "Furaha Executive Residence",
    "Furaha Residence",
    "Furaha Ihumwa",
    "accommodation in Ihumwa",
    "accommodation in Dodoma",
    "residence in Dodoma",
    "apartments in Dodoma",
    "executive residence Dodoma",
  ],

  authors: [
    {
      name: "Furaha Executive Residency",
    },
  ],

  creator: "Furaha Executive Residency",

openGraph: {
  title: "Furaha Executive Residency | Ihumwa, Dodoma",
  description:
    "A comfortable and welcoming residence in Ihumwa, Dodoma, designed around privacy, comfort and beautiful living.",
  type: "website",
  locale: "en_TZ",
  siteName: "Furaha Executive Residency",

  images: [
    {
      url: "/images/furaha/exterior.jpg",
      width: 1200,
      height: 630,
      alt: "Furaha Executive Residency in Ihumwa, Dodoma",
    },
  ],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
