import {
  CategoryData,
  CategoryName,
  CATEGORY,
  CategoryIcon,
  CategoryColor,
  CategoryIconColor,
} from 'src/types/category';

export const ACCORDION_DATA: CategoryData = [
  {
    categoryName: CategoryName[CATEGORY.PIG],
    categoryId: CATEGORY.PIG,
    icon: CategoryIcon[CATEGORY.PIG],
    color: CategoryColor[CATEGORY.PIG],
    iconColor: CategoryIconColor[CATEGORY.PIG],
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
    icon: CategoryIcon[CATEGORY.CHICKEN],
    color: CategoryColor[CATEGORY.CHICKEN],
    iconColor: CategoryIconColor[CATEGORY.CHICKEN],
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
    icon: CategoryIcon[CATEGORY.BEEF],
    color: CategoryColor[CATEGORY.BEEF],
    iconColor: CategoryIconColor[CATEGORY.BEEF],
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
    icon: CategoryIcon[CATEGORY.FISH],
    color: CategoryColor[CATEGORY.FISH],
    iconColor: CategoryIconColor[CATEGORY.FISH],
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
