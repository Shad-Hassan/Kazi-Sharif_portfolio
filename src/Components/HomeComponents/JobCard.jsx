import { MdAccessTime } from "react-icons/md";

const JobCard = (props) => {
    const { jobs, jobObject, setJobObject, } = props;
    const { job_Id, company, logo, post, city, session, work } = jobs;
    return (

        <>
            <div className="cursor-pointer flex items-center justify-center w-full h-full relative p-1 font-montserratAlt text-moon-white">

                <div className="w-3/4 relative cursor-pointer 
                    ring-2 ring-ghost-blue shadow-xl ring-offset-2 ring-offset-scarlet-red rounded-xl">



                    <div className="w-full flex items-center justify-center p-1">
                        <h1 className="text-center text-md md:text-lg xl:text-xl mb-1 py-2 font-extrabold">{company}</h1>
                    </div>


                    <div className="h-[80px] md:h-[160px] xl:h-[200px] w-full flex items-start justify-center">
                        <img src={logo} className="w-full 2xl:w-4/5 2xl:h-4/5 h-full object-contain md:object-fill p-2" />
                    </div>


                    <div className="flex gap-2 justify-center">
                        <div className="flex justify-center items-center">
                            <MdAccessTime />
                        </div>
                        <div>
                            <h3>{session}</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="text-center text-md md:text-lg xl:text-xl mb-1 py-2 font-extrabold">{post}</h1>
                    </div>

                    

                </div>

            </div>
        </>
    );
};

export default JobCard;