"use client";

import NavHeader from "@/components/Heade";
import NavFooter from "@/components/footer/Footer";
import FooterSection from "./footer/FooterSection";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavHeader />
      {children}
      {/* <div className="w-full bg-gradient-to-r from-[#fdfdfdf2] to-[#fdfdfdf2] border-t border-gray-100">
        <div className="container max-w-6xl mx-auto px-0 py-12">
          <FooterSection />
        </div>
      </div> */}

      <NavFooter />
    </>
  );
}
