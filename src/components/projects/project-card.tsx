"use client";
import LinkIcon from "@/icons/link-icon";
import {useRouter} from "next/navigation";

export default function ProjectCard({projectImage, title, description, link}: {
    projectImage: any;
    title: string;
    description: string;
    link: string;
}) {
    //TODO: add logo, add the capsules to show which development stack was used
    const router = useRouter();
    return (
        <div
            className={"bg-white dark:bg-neutral-dark dark:border-solid dark:border-white dark:border-[1px] border-[#eaeaea] rounded-md flex flex-col border-[1px] p-2 h-[100%]"}>
            <div className={"px-4"}>
                <div className={"flex gap-2 mb-2 text-neutral-dark dark:text-neutral-light items-center"}>
                    <LinkIcon className={"!w-5 !h-5 cursor-pointer"} onClick={() => router.push(link)}/>
                    <h1 className={"font-bold text-lg"}>{title} </h1>
                </div>
                <p className={"text-gray-600 dark:text-neutral-light"}>{description}</p>
            </div>
        </div>
    )
}