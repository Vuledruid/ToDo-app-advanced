function Item({ item, handleDeleteItem, handleToggleItems }) {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="btn-delete" onClick={() => handleDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
export default Item;
