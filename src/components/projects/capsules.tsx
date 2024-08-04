interface CapsuleProps {
    content: string;
    className: string;
}

export default function Capsules({content, className}: CapsuleProps) {
    function getStyleBasedOnContent(content: string) {
        const resultantClassName = `inline-block px-2 m-1 rounded-md`;

        //TODO: not a good implementation rather add colors based on frontend or backend
        if (content === "nextjs" || content === "reactjs" || content === "react-native") {
            return `${resultantClassName} bg-green-50 text-green-500`;
        } else if (content === "postgres" || content === "mongodb") {
            return `${resultantClassName} bg-blue-50 text-blue-500`;
        } else if (content === "springboot" || content === "express") {
            return `${resultantClassName} bg-orange-50 text-orange-500`;
        } else {
            return `${resultantClassName} bg-red-50 text-red-500`;
        }
    }

    return (
        <h4 className={getStyleBasedOnContent(content.toLowerCase().trim())}>{content}</h4>
    );
}