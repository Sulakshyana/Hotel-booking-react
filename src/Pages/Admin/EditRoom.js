import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditRoom = () => {
  const [formData, setFormData] = useState({
    roomname: '',
    room_qnty: 1,
    no_bed: 1,
    bedtype: 'single',
    facility: '',
    price: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/getRoomCategory.php?roomname=${formData.roomname}`);
      const data = response.data;

      if (data.success) {
        setFormData({
          roomname: data.roomname,
          room_qnty: data.room_qnty,
          no_bed: data.no_bed,
          bedtype: data.bedtype,
          facility: data.facility,
          price: data.price,
        });
      } else {
        console.error('Error fetching room data:', data.error);
      }
    } catch (error) {
      console.error('Error fetching room data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/updateRoomCategory.php', formData);

      const data = response.data;

      if (data.success) {
        console.log('Room category updated successfully');
      } else {
        console.error('Error updating room category:', data.error);
      }
    } catch (error) {
      console.error('Error updating room category:', error);
    }
  };

  return (
    <div className="container">
      <div className="well">
        <h2>Edit Room Category</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <button type="submit" className="btn btn-lg btn-primary button" name="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRoom;
