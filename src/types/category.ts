import { IconType } from 'react-icons';
import { FaFishFins } from 'react-icons/fa6';
import { GiChicken, GiCow, GiPig } from 'react-icons/gi';

export type SelectType = {
  categoryName: string;
  categoryId: Category;
  id: number;
  label: string;
};

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

export const CategoryIcon = {
  [CATEGORY.PIG]: GiPig,
  [CATEGORY.CHICKEN]: GiChicken,
  [CATEGORY.BEEF]: GiCow,
  [CATEGORY.FISH]: FaFishFins,
};

export const CategoryColor = {
  [CATEGORY.PIG]: 'pink',
  [CATEGORY.CHICKEN]: 'red',
  [CATEGORY.BEEF]: 'blackAlpha',
  [CATEGORY.FISH]: 'blue',
};

export const CategoryIconColor = {
  [CATEGORY.PIG]: '#ED64A6',
  [CATEGORY.CHICKEN]: 'red',
  [CATEGORY.BEEF]: 'black',
  [CATEGORY.FISH]: '#2b6cb0',
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
