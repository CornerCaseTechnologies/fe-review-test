import { useEffect, useState } from 'react';

const List = ({ data, setData }: { data: any[]; setData: () => void; page: number }) => {
  const [items, setItems] = useState<{ name: string }[]>([]);

  useEffect(() => {
    setItems(data.filter((i) => !i.isHidden));
  }, []);

  return (
    <div>
      {items.map((a) => (
        <div>{a.name}</div>
      ))}
      <button
        onClick={() => {
          setData();
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default List;
