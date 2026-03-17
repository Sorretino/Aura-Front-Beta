"use client";

import NavHeader from "@/components/Heade";
import NavFooter from "@/components/footer/Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavHeader />
      {children}
    
      <NavFooter />
    </>
  );
}
