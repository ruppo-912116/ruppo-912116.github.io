import NavbarContainer from "@/components/navbar/container";
import HeroSectionContainer from "@/components/hero-section/container";
import ServicesContainer from "@/components/services/container";
import ProjectsContainer from "@/components/projects/container";
import Banner from "@/components/banner";

export default function Home() {
    return (
        <main className={"bg-neutral-light dark:bg-neutral-dark min-h-screen"}>
            <Banner/>
            <div className={"px-4 md:px-40 lg:w-[1278px] mx-auto lg:max-w-[1278px]"}>
                <NavbarContainer/>
                <div className={"pb-20 pt-4 mt-16  md:pt-16"}>
                    <HeroSectionContainer/>
                    <ServicesContainer/>
                    <ProjectsContainer/>
                </div>
            </div>
        </main>
    );
}
