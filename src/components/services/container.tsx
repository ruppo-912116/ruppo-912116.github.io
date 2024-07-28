import SectionHeader from "@/components/common/section-header";
import ServiceItem from "@/components/services/service-item";

export default function ServicesContainer() {

    const services = [
        {
            "title": "Full Stack Development",
            "description": "Develop robust web applications using modern frameworks like React, Next.js, and Spring Boot. Expertise in both front-end and back-end development."
        },
        {
            "title": "API Development and Integration",
            "description": "Develop robust APIs for seamless integration with third-party services and applications. Expertise in RESTful and GraphQL APIs."
        },
        {
            "title": "CI/CD Pipeline Setup",
            "description": "Automate build, test, and deployment processes using tools like GitHub Actions, GitLab CI. Ensure fast and reliable delivery of software updates."
        },
        {
            "title": "Application Maintenance",
            "description": "Provide ongoing support and maintenance for web applications. Ensure software is up-to-date, secure, and performing optimally."
        },
        {
            "title": "Code Review and Optimization",
            "description": "Conduct thorough code reviews to ensure code quality and adherence to best practices. Optimize existing codebases for better performance and maintainability."
        },
        {
            "title": "Mentorship and Training",
            "description": "Offer mentorship for junior developers and interns. Provide training sessions on various technologies and development practices."
        },
        {
            "title": "Programming Languages",
            "description": "JavaScript, TypeScript, Java, Python"
        }
    ]


    return (
        <>
            <SectionHeader title={"Services"}/>
            <div className={"grid grid-cols-1 gap-4"}>
            {services.map(service => <ServiceItem key={service.title} title={service.title}
                                                  description={service.description}/>)}
            </div>
        </>
    )
}