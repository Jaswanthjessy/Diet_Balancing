import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const AdminPage = () => {
  const [items, setItems] = useState([]); // Store food items
  const [open, setOpen] = useState(false); // For modal dialog
  const [newItem, setNewItem] = useState({ 
    name: '', 
    calories: '', 
    proteins: '', 
    fats: '', 
    carbs: '', 
    vitamins: '',  // Added vitamins
    minerals: ''   // Added minerals
  }); // For adding or editing items

  // Fetch items when component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items'); // Assuming this is your endpoint for items
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Handle adding or editing an item
  const handleSave = async () => {
    try {
      if (newItem.id) {
        await axios.put(`/api/items/${newItem.id}`, newItem); // Update existing item
      } else {
        await axios.post('/api/items', newItem); // Add new item
      }
      fetchItems();
      setOpen(false);
      setNewItem({ name: '', calories: '', proteins: '', fats: '', carbs: '', vitamins: '', minerals: '' }); // Reset state
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  // Handle deleting an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Open modal for adding/editing
  const handleEdit = (item = { name: '', calories: '', proteins: '', fats: '', carbs: '', vitamins: '', minerals: '' }) => {
    setNewItem(item);
    setOpen(true);
  };

  // Columns for the DataGrid
  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'calories', headerName: 'Calories (g)', width: 150 },
    { field: 'proteins', headerName: 'Proteins (g)', width: 120 },
    { field: 'fats', headerName: 'Fats (g)', width: 100 },
    { field: 'carbs', headerName: 'Carbs (g)', width: 120 },
    { field: 'vitamins', headerName: 'Vitamins (g)', width: 150 },  // Added vitamins column
    { field: 'minerals', headerName: 'Minerals (g)', width: 150 },  // Added minerals column
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <Button variant="contained" color="primary" onClick={() => handleEdit(params.row)}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.id)} style={{ marginLeft: '10px' }}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <h1>Admin Page</h1>
      <Button variant="contained" color="primary" onClick={() => handleEdit()} style={{ marginBottom: '20px' }}>
        Add Item
      </Button>
      <DataGrid rows={items} columns={columns} pageSize={5} />
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{newItem.id ? 'Edit Item' : 'Add Item'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Calories (g)"
            value={newItem.calories}
            onChange={(e) => setNewItem({ ...newItem, calories: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Proteins (g)"
            value={newItem.proteins}
            onChange={(e) => setNewItem({ ...newItem, proteins: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Fats (g)"
            value={newItem.fats}
            onChange={(e) => setNewItem({ ...newItem, fats: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Carbohydrates (g)"
            value={newItem.carbs}
            onChange={(e) => setNewItem({ ...newItem, carbs: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Vitamins"
            value={newItem.vitamins}
            onChange={(e) => setNewItem({ ...newItem, vitamins: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Minerals"
            value={newItem.minerals}
            onChange={(e) => setNewItem({ ...newItem, minerals: e.target.value })}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminPage;
