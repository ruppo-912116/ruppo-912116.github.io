import FrontArrowIcon from "@/icons/front-arrow-icon";

export default function SectionHeader({title}: { title: string }) {
    return (
        <div className={"flex gap-2 mt-16 text-lg dark:text-neutral-light"}>
            <FrontArrowIcon/>
            <h1 className={"text-neutral-dark dark:text-neutral-light"}>{title}</h1>
        </div>
    );
}