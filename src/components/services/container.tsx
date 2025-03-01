import SectionHeader from "@/components/common/section-header";
import ServiceItem from "@/components/services/service-item";

export default function ServicesContainer() {

    const services = [
        {
            "title": "API Development and Integration",
            "description": "Develop robust APIs for seamless integration with third-party services and applications. Expertise in RESTful and GraphQL APIs."
        },
        {
            "title": "Application Maintenance",
            "description": "Provide ongoing support and maintenance for web applications. Ensure software is up-to-date, secure, and performing optimally."
        },
        {
            "title": "Full Stack Development",
            "description": "Develop robust web applications using modern frameworks like React, Next.js, and Spring Boot. Expertise in both front-end and back-end development."
        },
        {
            "title": "Code Review and Optimization",
            "description": "Conduct thorough code reviews to ensure code quality and adherence to best practices. Optimize existing codebases for better performance and maintainability."
        },
        {
            "title": "Mentorship and Training",
            "description": "Offer mentorship for junior developers and interns. Provide training sessions on various technologies and development practices."
        }
    ]


    return (
        <div className={"mb-8"}>
            <SectionHeader
                title={"Services"}
                secHeader={"Expertise Service! Let's check it out"}/>
            <div className={"flex items-center gap-4 justify-between"}>
            {services.map((service, idx) => <ServiceItem idx={idx} key={service.title} title={service.title}
                                                  description={service.description}/>)}
            </div>
        </div>
    )
}