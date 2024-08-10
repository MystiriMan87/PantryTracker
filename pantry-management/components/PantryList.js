// components/PantryList.js
import { useEffect, useState } from 'react';
import { collection, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const PantryList = ({ setEditItem, searchQuery }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'pantry'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setItems(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'pantry', id));
  };

  return (
    <List>
      {filteredItems.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
          <Button onClick={() => setEditItem(item)}>Edit</Button>
          <Button onClick={() => handleDelete(item.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default PantryList;
