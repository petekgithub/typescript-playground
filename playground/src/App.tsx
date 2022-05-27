

import { Cat } from "./interfaces";
import {useState} from "react";

export default function App() {
  
  const [cat, setCat] = useState<Cat | null>(null);

  const fetchCat = () =>
    setCat({
      name: "Ciguli",
      age: 12,
      sex: "male",
      toys: {
        color: "blue",
        material: "wood"
      }
    });

  return (
    <>
      <div className="catty">
        <button className="btn" onClick={fetchCat}>Call Cat</button>
      
      {cat && <p>Welcome {cat.name}</p>} 

      </div>
    </>
  );
}

