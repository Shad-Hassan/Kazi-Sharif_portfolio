import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import LoadingModal from "../../loadingComponents/LoadingModal";

const ModalCard = (props) => {
    const { object, setObject, modal, setModal } = props;
    const { skill_id, skill_img, skill_header, skills_items } = object;
    const { framework_id, framework } = skills_items;
    const [loading, setLoading] = useState(true)
  

    useEffect(() => {

        if (object) {
            setModal(object)
            setLoading(false)

        }


    }, [object, setModal])

    const closeModal = async () => {
        if (modal) {
            console.log("modal off")
            console.log("Object Selected", object)
            setObject(null)
            setModal(false)

        }
    }
    return (
        <>
            <div className="w-full h-full absolute top-0 rounded-xl z-30">
                <div className="rounded-full flex justify-end items-center gap-4 
                pt-3 pr-3 md:pt-[3svh] md:pr-[4svh] xl:pt-[4svh] xl:pr-[6svh]">
                    <div className="flex items-center justify-center text-sm text-moon-white tracking-widest">
                        <h3>Close</h3>
                    </div>
                    <IoCloseCircleOutline onClick={closeModal} className="shadow-xl text-6xl font-extrabold text-scarlet-red brightness-125 cursor-pointer rounded-full"></IoCloseCircleOutline>

                </div>

                <div className="absolute top-[10svh] w-full">
                    {loading &&
                        <div className="w-full h-1/2 flex items-end flex-col justify-end">

                            <LoadingModal></LoadingModal>

                        </div>
                    }
                </div>

                <div className="w-full my-[1.5rem]">
                    <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl italic text-center text-scarlet-red">{object.skill_header}</h1>
                </div>
                <div className="rounded-xl grid grid-cols-2 xl:grid-cols-3 items-center justify-center">
                    {
                        skills_items.map(({ framework_id, framework }) => (
                            <div key={framework_id} className="flex items-center justify-center gap-3">
                                <div className="w-3/4 ring ring-scarlet-red rounded-xl shadow-lg
                                px-2 py-1 xl:px-4 xl:py-2 
                                my-[2svh] xl:my-[3.2svh]">
                                    <h2 className="font-montserratAlt text-moon-white text-center">{framework}</h2>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </>
    );
};

export default ModalCard;