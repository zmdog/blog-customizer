import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { useState } from 'react';
import {
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
	refForm: any;
	localStorageOptions: any;
	formIsOpen: boolean;
	setIsOpen: (e: any) => void;
	setOptions: (p: any) => void;
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
	const options = {
		fontFamilyOption: selectedFontType,
		fontSizeOption: selectedFontSize,
		fontColor: selectedFontColor,
		backgroundColor: selectedContentColor,
		contentWidth: selectedContentWidth,
	};
	const handleSubmit = (event: any) => {
		event.preventDefault();
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
	return (
		<>
			<ArrowButton
				formIsOpen={props.formIsOpen}
				onClick={(event: MouseEvent) => props.setIsOpen(event)}
			/>
			<aside
				className={
					props.formIsOpen
						? `${styles.container_open} ${styles.container}`
						: styles.container
				}>
				<form ref={props.refForm} className={styles.form}>
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
							onClick={handleSubmit}
							title='Применить'
							type='submit'
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
