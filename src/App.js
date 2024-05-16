
//import './App.css';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'cativity'));
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(items);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Firestore Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;