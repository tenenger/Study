import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState(null);

  const fetchdata = async () => {
    try {
      const url =
        "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json";
      const res = await axios.get(url);
      const { data } = res.data;
      const { people } = data;
      setUsers(people);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <button>불러오기</button>
      </div>
      {users &&
        users.map((user, idx) => {
          return (
            <div key={idx}>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
