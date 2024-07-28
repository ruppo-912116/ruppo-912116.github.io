"use client";
import {useRouter} from "next/navigation";
import ThemeSwitcher from "@/components/theme-switcher";
import HomeIcon from "@/icons/home-icon";
import ProjectsIcon from "@/icons/projects-icon";
import WorkIcon from "@/icons/work-icon";
import ContactIcon from "@/icons/contact-icon";

export default function NavbarContainer() {

    const items = [
        {
            "title": "Home",
            "icon": <HomeIcon/>,
            "handleClick": () => router.push("#home")
        },
        {
            "title": "Projects",
            "icon": <ProjectsIcon/>,
            "handleClick": () => router.push("#projects")
        },
        {
            "title": "Works",
            "icon": <WorkIcon/>,
            "handleClick": () => router.push("#works")
        },
        {
            "title": "Contact Me",
            "icon": <ContactIcon/>,
            "handleClick": () => router.push("#contacts")
        }
    ]

    const router = useRouter();

    const handleRouteNavigation = (e: any) => {
        console.log(e);
    }

    function NavbarItem({children, title, handleOnClick}: any) {
        return (
            <div className={"flex gap-1 items-center cursor-pointer hover:text-gray-500"} onClick={handleOnClick}>
                {children}
                <p className={"hidden sm:block"}>{title}</p>
            </div>
        )
    }

    return (
        <div className={"sticky px-0 sm:px-16 bg-transparent"}>
            <div className={"flex justify-around sm:justify-between items-center"}>
                <h1 className={"text-primary-light dark:text-neutral-light font-bold"}>RUPAN</h1>
                <div className={"flex gap-2 p-2 text-neutral-dark dark:text-neutral-light"}>
                    {items.map(i => <NavbarItem
                        key={"title"}
                        title={i.title}
                        handleOnClick={i.handleClick}>
                        {i.icon}
                    </NavbarItem>)}
                    {/*<h2 onClick={handleRouteNavigation}>Home</h2>*/}
                    {/*<h2 onClick={handleRouteNavigation}>Projects</h2>*/}
                    {/*<h2 onClick={handleRouteNavigation}>Work</h2>*/}
                    {/*<h2 onClick={handleRouteNavigation}>Skills</h2>*/}
                    {/*<h2 onClick={handleRouteNavigation}>Contact me</h2>*/}
                    <ThemeSwitcher/>
                </div>
            </div>
        </div>
    )
}