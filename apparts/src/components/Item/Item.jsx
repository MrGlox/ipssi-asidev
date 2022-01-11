import "./Item.css";

const Item = ({ title = "", status = false, children }) => {
  return (
    <div>
      <h2>
        {title}{" "}
        <span
          className={`status ${status ? "status--green" : "status--red"}`}
        ></span>
      </h2>
      <p>{children}</p>
    </div>
  );
};

export default Item;
