import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Bottle", quantity: 1, packed: true },
  { id: 5, description: "Travel Bag", quantity: 1, packed: true },
  { id: 6, description: "Power bank", quantity: 1, packed: true },
  { id: 7, description: "Wallet", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴Far Away 😎</h1>;
}

function Form(onAddItem) {
  // first step is we have to create the piece of state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);

    // handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your😍 trip</h3>
      <select>
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* second step is to add value in input */}
      <input
        type="text"
        a
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

function PackingList(items) {
  return (
    <div className="list">
      <ul>
        {items.map((it) => (
          <Item Item i_tem={it} key={Item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ i_tem }) {
  return (
    <li>
      <span style={i_tem.packed ? { textDecoration: "line-through" } : {}}>
        {i_tem.quantity} {i_tem.description}
      </span>

      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you alredy packed (X%)😊</em>
    </footer>
  );
}
