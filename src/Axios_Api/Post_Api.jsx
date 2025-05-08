
import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = () => {
  return Api.get("/posts");
};
export const deletePost = (id) =>{
    return Api.delete(`/posts/${id}`);
}
export const postData = (post)=>{
  return Api.post(`/posts`,post)
}
export const  updateData = (id,post)=>{
  return Api.put(`/posts/${id}`,post)
}