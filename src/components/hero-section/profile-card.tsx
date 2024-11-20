"use client";
import Image from "next/image";
export default function ProfileCard({}) {
    return(
        <div className={"relative flex justify-center items-center"}>
            <Image layout={"intrinsic"} src={"rupan.svg"} width={500} height={400}  alt={"profile picture"}/>
        </div>
    );
}