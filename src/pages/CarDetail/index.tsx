import { useParams } from "react-router-dom";

export function CarDetail() {
  const { name } = useParams();
    return (
      <div>
       {name}
      </div>
    )
  }
  
  