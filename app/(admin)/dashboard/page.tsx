"use client";
import { ProductT } from "@/app/library/definitions";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

export default function Dashboard() {
  const [products, setProducts] = useState<ProductT[]>([]);
  const [loading, setLoading]=useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>{
      setProducts(data);
      setLoading(false);
    }).catch(err=>{
      console.error(err);
      setLoading(false);
    })

  }, []);
  const columns:TableColumn <ProductT>[]=[
    {
      name: "Name of Singer",
      selector: (row) => row.title,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
    },
    {
      name: "Image",
      selector: (row): any => <img className="w-11" src={row.image} alt={row.image} />,
    },
    {
      name: "Category",
      selector: (row) => row.category ,
    },
    {
      name:"Action",
      selector:(row):any=><div>
        <button className="text-white mx-2  bg-purple-700 p-3 rounded-2xl">view</button>
        <button className="text-white mx-2  bg-yellow-500 p-3 rounded-2xl">Edit</button>
        <button className="text-white mx-2  bg-red-700 p-3 rounded-2xl">Delete</button>

      </div>
    }

  ];

 

  return (
    <main className="h-screen">
      <DataTable fixedHeader progressPending={loading} columns={columns} data={products} pagination />
    </main>
  );
}
