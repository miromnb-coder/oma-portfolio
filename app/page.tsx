import CapsuleExperimentPage from "@/components/CapsuleExperimentPage";
import MobilePage from "@/components/MobilePage";

export default function Page() {
  return (
    <>
      <MobilePage />
      <div className="hidden md:block">
        <CapsuleExperimentPage />
      </div>
    </>
  );
}
