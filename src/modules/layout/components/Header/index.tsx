import Logo from '@modules/common/components/Logo';

import s from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";

import ICON_MAIL from '@public/assets/email-icon.svg';
import ICON_PHONE from '@public/assets/phone-icon.svg';
import {COMPANY_EMAIL, COMPANY_PHONE} from "@utils/const";

const Header = () => {
	const contactsList = [
		{icon: ICON_MAIL, value: `mailto:${COMPANY_EMAIL}`},
		{icon: ICON_PHONE, value: `tel:${COMPANY_PHONE}`},
	];

	return (
		<header className={s.container}>
			<Logo/>

			<ul className={s.socials}>
				{contactsList.map((contact, index) => (
					<li key={index} className={s.socialsBox}>
						<Link href={contact.value} className={s.socialsLink}>
							<Image src={contact.icon} alt="Icon"/>
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
