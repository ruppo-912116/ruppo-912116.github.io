import NavbarContainer from "@/components/navbar/container";
import HeroSectionContainer from "@/components/hero-section/container";

export default function Home() {
    return (
        <main className={"bg-neutral-light dark:bg-neutral-dark"}>
            <NavbarContainer/>
            <HeroSectionContainer/>
        </main>
    );
}
