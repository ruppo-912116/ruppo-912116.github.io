import SectionHeader from "@/components/common/section-header";
import Image from "next/image";
import PdfEditorLogo from "@/logos/pdf-editor-logo";
import ProjectCard from "@/components/projects/project-card";

export default function ProjectsContainer() {

    const projects = [
        {
            title: "Pdf Editor",
            image: <PdfEditorLogo/>,
            desc: "The PDF Editor project aims to develop a robust, feature-rich web\n" +
                "application that allows users to create, edit, annotate, anonymize and\n" +
                "manage PDF documents quickly and efficiently.",
            link: "https://portal.tm7.eu",
            stack: ["Nextjs", "Springboot", "keycloak", "openfga", "postgres"]
        },
        {
            title: "Better Collected",
            image: <Image
                width={0}
                height={0}
                style={{width: "100%", height: "100%"}}
                src="https://bettercollected.com/content/images/2024/05/Layer-2--1-.svg"
                alt="Privacy-Friendly Form Builder"/>,
            desc: "Privacy-Friendly Form Builder For Conscious Companies",
            link: "https://bettercollected.com",
            stack: ["Nextjs", "fastapi", "mongodb"]
        },
        {
            title: "Mempool Explorer",
            image: "",
            desc: "The Cardano Mempool Monitoring System is designed to monitor andanalyze the Cardano blockchain's mempool—the area where\n" +
                "unconfirmed transactions are held before they are included in a block.\n" +
                "This project aims to provide real-time insights into the status and\n" +
                "performance of the Cardano network by tracking transaction volumes,\n" +
                "fees, and other relevant metrics.",
            link: "",
            stack: ["Nextjs", "express", "postgres", "prisma"]
        },
        {
            title: "CNFT Registry",
            image: "",
            desc: "CNFT Registry",
            link: "",
            stack: ["express", "Nextjs", "postgres"]
        },
        {
            title: "Blockchain Wallet using SRAM PUF",
            image: "",
            desc: "Storing private data like private keys of a digital wallet in a device that is\n" +
                "resistant to physical attacks is difficult and expensive. Instead if the key\n" +
                "information could be derived from the complex physical properties of the\n" +
                "device which cannot be cloned or predicted we can have a good security.\n" +
                "In essence, we build a non-clonable cryptocurrency wallet to store private\n" +
                "keys and validate wallet functions like transaction signing and\n" +
                "verification",
            link: "https://github.com/ruppo-912116/Blockchain-wallet",
            stack: ["react-native", "web3js"]
        },
    ]


    return (
        <>
            <SectionHeader title={"Projects"}/>
            <div className={"grid grid-cols-1 md:grid-cols-5 gap-2"}>
                {projects.map(project => <ProjectCard key={project.title} projectImage={project.image}
                                                      title={project.title}
                                                      link={project.link}
                                                      stack={project.stack}
                                                      description={project.desc}/>)}
            </div>
        </>
    )
}