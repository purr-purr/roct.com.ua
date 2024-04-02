import s from './HomeContacts.module.scss';
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_MAP_LINK,
	COMPANY_PHONE
} from "@utils/const";

const HomeAboutUs = () => {
	return (
		<section className={s.container}>
			<div className={s.map}>
				<iframe
					className={s.mapFrame}
					src={COMPANY_MAP_LINK}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>

			<article className={s.info}>
				<h2 className={s.title}>контактні дані</h2>
				<dl className={s.infoInner}>
					<dt>Місцезнаходження:</dt>
					<dd>{COMPANY_ADDRESS}</dd>
					<br/>
					<dt>Телефон:</dt>
					<dd>{COMPANY_PHONE}</dd>
					<br/>
					<dt>Email:</dt>
					<dd>{COMPANY_EMAIL}</dd>
					<br/>
					<dt>Власник та директор БО:</dt>
					<dd>Богдан Олександр Євгенович</dd>
				</dl>
			</article>

		</section>
	);
};

export default HomeAboutUs;
