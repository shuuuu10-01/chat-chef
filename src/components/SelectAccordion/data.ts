import { IconType } from 'react-icons';
import { FaFishFins } from 'react-icons/fa6';
import { GiChicken, GiCow, GiPig } from 'react-icons/gi';

type AccordionData = {
  title: string;
  categoryId: number;
  icon: IconType;
  color: string;
  iconColor: string;
  items: {
    value: number;
    label: string;
  }[];
}[];

export const ACCORDION_DATA: AccordionData = [
  {
    title: 'ぶた肉',
    categoryId: 1,
    icon: GiPig,
    color: 'pink',
    iconColor: '#ED64A6',
    items: [
      {
        value: 1,
        label: 'こま切れ',
      },
      {
        value: 2,
        label: 'バラ',
      },
      {
        value: 3,
        label: 'ロース',
      },
    ],
  },
  {
    title: 'とり肉',
    categoryId: 2,
    icon: GiChicken,
    color: 'red',
    iconColor: 'red',
    items: [
      {
        value: 1,
        label: 'ムネ',
      },
      {
        value: 2,
        label: 'モモ',
      },
      {
        value: 3,
        label: '手羽元',
      },
      {
        value: 4,
        label: '手羽先',
      },
    ],
  },
  {
    title: '牛肉',
    categoryId: 3,
    icon: GiCow,
    color: 'black',
    iconColor: 'black',
    items: [
      {
        value: 1,
        label: '薄切り',
      },
      {
        value: 2,
        label: 'カルビ',
      },
      {
        value: 3,
        label: 'ステーキ',
      },
    ],
  },
  {
    title: 'さかな',
    categoryId: 4,
    icon: FaFishFins,
    color: 'blue',
    iconColor: '#2b6cb0',
    items: [
      {
        value: 1,
        label: '鮭の切身',
      },
      {
        value: 2,
        label: '白身魚の切身',
      },
      {
        value: 3,
        label: '青魚',
      },
    ],
  },
];
