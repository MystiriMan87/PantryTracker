// components/AddItemForm.js
import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const AddItemForm = ({ editItem }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (editItem) {
      setItemName(editItem.name);
      setQuantity(editItem.quantity);
    }
  }, [editItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editItem) {
      const itemRef = doc(db, 'pantry', editItem.id);
      await updateDoc(itemRef, { name: itemName, quantity });
    } else {
      await addDoc(collection(db, 'pantry'), { name: itemName, quantity });
    }
    setItemName('');
    setQuantity('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        {editItem ? 'Update Item' : 'Add Item'}
      </Button>
    </Box>
  );
};

export default AddItemForm;
