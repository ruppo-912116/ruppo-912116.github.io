export default function SectionHeader({title, secHeader}: { title: string, secHeader?: string }) {
    return (
        <div className={"mb-8"}>
            <h4 className={"flex mb-1 font-semibold text-sm justify-center text-primary-light dark:text-primary-light"}>{title.toUpperCase()}</h4>
            <h1 className={"flex justify-center text-2xl font-bold dark:text-primary-light"}>{secHeader}</h1>
        </div>
    );
}