import { IconType } from 'react-icons';
import { FaFishFins } from 'react-icons/fa6';
import { GiChicken, GiCow, GiPig } from 'react-icons/gi';

type AccordionData = {
  categoryName: string;
  categoryId: number;
  icon: IconType;
  color: string;
  iconColor: string;
  items: {
    id: number;
    label: string;
  }[];
}[];

export const ACCORDION_DATA: AccordionData = [
  {
    categoryName: 'ぶた肉',
    categoryId: 1,
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
    categoryName: 'とり肉',
    categoryId: 2,
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
    categoryName: '牛肉',
    categoryId: 3,
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
    categoryName: 'さかな',
    categoryId: 4,
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
