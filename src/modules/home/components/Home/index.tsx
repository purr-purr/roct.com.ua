import HomeContacts from '@modules/home/components/HomeContacts';
import HomeIntro from '@modules/home/components/HomeIntro';
import HomeAbout from "@modules/home/components/HomeAbout";
import HomeSupport from "@modules/home/components/HomeSupport";

const Home = () => {
	return (
		<>
			<HomeIntro/>
			<HomeAbout/>
			<HomeSupport/>
			<HomeContacts/>
		</>
	);
};

export default Home;
