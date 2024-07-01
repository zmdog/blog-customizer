import { useEffect, RefObject } from 'react';
type closeForm = {
	refForm: RefObject<HTMLFormElement>;
	formIsOpen: boolean;
	setIsOpen: (formIsOpen: boolean) => void;
};
export const CloseForm = ({ refForm, formIsOpen, setIsOpen }: closeForm) => {
	useEffect(() => {
		if (formIsOpen) {
			const handleClose = (e: MouseEvent) => {
				if (!refForm.current?.contains(e.target as HTMLElement)) {
					setIsOpen(false);
				}
			};

			document.addEventListener('click', handleClose);

			return () => {
				document.removeEventListener('click', handleClose);
			};
		}
	}, [formIsOpen]);
};
