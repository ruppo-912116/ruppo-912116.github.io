"use client";
import {useRouter} from "next/navigation";
import ThemeSwitcher from "@/components/theme-switcher";
import HomeIcon from "@/icons/home-icon";
import ProjectsIcon from "@/icons/projects-icon";
import WorkIcon from "@/icons/work-icon";
import ContactIcon from "@/icons/contact-icon";

export default function NavbarContainer() {

    const router = useRouter();

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

    function NavbarItem({children, title, handleOnClick}: any) {
        return (
            <div className={"flex gap-1 items-center cursor-pointer hover:text-gray-500"} onClick={handleOnClick}>
                {children}
                <p className={"hidden sm:block"}>{title}</p>
            </div>
        )
    }

    return (
            <div className={"fixed top-0 right-0 left-0 px-0 sm:px-4 bg-white dark:bg-neutral-dark h-16 md:mt-4 md:mx-40 flex justify-around sm:justify-between items-center"}>
                <h1 className={"text-primary-light dark:text-neutral-light font-bold"}>RUPAN</h1>
                <div className={"flex gap-2 p-2 text-neutral-dark dark:text-neutral-light"}>
                    {items.map(i => <NavbarItem
                        key={"title"}
                        title={i.title}
                        handleOnClick={i.handleClick}>
                        {i.icon}
                    </NavbarItem>)}
                    <ThemeSwitcher/>
                </div>
            </div>
    )
}