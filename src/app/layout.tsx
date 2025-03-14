"use client";

import "../styles/homepage.css";
import "../styles/utilities.css";
import "../styles/detail.css";
import "../styles/checkout.css";
import "../styles/complete-checkout.css";
import "../styles/sign-in.css";
import "../styles/404-not-found.css";
import "../styles/sidebar.css";
import "../styles/sign-up.css";
import "../styles/sign-up-success.css";
import "../styles/sign-up-photo.css";
import "../styles/sign-up-photo-success.css";
import "../styles/transactions.css";
import "../styles/transactions-detail.css";
import "../styles/navbar-log-in.css";
import "../styles/overview.css";
import "../styles/edit-profile.css";



import Script from "next/script";
import { useEffect } from "react";
import AOS from "aos";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />

        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- AOS Animation --> */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>


        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        
        
        {children}
      </body>
    </html>
  );
}
