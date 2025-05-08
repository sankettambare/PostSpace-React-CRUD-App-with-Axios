import { useEffect, useState } from "react";
import { postData, updateData } from "./Post_Api";

export const Form = ({ ApiData, setData, updateDataApi, setDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
let isEmpty = Object.keys(updateDataApi).length === 0;
  useEffect(() => {
    updateDataApi && setAddData({
      title: updateDataApi.title || "",
      body: updateDataApi.body || "",
    });
  }, [updateDataApi]);
  
  const handleinputchange = (event) => {
    const { name, value } = event.target;
    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData); // no update logic, just post
    console.log("res", res);
    if (res.status === 201) {
      setData([...ApiData, res.data]);
      setAddData({ title: "", body: "" });
    }
  };
const updatePostData = async () =>{
     const res= await updateData(updateDataApi.id,addData)
     console.log(res);
     if(res.status === 200){
     setData((prev)=>{
       return prev.map((curElem)=>{
        return curElem.id === res.data.id ? res.data : curElem;
        
       })
     })
    }

}
  const handlesubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
   
    if(action === "Add"){
        addPostData();

    }
    else if(action === "Edit"){
        updatePostData();

    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoCapitalize="off"
          id="title"
          name="title"
          value={addData.title}
          onChange={handleinputchange}
          placeholder="Enter A Title"
        />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoCapitalize="off"
          id="body"
          name="body"
          value={addData.body}
          onChange={handleinputchange}
          placeholder="Enter A Body"
        />
      </div>
      <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
    </form>
  );
};
