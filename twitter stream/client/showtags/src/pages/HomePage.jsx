import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("http://localhost:8080/").then((res) => {
      console.log("res:", res.data.data);
      setData(res.data.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data?.map((el) => {
        return (
          <div key={el.id} style={{ borderBottom: "1px solid black" }}>
            {el.text}
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
