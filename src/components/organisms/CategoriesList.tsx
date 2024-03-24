import { FlatList, ListRenderItemInfo, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@/theme';
import { api } from '@/services/api';
import { Category } from '@/types';
import { chunk } from 'lodash';
import { CategoryItem } from '../molecules';

export const CategoriesList = () => {
	const { styles } = useStyles();
	const [data, setData] = useState<Category[][]>([]);
	const [selected, setSelected] = useState<Record<number, boolean>>({});

	useEffect(() => {
		api
			.getCategories()
			.then(response => {
				if (response.kind === 'ok') {
					setData(chunk(response.data, 3));
				}
			})
			.catch(() => {
				//
			});
	}, []);

	const handleSelect = useCallback((id: number) => {
		setSelected(pre => {
			return { ...pre, [id]: !pre[id] };
		});
	}, []);

	const renderItem = ({ item }: ListRenderItemInfo<Category[]>) => {
		return (
			<View style={styles.row}>
				<CategoryItem
					key={item[0]?.id}
					id={item[0]?.id}
					value={item[0]?.name}
					isSelected={selected[item[0]?.id]}
					setSelected={handleSelect}
				/>
				<CategoryItem
					key={item[1]?.id}
					id={item[1]?.id}
					value={item[1]?.name}
					isSelected={selected[item[1]?.id]}
					setSelected={handleSelect}
				/>
				<CategoryItem
					key={item[2]?.id}
					id={item[2]?.id}
					value={item[2]?.name}
					isSelected={selected[item[2]?.id]}
					setSelected={handleSelect}
				/>
			</View>
		);
	};

	return <FlatList data={data} renderItem={renderItem} />;
};

const useStyles = makeStyles(() => ({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 8,
	},
}));
