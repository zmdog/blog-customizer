import { CSSProperties, useState } from 'react';

import { defaultArticleState } from 'src/constants/articleProps';
import styles from 'src/styles/index.module.scss';
import { ArticleParamsForm } from 'components/article-params-form';
import { Article } from 'components/article';

export const App = () => {
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

	return (
		<main
			className={styles.main}
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
				setOptions={setOptions}
			/>
			<Article />
		</main>
	);
};
