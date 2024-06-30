import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
import { MouseEvent } from 'react';
export type OnClick = (e: MouseEvent) => void;

export const ArrowButton = (props: {
	formIsOpen: boolean;
	onClick: OnClick;
}) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={(e: MouseEvent) => props.onClick(e)}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={
				props.formIsOpen
					? `${styles.container} ${styles.container_open}`
					: styles.container
			}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={
					props.formIsOpen
						? `${styles.arrow} ${styles.arrow_open}`
						: styles.arrow
				}
			/>
		</div>
	);
};
