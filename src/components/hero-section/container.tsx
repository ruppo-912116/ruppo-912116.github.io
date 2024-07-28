export default function HeroSectionContainer(){
    return (
        <div className={"flex justify-between items-end p-16 text-neutral-dark dark:text-neutral-light"}>
            <div>
                <h1 className={"font-bold  text-4xl "}>Rupan Chaulagain.</h1>
                <h3 className={"dark:text-neutral-300 text-2xl"}>Full stack Developer</h3>
            </div>
            <div>
                <h3 className={"text-xl dark:text-neutral-300"}>I create</h3>
                <h3 className={"text-4xl dark:text-neutral-light "}> Full stack web applications</h3>
                <div className={"flex gap-2 mt-2"}>
                    <button className={"bg-primary-light text-neutral-light px-2 rounded-md"}>Talk to me</button>
                    <button className={"bg-primary-light text-neutral-light px-2 rounded-md"}>See my works</button>
                </div>
            </div>
        </div>
    )
}