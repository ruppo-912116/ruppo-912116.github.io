"use client";
import {useRouter} from "next/navigation";
import ThemeSwitcher from "@/components/theme-switcher";

export default function NavbarContainer() {
    const router = useRouter();

    const handleRouteNavigation = (e: any) => {
        console.log(e);
    }

    return (
        <div className={"sticky px-2"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-primary-light dark:text-neutral-light font-bold"}>RUPAN</h1>
                <div className={"flex gap-2 p-2 text-neutral-dark dark:text-neutral-light"}>
                    <h2 className={""} onClick={handleRouteNavigation}>Home</h2>
                    <h2 onClick={handleRouteNavigation}>Projects</h2>
                    <h2 onClick={handleRouteNavigation}>Work</h2>
                    <h2 onClick={handleRouteNavigation}>Skills</h2>
                    <h2 onClick={handleRouteNavigation}>Contact me</h2>
                    <ThemeSwitcher/>
                </div>
            </div>
        </div>
    )
}