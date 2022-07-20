import { useParams } from "react-router-dom";

const List = () => {
  const { type } = useParams();
  return (
    <>
      <h1 style={{ color: "#000" }}>{type}</h1>
    </>
  );
};

export default List;
