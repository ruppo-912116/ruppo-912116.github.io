"use client";

import Capsules from "@/components/projects/capsules";
import {useRouter} from "next/navigation";


interface props {
    title: string;
    description: string;
    stack: Array<string>;
    image: string;
    link: string;
}

export default function ProjectCardNew(props: props) {
    const router = useRouter();

    return (
        <div className={"flex gap-3 items-stretch justify-between"}>
            <div
                className={"flex flex-col justify-between border-solid border-[1px] shadow-sm border-gray-200 rounded-lg p-5 w-[600px]"}>
                <div>
                    <h1 className={"font-bold text-2xl"}>{props.title}</h1>
                    <p className={"mt-4 mb-4"}>{props.description}</p>
                    {props.stack.map(s => <Capsules key={s} content={s} className={"bg-green-200 text-green-600"}/>)}
                </div>
                <div className={"border-solid rounded-2xl font-bold border-[1px] p-2 cursor-pointer"} onClick={() => router.push(props.link)}>
                    Go to link
                </div>
            </div>
            <div className={"bg-gray-200 shadow-lg p-4 rounded-lg"}>
                <img src={props.image}/>
            </div>
        </div>
    )
}