import SectionHeader from "@/components/common/section-header";
import ServiceItem from "@/components/services/service-item";

export default function ServicesContainer() {

    const services = [
        {
            "title": "Full Stack Development",
            "description": "Develop robust web applications using modern frameworks like React, Next.js, and Spring Boot. Expertise in both front-end and back-end development."
        },
        {
            "title": "Front-End Development",
            "description": "Create responsive, user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like React and Next.js. Ensure cross-browser compatibility and performance optimization."
        },
        {
            "title": "Back-End Development",
            "description": "Design and implement scalable server-side logic using technologies like Node.js, Express, and Spring Boot. Develop RESTful APIs and integrate third-party services."
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
            "title": "Technical Support",
            "description": "Offer technical support for troubleshooting and resolving issues. Provide training and documentation for end-users and development teams."
        },
        {
            "title": "Code Review and Optimization",
            "description": "Conduct thorough code reviews to ensure code quality and adherence to best practices. Optimize existing codebases for better performance and maintainability."
        },
        {
            "title": "PDF Document Handling",
            "description": "Expertise in handling PDF documents, including generation, editing, and extraction using libraries like Apache PDFBox. Implement custom PDF solutions for various business needs."
        },
        {
            "title": "Mentorship and Training",
            "description": "Offer mentorship for junior developers and interns. Provide training sessions on various technologies and development practices."
        },
        {
            "title": "Programming Languages",
            "description": "JavaScript, TypeScript, Java, Python, Swift, Kotlin"
        },
        {
            "title": "Database Technologies",
            "description": "MySQL, PostgreSQL"
        }
    ]


    return (
        <>
            <SectionHeader title={"Services"}/>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
            {services.map(service => <ServiceItem key={service.title} title={service.title}
                                                  description={service.description}/>)}
            </div>
        </>
    )
}