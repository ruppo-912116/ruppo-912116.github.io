import NavbarContainer from "@/components/navbar/container";
import HeroSectionContainer from "@/components/hero-section/container";
import ServicesContainer from "@/components/services/container";

export default function Home() {
    return (
        <main className={"bg-neutral-light dark:bg-neutral-dark min-h-screen"}>
            <NavbarContainer/>
            <div className={"px-4 pt-4 mt-16 md:px-40 md:pt-16"}>
                <HeroSectionContainer/>
                <ServicesContainer/>
            </div>
        </main>
    );
}
