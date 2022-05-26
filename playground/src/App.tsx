

import { Cat } from "./interfaces";
import {useState} from "react";

export default function App() {
  
  const [animal, jumpAnimal] = useState< Cat | null > (null);

  const fetchCat = () =>
    jumpAnimal({
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
      
      {animal && <p>Welcome {animal.name}</p>} 

      </div>
    </>
  );
}

