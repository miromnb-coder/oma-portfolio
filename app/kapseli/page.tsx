"use client";

import dynamic from "next/dynamic";

const CapsuleExperimentPage = dynamic(() => import("@/components/CapsuleExperimentPage"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-[#111]" />
});

export default function KapseliPage() {
  return <CapsuleExperimentPage />;
}
