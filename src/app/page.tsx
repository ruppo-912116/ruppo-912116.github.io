import NavbarContainer from "@/components/navbar/container";
import HeroSectionContainer from "@/components/hero-section/container";
import ServicesContainer from "@/components/services/container";
import ProjectsContainer from "@/components/projects/container";
import Banner from "@/components/banner";

export default function Home() {
    return (
        <main className={"bg-white dark:bg-neutral-dark min-h-screen bg-gray-200"}>
            <Banner/>
            <div className={"px-4 md:px-40"}>
                <NavbarContainer/>
                <div className={"py-16 pt-4 px-16 rounded-2xl md:pt-16"}>
                    <HeroSectionContainer/>
                    <ServicesContainer/>
                    <ProjectsContainer/>
                </div>
            </div>
        </main>
    );
}
