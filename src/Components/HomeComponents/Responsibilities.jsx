import { MdOutlineTaskAlt } from "react-icons/md";

const Responsibilities = ({work}) => {
    const { done_id, done } = work;
    

    return (
        <>
            <div className="flex text-moon-white font-montserratAlt p-2 gap-4">
                <div className="w-[16px] flex items-start justify-center text-md font-bold text-lime-400">
                    <MdOutlineTaskAlt />
                </div>
                <div className="w-full text-pretty">
                    {done}
                </div>

            </div>
        </>
    );
};

export default Responsibilities;