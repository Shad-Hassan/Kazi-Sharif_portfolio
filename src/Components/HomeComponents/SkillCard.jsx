import { useState } from "react";
import FrameCard from "./FrameCard";

const skillset = [
    {
        skill_id: 1,
        skill_header: "Front End Development",

        skills_items: [
            {
                framework_id: 1,
                framework: "Java"
            },
            {
                framework_id: 2,
                framework: "Python"
            },
            {
                framework_id: 3,
                framework: "C"
            },
            {
                framework_id: 4,
                framework: "Angular"
            },
            {
                framework_id: 5,
                framework: "React"
            },
            {
                framework_id: 6,
                framework: "Node.js"
            },
            {
                framework_id: 7,
                framework: "HTML5"
            },
            {
                framework_id: 8,
                framework: "CSS3"
            },
            {
                framework_id: 9,
                framework: "jQuery"
            },
            {
                framework_id: 10,
                framework: "JavaScript"
            },
            {
                framework_id: 11,
                framework: "Bootstrap"
            },
            {
                framework_id: 12,
                framework: "PHP"
            },
            {
                framework_id: 13,
                framework: "XML"
            },
            {
                framework_id: 14,
                framework: "JSON"
            },
        ]
    },
    {
        skill_id: 2,
        skill_header: "Back End Development",

        skills_items: [
            {
                framework_id: 15,
                framework: "Spring 5"
            },
            {
                framework_id: 16,
                framework: "Spring Boot"
            },
            {
                framework_id: 17,
                framework: "Struts"
            },
            {
                framework_id: 18,
                framework: "EJB"
            },
            {
                framework_id: 19,
                framework: "Microservices"
            },
            {
                framework_id: 20,
                framework: "Kafka"
            },
            {
                framework_id: 21,
                framework: "Kafka"
            },
            {
                framework_id: 22,
                framework: "Rabbit MQ"
            },
            {
                framework_id: 23,
                framework: "Hibernate"
            },
            {
                framework_id: 24,
                framework: "Servlets"
            },
            {
                framework_id: 23,
                framework: "Soap UI"
            },
            {
                framework_id: 23,
                framework: "Rest API"
            },
        ]
    },
    {
        skill_id: 3,
        skill_header: "Cloud Development",

        skills_items: [
            {
                framework_id: 24,
                framework: "AWS"
            },
            {
                framework_id: 25,
                framework: "GCP"
            },
            {
                framework_id: 26,
                framework: "Docker"
            },
            {
                framework_id: 27,
                framework: "Kubernetes"
            },
        ]
    },
    {
        skill_id: 4,
        skill_header: "Database / Big Data",

        skills_items: [
            {
                framework_id: 28,
                framework: "MongoDB"
            },
            {
                framework_id: 29,
                framework: "PostgreSQL"
            },
            {
                framework_id: 30,
                framework: "DB2"
            },
            {
                framework_id: 31,
                framework: "Oracle SQL"
            },
            {
                framework_id: 32,
                framework: "DBMS"
            },
            {
                framework_id: 33,
                framework: "Hadoop"
            },
            {
                framework_id: 34,
                framework: "SQL"
            },
            {
                framework_id: 35,
                framework: "MySQL"
            },
        ]
    },
    {
        skill_id: 4,
        skill_header: "Testing and Build Tools",

        skills_items: [
            {
                framework_id: 36,
                framework: "MongoDB"
            },
            {
                framework_id: 37,
                framework: "PostgreSQL"
            },
            {
                framework_id: 38,
                framework: "DB2"
            },
            {
                framework_id: 39,
                framework: "Oracle SQL"
            },
            {
                framework_id: 40,
                framework: "DBMS"
            },
            {
                framework_id: 41,
                framework: "Hadoop"
            },
            {
                framework_id: 42,
                framework: "SQL"
            },
            {
                framework_id: 43,
                framework: "MySQL"
            },
        ]
    },
    {
        skill_id: 5,
        skill_header: "Logging & Monitoring",

        skills_items: [
            {
                framework_id: 44,
                framework: "Prometheus"
            },
            {
                framework_id: 45,
                framework: "Grafana"
            },
            {
                framework_id: 46,
                framework: "Splunk"
            },
            {
                framework_id: 47,
                framework: "Apache tomcat"
            },
            {
                framework_id: 48,
                framework: "Dump Analysis"
            },
            {
                framework_id: 49,
                framework: "Netflix Zuul"
            },
            {
                framework_id: 50,
                framework: "Eureka"
            },
            {
                framework_id: 51,
                framework: "Log4j"
            },
        ]
    },
]
    

const SkillCard = () => {
    const [select, setSelected] = useState(1)
    return (
        <>
            <div className="flex flex-col lg:flex-row w-full h-full">

                <div className="lg:w-1/2 lg:h-full
                w-full h-2/3">

                    <div className="w-full h-full grid grid-cols-3 items-center justify-center gap-4">

                        {
                            skillset.map(skillset => <FrameCard
                                key={skillset.skill_id}
                                skillset={skillset}
                                select={select}
                                setSelected={setSelected}></FrameCard>)
                        }

                    </div>

                </div>

                <div className="lg:w-1/2 lg:h-full
                w-full h-1/3 border border-green-500">

                </div>

            </div>
        </>
    );
};

export default SkillCard;