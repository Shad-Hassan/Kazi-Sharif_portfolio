import ContactMe from "../Components/HomeComponents/ContactMe";
import Intro from "../Components/HomeComponents/Intro";
import Skills from "../Components/HomeComponents/Skills";
import WorkXp from "../Components/HomeComponents/WorkXp";



const Home = () => {
    const moonStroke = {

        textShadow: '-2px -2px 0 #f6f6f3, 2px -2px 0 #f6f6f3, -2px 2px 0 #f6f6f3, 2px 2px 0 #f6f6f3',
        color: '#000435',
    }
    return (
        <>
           <Intro stroke={moonStroke}></Intro>
           <Skills stroke={moonStroke}></Skills>
           <WorkXp stroke={moonStroke}></WorkXp>
           <ContactMe stroke={moonStroke}></ContactMe>
        </>
    );
};

export default Home;