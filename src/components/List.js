import React, { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import "../App.css";

function List() {
  let [data, setdata] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/").then(function (response) {
      setdata(response.data);
    });
  }, [data]);

  return (
    <div>
      <div className="heading2">Upcoming List</div>
      <div className="list">
        <ol>
          {data?.map((item) => (
            <li>
              {item.firstName},{dateFormat(item.birthDate, "dd-mm")}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default List;
