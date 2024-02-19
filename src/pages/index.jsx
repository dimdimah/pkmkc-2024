import { useEffect, useState } from "react";
import supabase from "@/utils/data";
import Layout from "@/components/layout";
import Button from "@/components/button";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase.from("barang").select("*");
    setProducts(data);
    console.log(data);
  }
  return (
    <Layout>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between py-4 mx-2 text-sm text-center text-slate-800"
        >
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.created_at}</p>
        </div>
      ))}
      <Button label="Test Button" link="/" />
    </Layout>
  );
};

export default Index;
