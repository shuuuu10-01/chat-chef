import { FC, ReactNode, createContext, useCallback, useState } from 'react';

import { SelectType } from 'src/types/category';

export const SelectContext = createContext<SelectType[]>([]);

export const SelectDispatchContext = createContext<(data: SelectType) => void>(() => {});

const SelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<SelectType[]>([]);

  const handleSelect = useCallback(
    (data: SelectType) => {
      if (selected.some((s) => s.categoryId === data.categoryId && s.id === data.id)) {
        setSelected(() =>
          selected.filter((s) => !(s.categoryId === data.categoryId && s.id === data.id)),
        );
      } else {
        setSelected([...selected, data]);
      }
    },
    [selected],
  );

  return (
    <SelectContext.Provider value={selected}>
      <SelectDispatchContext.Provider value={handleSelect}>
        {children}
      </SelectDispatchContext.Provider>
    </SelectContext.Provider>
  );
};

export default SelectProvider;
