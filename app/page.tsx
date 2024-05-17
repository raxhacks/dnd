"use client"
import { useState } from "react";
import { Reorder } from "framer-motion";

export default function Home() {
  const [items, setItems] = useState([1,2,3,4,5]);
  return (
    <div className="w-screen h-screen
    inline-flex flex-col justify-center items-center">
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item value={item} key={item}>
            <div className="border text-white p-10
            w-64">
              Item {item}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
