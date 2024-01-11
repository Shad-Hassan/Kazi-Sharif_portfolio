const javaDev = "/javaDev.png"

const FrameCard = (props) => {
    const {select,setSelected,skillset} = props
    const {skill_id, skill_header , } = skillset
    return (
        <>
            <div className="w-full border border-yellow-500">
                <div className="h-4/5 w-full">
                    <img src={javaDev}/>                    
                </div>

                <h1>{skill_header}</h1>
                
            </div>
        </>
    );
};

export default FrameCard;