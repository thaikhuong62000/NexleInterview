import { useCallback, useState } from 'react';

export const useFieldTouched = () => {
	const [isTouched, setIsTouched] = useState(false);

	const onBlur = useCallback(() => {
		setIsTouched(true);
	}, []);

	return {
		isTouched,
		onBlur,
	};
};
