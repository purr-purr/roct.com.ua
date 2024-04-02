import s from './HomeIntro.module.scss';
import Image from 'next/image';
import INTRO_IMAGE from '@modules/home/assets/hands.png'
import AnchorButton from "@modules/common/components/AnchorButton";

const HomeIntro = () => {
	return (
		<section className={s.container}>
			<article>
				<h1 className={s.title}>Незважаючи на військовий стан, <span>життя продовжується!</span>
				</h1>
				<p className={s.description}>Приєднуйтесь до нас у нашій місії
					відновлення України! <br/>
					В цей важкий час країна потребує нашої об{`'`}єднаної підтримки
					більше ніж
					будь-коли раніше. </p>

				<AnchorButton link="#support" text="Підтримайте сьогодні"/>
			</article>

			<div className={s.poster}>
				<Image src={INTRO_IMAGE} alt="Home intro"/>
			</div>
		</section>
	);
};

export default HomeIntro;
