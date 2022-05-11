import './App.css';
import List from './List';
import { useState } from 'react';

function App() {
  const [page, change] = useState(0);
  const [data] = useState([
    { name: 'item1', hidden: true },
    { name: 'item2', hidden: false },
  ]);

  return (
    <div>
      <List
        page={page}
        data={data}
        setData={() => {
          data.push({ name: 'item3', hidden: true });
          change((p) => p + 1);
        }}
      />
    </div>
  );
}

export default App;
