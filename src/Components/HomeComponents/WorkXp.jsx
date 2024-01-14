import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import JobCard from "./JobCard";


const WorkXp = ({ stroke }) => {
    const [workRef, workRefInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const jobs = [
        {
            job_Id: 1,
            company: "Citibank & Citigroup, INC ",
            logo:"/citi.png",
            post: "Software Engineer",
            city: "Irving,TX",
            session: "March 2022 - Present",
            work: [
                {
                    done_id: 1,
                    done: "Project C1C: Project C1C is focused on building banking & financial domain applications and microservices for transferring and storing of sensitive data for Auto, home, Business , surety Service, credit &loan holders.",
                },
                {
                    done_id: 2,
                    done: "Designed, developed, and deployed microservices-based solutions using Java, Spring Boot, Docker, Kubernetes, & AWS.",
                },
                {
                    done_id: 3,
                    done: "Implemented UI requirements using Spring, microservices with Reacts and Angular",
                },
                {
                    done_id: 4,
                    done: "Worked for developing and enhancing the Citi Risk Platform for Commercial technology using Java/J2EE, JSP,JPA, JEE, Hibernate, Webservices, Cloud, SOAP/REST, Spring 3.2, Spring Web Flow 2.0, Spring Boot 2.3, Micro-Services, AWS, JUnit, Python, Spring Data JPA, XML, XSD, Servlets, SNMP,UNIX, Oracle, Mongo DB, PostgreSQL, Swagger and Postman API design tools, and messaging platform Kafka. Worked on the development of Java-based applications using Spring and Hibernate framework.",
                },
                {
                    done_id: 5,
                    done: "Optimized database performance by writing complex SQL queries and stored procedures.",
                },
                {
                    done_id: 6,
                    done: "Worked in Containerization using Docker, Docker CLI and Docker Compose, Building and deploying Docker images",
                },
                {
                    done_id: 7,
                    done: "Worked in Kubernetes architecture with Kubernetes deployment and management for Scaling and load balancing in Kubernetes and helped with container networking and storage."
                },
                {
                    done_id: 8,
                    done: "Led the development of a microservices-based payment system that reduced transaction times by 50%",
                },
                {
                    done_id: 9,
                    done: "Worked in JSON and XML technologies such as XSL, XSLT, XPath, parsers like SAX, DOM and JAXB. ",
                },
                {
                    done_id: 10,
                    done: "Worked with J2EE frameworks such as Spring, Hibernate, Struts, and Java Server Faces (JSF), along with experience in developing web services using SOAP and RESTful APIs.",
                },
                {
                    done_id: 11,
                    done: "Implemented UI requirements using Spring, microservices with Reacts and Angular",
                },
                {
                    done_id: 12,
                    done: "Optimized database queries and implemented caching strategies to improve application performance by 50%.",
                },
                {
                    done_id: 13,
                    done: "Use Git for source control and continuous integration tools such as Jenkins for build automation and deployment.",
                },
                {
                    done_id: 14,
                    done: "Collaborated closely with team of 18 programmers and with one java developer in pair programming arrangement, decreasing the production cost of 4% annually by reviewing the previous implementation code and debugged errors to improve performance. Resulted in 15% reduction in hours spent.",
                },
            ],
        },
        {
            company: "Pattons Labs, INC ",
            logo:"/pattons.png",
            post: "Software Developer",
            city: "Jacksonville, FL",
            session: "October 2022 - March 2022",
            work: [
                {
                    done_id: 1,
                    done: "Developed and maintained enterprise-level applications using Java and Spring Framework",
                },
                {
                    done_id: 2,
                    done: "Built RESTful API services using Jersey & Hibernate with Oracle, PostgreSQL, MySQL & MongoDB.",
                },
                {
                    done_id: 3,
                    done: "Developed and maintained batch processing systems using Spring Batch.",
                },
                {
                    done_id: 4,
                    done: "Analyzed and adjusted for user/client habits to cut attrition 25%, resulting in a 30% increase in customer satisfaction.",
                },
                {
                    done_id: 5,
                    done: "Worked with teams of 2-3 developers in 3 projects to improve software testing and troubleshooting",
                },
                {
                    done_id: 6,
                    done: "Designed, developed, and implemented software applications for websites based on analyzed requirements and understanding of industry technical standards. Developed JSP web pages integrating HTML5, XML elements with SOAP/Rest Service. Exceeded jobcompletion deadlines by 15% on average. ",
                },
            ],
        },
        {
            company: "Oklahoma State University",
            logo:"/osu.png",
            post: "Junior Web Developer",
            city: "Stillwater , OK",
            session: "January 2019 - October 2021",
            work: [
                {
                    done_id: 1,
                    done: "Accomplished web developer with expertise in both front-end and back-end development, proficiently implementing Google Maps integration and API systems for location-based solutions within Oklahoma State University's Housing Website Application.",
                },
                {
                    done_id: 2,
                    done: "Worked in Python modeling for the Automatic Detection of Drug Abuse and Adverse Drug Reactions, leveraging social media data to enhance public health monitoring.",
                },
                {
                    done_id: 3,
                    done: "Demolished in software development, driving a 6% departmental efficiency increase through the creation of tailored applications and tools to streamline operations RESTful API services using Jersey & Hibernate with Oracle, PostgreSQL, MySQL & MongoDB.",
                },
            ],
        },
    ]
    const [details, setDetails] = useState(false)
    const [jobObject, setJobObject] = useState(null)
    return (
        <>
            <div className="w-full h-[100svh] rounded-xl bg-deep-blue border border-white font-montserratAlt">


                {/* Xp Header */}
                <div className="h-[6rem] md: lg:h-[9rem] xl:h-[12rem] 2xl:h-[15rem] 
                flex flex-col gap-4 items-center justify-center pt-2">
                    <h1 className="text-3xl md:text-3xl xl:text-5xl 2xl:9xl font-extrabold mt-1" style={stroke}>
                        Experience
                    </h1>
                    <p className="text-sm md:text-lg xl:text-xl font-semibold text-moon-white text-center px-2">My depth industrial experience has made me proficient with software development.Click for more details </p>
                </div>


                <div className="mt-[3svh]">
                    {!details &&

                        <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-x-2 gap-y-8 2xl:gap-y-12 lg:gap-y-4 z-10"
                            ref={workRef}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={
                                workRefInView ?
                                    {
                                        opacity: 1,
                                        scale: 1,
                                        transition: { type: "spring", stiffness: 260, damping: 20, duration: 1, ease: "easeInOut" }
                                    }
                                    : {}
                            }>

                            {
                                jobs.map(jobs => <JobCard
                                    key={jobs.job_Id}
                                    jobs={jobs}
                                    jobObject={jobObject}
                                    setJobObject={setJobObject}
                                    details={details}
                                    setDetails={setDetails}></JobCard>)
                            }

                        </motion.div>


                    }


                </div>



            </div>

        </>
    );
};

export default WorkXp;