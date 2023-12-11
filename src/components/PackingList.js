import { useState } from "react";
import Item from "./Item";

function PackingList({
  items,
  handleDeleteItem,
  handleToggleItems,
  handleClearList,
}) {

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
<>
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItems={handleToggleItems}
            key={item.id}
          />
        ))}
      </ul>
    </div>
      <div className="actions">
        <select className="actions-input" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="actions-btn" onClick={handleClearList}>Clear list</button>
      </div>
      </>
  );
}
export default PackingList;
