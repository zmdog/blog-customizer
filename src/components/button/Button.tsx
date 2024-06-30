import { Text } from 'components/text';

import styles from './Button.module.scss';

export const Button = ({
	title,
	onClick,
	type,
	className,
	color,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	className: string;
	color?: 'white';
}) => {
	return (
		<button
			className={`${styles.button} ${styles[className]}`}
			type={type}
			onClick={onClick}>
			<Text color={color} weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
