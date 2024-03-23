import { FlatList, ListRenderItemInfo, View } from 'react-native';
import React from 'react';
import { makeStyles } from '@/theme';
import { CategoryItem } from '../molecules';

const data = [
	[
		{ id: 1, name: 'A' },
		{ id: 2, name: 'B' },
		{ id: 3, name: 'C' },
	],
	[
		{ id: 4, name: 'D' },
		{ id: 5, name: 'E' },
	],
];

export const CategoriesList = () => {
	const { styles } = useStyles();

	const renderItem = ({ item }: ListRenderItemInfo<any>) => {
		return (
			<View style={styles.row}>
				<CategoryItem key={item[0]?.id} value={item[0]?.name} />
				<CategoryItem key={item[1]?.id} value={item[1]?.name} />
				<CategoryItem key={item[2]?.id} value={item[2]?.name} />
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
