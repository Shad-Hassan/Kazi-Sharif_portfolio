import { useEffect, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import Responsibilities from "./Responsibilities";
import Pagination from "./Pagination";

const WorkDetails = (props) => {
    const { jobs, jobObject, setJobObject, details, setDetails } = props;
    const { job_Id, company, logo, post, city, session, work } = jobObject;
    const { done_id, done } = work; //props to child Component for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [workPerPage, setWorkPerpage] = useState(3)
    const lastWorkIndex = currentPage * workPerPage;
    const firstWorkIndex = lastWorkIndex - workPerPage;
    const currentWork = work.slice(firstWorkIndex, lastWorkIndex)
    const workLength = work.length





    return (
        <>
            <div className="w-full h-full rounded-xl font-montserratAlt text-moon-white">


                <div className="w-full flex items-center justify-center h-[2re,] sm:h-[3rem] gap-2">
                    <div className="h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] 2xl:h-[48px] 2xl:w-[48px] rounded-full">
                        <img src={logo} className="rounded-full border-2 border-lime-500" />
                    </div>
                    <div className="h-[24px] sm:h-[32px] flex items-center justify-start">
                        <h2>{company}</h2>
                    </div>

                </div>

                <div className="h-[2rem] flex items-center justify-center gap-2 mt-[0.25rem] sm:mt-[1rem]">
                    <div className="flex justify-center items-center">
                        <MdAccessTime />
                    </div>
                    <div className="">
                        <h3>{session}</h3>
                    </div>
                </div>

                <div className="w-full mt-[0.25rem] sm:mt-[1rem] text-xl text-lime-500">
                    <h3 className="text-center font-bold">{post}</h3>
                </div>


                <div className="mt-[2rem] px-3 border border-moon-white rounded-xl grid grid-cols-1 gap-2 bg-evilBlue">
                    {
                        currentWork.map(work => <Responsibilities
                            key={done_id}
                            work={work}></Responsibilities>)
                    }
                </div>
                <div className="w-full px-3 flex justify-center items-center sm:gap-x-2 gap-x-4 lg:gap-x-8">
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        workPerPage={workPerPage}
                        totalWork={workLength}></Pagination>
                </div>

            </div>


        </>
    );
};

export default WorkDetails;