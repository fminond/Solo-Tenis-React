export const ItemCount = ({ count, handleCount }) => {
  return (
    <div className="rounded">
      <button
        onClick={() => handleCount("minus")}
      >
        -
      </button>
      <span className="mx-4">
        {count}
      </span>
      <button
        onClick={() => handleCount("plus")}
      >
        +
      </button>
    </div>
  );
};