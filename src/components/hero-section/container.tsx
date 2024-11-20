import DescriptionCard from "@/components/hero-section/description-card";
import Image from "next/image";

export default function HeroSectionContainer() {

    return (
        <div className={"flex space-between items-center min-h-screen max-h-screen"}>
            <Image layout={"intrinsic"} src={"rupan.svg"} className={"!w-[40%] !h-[35%]"} width={0} height={0} alt={"profile picture"}/>
            <DescriptionCard/>
        </div>
    )
}