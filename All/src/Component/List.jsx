import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function List() {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://65e2ad7fa8583365b318673b.mockapi.io/crud/crud');
      setData(response.data);
    } catch (error) {
      alert("error :", error);
    }
  };

  const handleDelete = (id) => {
    const conf = window.confirm("Are you sure you want to delete this item?");
    if (conf) {
      axios.delete(`https://65e2ad7fa8583365b318673b.mockapi.io/crud/crud/${id}`)
        .then(() => {
          fetchData();
          alert("delete");
        })
    }
  };

  const handleEdit = async (id) => {
    const newData = [...data];
    const index = newData.findIndex(item => item.id === id);
    if (index !== -1) {
      try {
        await axios.put(`https://65e2ad7fa8583365b318673b.mockapi.io/crud/crud/${id}`, {
          name: editedName,
          email: editedEmail
        });
        fetchData();
        setEditingId(null);
        setEditedName('');
        setEditedEmail('');
        alert("Edit successful");
      } catch (error) {
        console.error("Error editing data:", error);
        alert("Error editing data");
      }
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <button className='btn btn-sm btn-success' onClick={() => handleEdit(item.id)}>Save</button>
                ) : (
                  <>
                    <button className='btn btn-sm btn-primary' onClick={() => {
                      setEditingId(item.id);
                      setEditedName(item.name);
                      setEditedEmail(item.email);
                    }}>Edit</button>
                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
