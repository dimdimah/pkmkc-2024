import supabase from "./index";

const addProduct = async (barang) => {
  try {
    const { data, error } = await supabase.from("barang").insert([barang]);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default addProduct;
