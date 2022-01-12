import { useParams } from "react-router-dom";
import { lowerSlugify } from "utils";
import data from "../data";

const Apparts = () => {
  const {
    // id,
    slug,
  } = useParams();

  // const { title, status, children } = data.find(
  //   (element) => element.id === Number(id)
  // );

  const { title, status, children } = data.find(
    ({ title }) => lowerSlugify(title) === slug
  );

  return (
    <>
      <h1>Détail appart</h1>
      <h2>
        {title}{" "}
        <span
          className={`status ${status ? "status--green" : "status--red"}`}
        ></span>
      </h2>
      <p>{children}</p>
    </>
  );
};

export default Apparts;
