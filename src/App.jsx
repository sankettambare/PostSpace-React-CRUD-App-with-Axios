import { useState,useEffect } from "react";
import { getPost } from "./Axios_Api/Post_Api";
import { CardPost } from "./Axios_Api/CardPost";
import {Form} from "./Axios_Api/Form";


export const App = () => {
  const [ApiData, setData] = useState([]);
  const [updateDataApi ,setDataApi] = useState({})


  const getPostData = async () => {
    const res = await getPost();
    
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
     <h1>React JS CRUD Operation</h1>
     <div className="section-form">
     <Form ApiData={ApiData}
            setData={setData}
            updateDataApi={updateDataApi}
            setDataApi={setDataApi}

            
            />
    </div>
     
      <ul>
        {ApiData.map((currData) => (
          <CardPost
            key={currData.id}
            PostData={currData}
            ApiData={ApiData}
            setData={setData}
            updateDataApi={updateDataApi}
            setDataApi={setDataApi}

          />
        ))}
      </ul>
    </>
  );
};
