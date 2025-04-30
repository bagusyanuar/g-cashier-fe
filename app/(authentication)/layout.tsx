import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G Cashier | Login",
  description: "G-Cashier application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
