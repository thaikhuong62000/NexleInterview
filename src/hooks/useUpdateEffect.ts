import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useUpdateEffect(
	callback: EffectCallback,
	dependencies: DependencyList
) {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
			return;
		}
		// eslint-disable-next-line consistent-return
		return callback();
	}, dependencies);
}
