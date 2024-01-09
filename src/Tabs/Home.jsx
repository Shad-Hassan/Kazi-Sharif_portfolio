import Intro from "../Components/HomeComponents/Intro";


const Home = () => {
    const moonStroke = {

        textShadow: '-2px -2px 0 #f6f6f3, 2px -2px 0 #f6f6f3, -2px 2px 0 #f6f6f3, 2px 2px 0 #f6f6f3',
        color: '#000435',
    }
    return (
        <>
           <Intro stroke={moonStroke}></Intro>
        </>
    );
};

export default Home;