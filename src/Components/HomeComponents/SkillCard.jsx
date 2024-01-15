import { useState } from "react";
import FrameCard from "./FrameCard";
import ModalCard from "./ModalCard";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
const skillset = [
    {
        skill_id: 1,
        skill_header: "Front End Development",
        skill_img: "/fronty.png",
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
        skill_img: "/backy.png",
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
        skill_img: "/cloudy.png",
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
        skill_img: "/oracleDB.png",
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
        skill_id: 5,
        skill_header: "Testing and Build Tools",
        skill_img: "/testing.png",
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
        skill_id: 6,
        skill_header: "Logging & Monitoring",
        skill_img: "/monitoring.png",
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

    const [modalRef, modalInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const [skillCardRef, skillCardInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const [modal, setModal] = useState(false)
    const [object, setObject] = useState(null)
    return (
        <>
            <div className="flex items-center justify-center w-full h-full relative p-1 mt-[0.75svh] sm:mt-[2svh]">


                {!modal &&

                    <motion.div className="w-full grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-x-2 gap-y-8 2xl:gap-y-12 lg:gap-y-4 z-10" ref={skillCardRef}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                        skillCardInView ?
                            {
                                opacity: 1,
                                scale: 1,
                                transition: { type: "spring", stiffness: 260, damping: 20, duration: 1, ease: "easeInOut" }
                            }
                            : {}
                    }>

{
                            skillset.map(skillset => <FrameCard
                                key={skillset.skill_id}
                                skillset={skillset}
                                object={object}
                                setObject={setObject}
                                modal={modal}
                                setModal={setModal}></FrameCard>)
                        }

                    </motion.div>
                    

                }
                {modal &&

                    <motion.div ref={modalRef} className="absolute h-full w-full rounded-xl"
                        initial={{ x: -20, opacity: 0 }}
                        animate={
                            modalInView ?
                                {
                                    x: [null, -20, 0, -10, 0],
                                    opacity: [null, 0, 1, 0.8, 1],
                                    transition: { duration: 0.75, ease: "easeInOut" },
                                } :
                                {}
                        }>
                        {
                            skillset.map(skillset => <ModalCard
                                key={skillset.skill_id}
                                skillset={skillset}
                                object={object}
                                setObject={setObject}
                                modal={modal}
                                setModal={setModal}></ModalCard>)
                        }

                    </motion.div>


                }

            </div>




        </>
    );
};

export default SkillCard;