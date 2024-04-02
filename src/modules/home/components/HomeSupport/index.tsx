import s from './HomeSupport.module.scss';
import cn from "classnames";
import Image from 'next/image';
import HEARTS_ICON from '@modules/home/assets/hearts.png';
import {COMPANY_ID, COMPANY_NAME} from "@utils/const";

const HomeSupport = () => {
	return (
		<section className={s.container}>
			<article className={cn(s.card, s.fundInfo)}>
				<h2 className={s.title}>Як працює Фонд</h2>
				<p>Фонд не має на меті отримання прибутку. Разом з тим ми існуємо
					завдяки благодійних внесків.
					<br/>
					<br/>
					Кожна гривня, що перераховується нам на рахунок витрачається за
					виключним цільовим призначенням «Допомога постраждалим внаслідок
					військової агресії російських окупантів». За кожну витрачену суму ми
					надаємо відповідні звіти!
					<br/>
					<br/>
					Ми впевнені, що разом ми зможемо відновити нашу країну! </p>
			</article>

			<article className={cn(s.card, s.support)} id="support">
				<h2 className={s.title}>Підтримати сьогодні
					<Image src={HEARTS_ICON} alt="Hearts Icon"/>
				</h2>
				<p><b>БЛАГОДІЙНА ОРГАНІЗАЦІЯ «БЛАГОДІЙНИЙ ФОНД
					«{COMPANY_NAME[0] + ' ' + COMPANY_NAME[1]}»</b></p>
				<br/>
				<p><b>Ідентифікаційний код:</b> {COMPANY_ID}</p>
				<br/>
				<p><b>Розрахунковий Рахунок:</b></p>
				<p>IBAN: UA 66 320478 0000026006924930940 <span>АБ «УКРГАЗБАНК»</span>
				</p>
			</article>
		</section>
	);
};

export default HomeSupport;
