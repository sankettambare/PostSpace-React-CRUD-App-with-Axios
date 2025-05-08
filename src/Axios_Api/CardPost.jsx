import React from 'react';
import "./Card.css"; 
import { deletePost } from './Post_Api'; 

export const CardPost = ({ PostData, ApiData, setData, setDataApi, updateDataApi }) => {
  const { body, id, title } = PostData;

  const handleDeleteButton = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);
      if (res.status === 200) {
        const newUpdateData = ApiData.filter((currdata) => currdata.id !== id);
        setData(newUpdateData); 
      } else {
        console.log("Failed to delete post", res.status);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const HandleUpdatePost = (PostData) => {
    setDataApi(PostData); // Assuming you want to send this data for editing
  };

  return (
    <ul className="MainSection">
      <li>
        <p>{id}.</p>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Body:</strong> {body}</p>
        <button onClick={() => HandleUpdatePost(PostData)}>Edit</button>
        <button className='DeleteButton' onClick={() => handleDeleteButton(id)}>Delete</button>
      </li>
    </ul>
  );
};
