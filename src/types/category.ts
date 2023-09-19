import { IconType } from 'react-icons';

export const CATEGORY = {
  PIG: 1,
  CHICKEN: 2,
  BEEF: 3,
  FISH: 4,
} as const;

export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];

export const CategoryName = {
  [CATEGORY.PIG]: 'ぶた肉',
  [CATEGORY.CHICKEN]: 'とり肉',
  [CATEGORY.BEEF]: '牛肉',
  [CATEGORY.FISH]: 'さかな',
};

export type CategoryData = {
  categoryName: string;
  categoryId: Category;
  icon: IconType;
  color: string;
  iconColor: string;
  items: {
    id: number;
    label: string;
  }[];
}[];
