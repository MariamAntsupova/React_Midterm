import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
function App() {
  const [users, setUsers] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=8"
      );
      setUsers({ hits: data });
    };
    fetchData();
  }, [setUsers]);

  const title = users.hits.map((item2) => (item2 = item2.type));
  const text = users.hits.map((item1) => (item1 = item1.text));


  
  return (
    <>
      <div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {title && text.map((item) => <BlogItem text={item} title={item} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;