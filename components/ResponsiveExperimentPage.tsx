"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MobilePage = dynamic(() => import("@/components/MobilePage"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-[#f28a12]" />
});

const CapsuleExperimentPage = dynamic(() => import("@/components/CapsuleExperimentPage"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-[#111]" />
});

export default function ResponsiveExperimentPage() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setIsDesktop(mediaQuery.matches);
    };

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  if (isDesktop === null) {
    return <div className="min-h-screen bg-[#f28a12]" />;
  }

  return isDesktop ? <CapsuleExperimentPage /> : <MobilePage />;
}
