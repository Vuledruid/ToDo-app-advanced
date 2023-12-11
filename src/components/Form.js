import { useState } from "react";

function Form({ handleAddItems, items }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false,  id: Date.now() };

    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
    {items.length === 0  ?
      <h3 className="form-h3"> {items.length === 0 }  Add your first item to your packing trip!  </h3>
      : (
      <h3 className="form-h3"> {items.length === 0 }  Add more items to your list! </h3>

      )
    }
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
        className="form-select"
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option className="form-option" value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" 
      className="form-input"
      value={description} 
      placeholder="Add items.."
      onChange={(e) => setDescription(e.target.value)}
       />
    <button className="form-btn">Add</button>
    </form>
  );
}
export default Form;
