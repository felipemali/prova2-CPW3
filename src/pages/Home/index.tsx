import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { userr } = useContext(UserContext);
  console.log(userr);

  return (
    <div style={{ margin: "0 0 0 1rem" }}>
      <h1>{`Seja bem vindo ${userr.displayName}!`}</h1>
      {userr.photoURL && (
        <img width={200} height={150} src={userr.photoURL} alt="" />
      )}
      <p>
        Clique <Link to="/logout">aqui</Link> para sair
      </p>
    </div>
  );
};

export default Home;
