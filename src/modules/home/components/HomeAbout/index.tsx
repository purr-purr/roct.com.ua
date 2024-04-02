import s from './HomeAbout.module.scss';

const HomeAbout = () => {
	return (
		<section className={s.container}>
			<p className={s.description}> У вересні 2022 року було засновано наш фонд,
				мета якого – <strong>допомогти
					всім, хто постраждав від нападу російських окупантів на нашу
					країну,</strong> та
				зробити так, щоб кожна людина в країні знала, що про неї є кому
				потурбуватись.</p>
		</section>
	);
};

export default HomeAbout;
