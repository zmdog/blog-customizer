import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, createRef } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const localStorageOptions =
		JSON.parse(localStorage.getItem('options')!) || {};
	const [options, setOptions] = useState({
		fontFamilyOption:
			localStorageOptions.fontFamilyOption ||
			defaultArticleState.fontFamilyOption,
		fontSizeOption:
			localStorageOptions.fontSizeOption || defaultArticleState.fontSizeOption,
		fontColor: localStorageOptions.fontColor || defaultArticleState.fontColor,
		backgroundColor:
			localStorageOptions.backgroundColor ||
			defaultArticleState.backgroundColor,
		contentWidth:
			localStorageOptions.contentWidth || defaultArticleState.contentWidth,
	});
	const [formIsOpen, setIsOpen] = useState(false);
	const refForm = createRef();
	const handleSetIsOpen = (e: any): void => {
		if (e.target.closest('form') !== refForm.current)
			formIsOpen
				? setIsOpen(false)
				: e.currentTarget.role === 'button'
				? setIsOpen(true)
				: '';
	};

	return (
		<div
			onClick={handleSetIsOpen}
			className={clsx(styles.main)}
			style={
				{
					'--font-family': options.fontFamilyOption.value,
					'--font-size': options.fontSizeOption.value,
					'--font-color': options.fontColor.value,
					'--container-width': options.contentWidth.value,
					'--bg-color': options.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				localStorageOptions={localStorageOptions}
				refForm={refForm}
				setOptions={setOptions}
				formIsOpen={formIsOpen}
				setIsOpen={handleSetIsOpen}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
