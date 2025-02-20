import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width" />
//         <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
//         <meta
//           name="description"
//           content="Dark themed website template built on AstroJS, designed for technological startup business."
//         />
//         <title>Gp & Lp</title>
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//     // <html lang="en">
//     //   <body className={inter.className}>{children}</body>
//     // </html>
//   );
// }
