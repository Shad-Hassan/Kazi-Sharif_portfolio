import ContactMe from "../Components/HomeComponents/ContactMe";
import Intro from "../Components/HomeComponents/Intro";
import Skills from "../Components/HomeComponents/Skills";
import WorkXp from "../Components/HomeComponents/WorkXp";
import { Link as ScrollLink} from "react-scroll";



const Home = () => {
    const moonStroke = {

        textShadow: '-2px -2px 0 #f6f6f3, 2px -2px 0 #f6f6f3, -2px 2px 0 #f6f6f3, 2px 2px 0 #f6f6f3',
        color: '#000435',
    }
    return (
        <>
           <Intro stroke={moonStroke}></Intro>
           <ScrollLink to="Skills"><Skills stroke={moonStroke}></Skills></ScrollLink>
           <ScrollLink to="Experience"><WorkXp stroke={moonStroke}></WorkXp></ScrollLink>
           <ScrollLink><ContactMe stroke={moonStroke}></ContactMe></ScrollLink>
        </>
    );
};

export default Home;