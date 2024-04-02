import s from './AnchorButton.module.scss';
import {FC} from "react";

const AnchorButton: FC<{
	link: string;
	text: string;
}> = ({link, text}) => {
	return (
		<a href={link} className={s.container}>
			{text}
		</a>
	);
}

export default AnchorButton;
