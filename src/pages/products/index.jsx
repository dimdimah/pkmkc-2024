import { useState } from "react";
import addProduct from "@/utils/data/config";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, brand };
    const result = await addProduct(product);
    if (result) {
      alert("Product added successfully!");
    } else {
      alert("Failed to add product!");
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <label>Nama Barang:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Harga Barang:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Merek Barang:</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
