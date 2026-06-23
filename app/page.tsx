import DesktopPage from "@/components/DesktopPage";
import MobilePage from "@/components/MobilePage";

export default function Page() {
  return (
    <>
      <MobilePage />
      <div className="hidden md:block">
        <DesktopPage />
      </div>
    </>
  );
}
