import { useCallback, useState } from 'react';

export const useFieldTouched = () => {
	const [isTouched, setIsTouched] = useState(false);

	const onTouched = useCallback(() => {
		setIsTouched(true);
	}, []);

	return {
		isTouched,
		onTouched,
	};
};
