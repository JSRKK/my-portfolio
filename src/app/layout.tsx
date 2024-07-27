import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MR. Jay | Frontend Developer",
  description:
    "Portfolio of MR. Jay, a passionate Frontend Developer specializing in creating responsive and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
