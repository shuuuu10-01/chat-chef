import { FaFishFins } from 'react-icons/fa6';
import { GiChicken, GiCow, GiPig } from 'react-icons/gi';

import { CategoryData, CategoryName, CATEGORY } from 'src/types/category';

export const ACCORDION_DATA: CategoryData = [
  {
    categoryName: CategoryName[CATEGORY.PIG],
    categoryId: CATEGORY.PIG,
    icon: GiPig,
    color: 'pink',
    iconColor: '#ED64A6',
    items: [
      {
        id: 1,
        label: 'こま切れ',
      },
      {
        id: 2,
        label: 'バラ',
      },
      {
        id: 3,
        label: 'ロース',
      },
    ],
  },
  {
    categoryName: CategoryName[CATEGORY.CHICKEN],
    categoryId: CATEGORY.CHICKEN,
    icon: GiChicken,
    color: 'red',
    iconColor: 'red',
    items: [
      {
        id: 1,
        label: 'ムネ',
      },
      {
        id: 2,
        label: 'モモ',
      },
      {
        id: 3,
        label: '手羽元',
      },
      {
        id: 4,
        label: '手羽先',
      },
    ],
  },
  {
    categoryName: CategoryName[CATEGORY.BEEF],
    categoryId: CATEGORY.BEEF,
    icon: GiCow,
    color: 'blackAlpha',
    iconColor: 'black',
    items: [
      {
        id: 1,
        label: '薄切り',
      },
      {
        id: 2,
        label: 'カルビ',
      },
      {
        id: 3,
        label: 'ステーキ',
      },
    ],
  },
  {
    categoryName: CategoryName[CATEGORY.FISH],
    categoryId: CATEGORY.FISH,
    icon: FaFishFins,
    color: 'blue',
    iconColor: '#2b6cb0',
    items: [
      {
        id: 1,
        label: '鮭の切身',
      },
      {
        id: 2,
        label: '白身魚の切身',
      },
      {
        id: 3,
        label: '青魚',
      },
    ],
  },
];
