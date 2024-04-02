import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Metadata } from "next";
import FooterComponent from "@/components/footer/FooterComponenet";

export const metadata: Metadata = {
  title: "Hello CSTAD ",
  description: "CSTAD  Web is a web application for selling products.",
  openGraph: {
    title: "Hello CSTAD ",
    description: "CSTAD  Web is a web application for selling products.",
    images:
      "https://store.istad.co/media/brand_images/photo_2024-01-17_09-54-54.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <header>
          <NavbarComponent />
        </header>
		<main>
			<ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
		</main>
        
		<footer>
        <FooterComponent />
      </footer>
      </body>
      
    </html>
  );
}
