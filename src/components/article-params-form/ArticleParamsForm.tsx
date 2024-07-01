import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { useState, useRef, FormEvent, MouseEvent } from 'react';
import { CloseForm } from 'src/hooks/closeForm';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'components/radio-group';
import { Text } from 'components/text';
import { Separator } from 'components/separator';

export const ArticleParamsForm = (props: {
	localStorageOptions: ArticleStateType;
	setOptions: (p: ArticleStateType) => void;
}) => {
	const [selectedFontType, setSelectedFontType] = useState(
		props.localStorageOptions.fontFamilyOption ||
			defaultArticleState.fontFamilyOption
	);
	const [selectedFontSize, setSelectedFontSize] = useState(
		props.localStorageOptions.fontSizeOption ||
			defaultArticleState.fontSizeOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState(
		props.localStorageOptions.fontColor || defaultArticleState.fontColor
	);
	const [selectedContentColor, setSelectedContentColor] = useState(
		props.localStorageOptions.backgroundColor ||
			defaultArticleState.backgroundColor
	);
	const [selectedContentWidth, setSelectedContentWidth] = useState(
		props.localStorageOptions.contentWidth || defaultArticleState.contentWidth
	);
	const [formIsOpen, setIsOpen] = useState(false);
	const refForm = useRef<HTMLFormElement>(null);

	const options = {
		fontFamilyOption: selectedFontType,
		fontSizeOption: selectedFontSize,
		fontColor: selectedFontColor,
		backgroundColor: selectedContentColor,
		contentWidth: selectedContentWidth,
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.setOptions(options);
		localStorage.setItem('options', JSON.stringify(options));
	};
	const handleReset = () => {
		setSelectedFontType(defaultArticleState.fontFamilyOption);
		setSelectedFontSize(defaultArticleState.fontSizeOption);
		setSelectedFontColor(defaultArticleState.fontColor);
		setSelectedContentColor(defaultArticleState.backgroundColor);
		setSelectedContentWidth(defaultArticleState.contentWidth);
		localStorage.clear();
		props.setOptions(defaultArticleState);
	};

	const handleToggle = (e: MouseEvent): void => {
		e.stopPropagation();
		setIsOpen((formIsOpen) => !formIsOpen);
	};
	CloseForm({
		refForm,
		formIsOpen,
		setIsOpen,
	});

	return (
		<>
			<ArrowButton formIsOpen={formIsOpen} onClick={handleToggle} />
			<aside
				className={
					formIsOpen
						? `${styles.container_open} ${styles.container}`
						: styles.container
				}>
				<form ref={refForm} onSubmit={handleSubmit} className={styles.form}>
					<Text size={31} weight={800} uppercase>
						{'Задайте параметры'}
					</Text>
					<Select
						title={'Шрифт'}
						selected={selectedFontType}
						options={fontFamilyOptions}
						onChange={setSelectedFontType}
					/>
					<RadioGroup
						name={'radio'}
						options={fontSizeOptions}
						selected={selectedFontSize}
						title={'Размер шрифта'}
						onChange={setSelectedFontSize}
					/>
					<Select
						title={'Выбор цвета'}
						selected={selectedFontColor}
						options={fontColors}
						onChange={setSelectedFontColor}
					/>
					<Separator />
					<Select
						title={'Цвет фона'}
						selected={selectedContentColor}
						options={backgroundColors}
						onChange={setSelectedContentColor}
					/>
					<Select
						title={'Ширина контента'}
						selected={selectedContentWidth}
						options={contentWidthArr}
						onChange={setSelectedContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							className={'buttonReset'}
							onClick={handleReset}
							title='Сбросить'
							type='reset'
							color={'white'}
						/>
						<Button
							className={'buttonSubmit'}
							title='Применить'
							type='submit'
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
