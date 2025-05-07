// app/layout.tsx
export const metadata = {
    title: "My Event App",
    description: "Event listing and booking platform",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
       <body className="p-4 font-sans">{children}</body>
      </html>
    );
  }
  