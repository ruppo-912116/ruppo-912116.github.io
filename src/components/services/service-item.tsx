export default function ServiceItem({title, description}: { title: string, description: string }) {
    return (
        <div className={"bg-white dark:bg-neutral-dark dark:border-solid dark:border-white dark:border-[1px] rounded-md p-2"}>
            <h1 className={"text-neutral-dark font-bold text-lg dark:text-neutral-light"}>{title}</h1>
            <h2 className={"text-neutral-dark dark:text-neutral-light"}>{description}</h2>
        </div>
    )
}