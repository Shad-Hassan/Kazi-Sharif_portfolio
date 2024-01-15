import { useEffect, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import Responsibilities from "./Responsibilities";

const WorkDetails = (props) => {
    const { jobs, jobObject, setJobObject, details, setDetails } = props;
    const { job_Id, company, logo, post, city, session, work } = jobObject;
    const { done_id, done } = work;
    const [currentPage , setCurrentPage] = useState(1)
    const [workPerPage , setWorkPerpage] = useState(3)
    const lastWorkIndex = currentPage*workPerPage;
    const firstWorkIndex = lastWorkIndex - workPerPage;
    const currentWork = work.slice(firstWorkIndex,lastWorkIndex)





    return (
        <>
            <div className="w-full h-full rounded-xl font-montserratAlt text-moon-white">


                <div className="w-full flex items-center justify-center h-[3rem] gap-2 mt-[2rem]">
                    <div className="h-[48px] w-[48px] rounded-full">
                        <img src={logo} className="rounded-full border-2 border-lime-500" />
                    </div>
                    <div className="h-[32px] flex items-center justify-start">
                        <h2>{company}</h2>
                    </div>

                </div>

                <div className="h-[2rem] flex items-center justify-center gap-2 mt-[1rem]">
                    <div className="flex justify-center items-center">
                        <MdAccessTime />
                    </div>
                    <div className="">
                        <h3>{session}</h3>
                    </div>
                </div>

                <div className="w-full mt-[1rem] text-xl text-lime-500">
                    <h3 className="text-center">{post}</h3>
                </div>


                <div className="mt-[2rem] px-3 border border-moon-white rounded-xl grid grid-cols-1 gap-2">
                    {
                        work.map( work => <Responsibilities
                        key={done_id}
                        work={work}></Responsibilities>)
                    }
                </div>

            </div>


        </>
    );
};

export default WorkDetails;