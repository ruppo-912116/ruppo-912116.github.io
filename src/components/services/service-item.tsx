export default function ServiceItem({title, description, idx}: { title: string, description: string, idx:number }) {
    return (
        <div className={`rounded-md w-1/4 bg-[#F3F3F3]  h-[300px] shadow-sm p-8 ${idx === 2? "!bg-[#5D5DDC] shadow-md !h-[315px]":"" }`}>
            <h1 className={` font-bold text-lg mb-2 dark:text-neutral-light ${idx===2? "text-white":"!text-neutral-dark"}`}>{title}</h1>
            <h2 className={`dark:text-neutral-light font-light ${idx===2? "text-white":"!text-neutral-dark "}`}>{description}</h2>
        </div>
    )
}