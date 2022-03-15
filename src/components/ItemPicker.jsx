import React from "react";
import ItemRow from "./ItemRow";

export default function ItemPicker({ items }) {
  return (
    <div className="item-picker h-auto">
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-blue-600 focus:ring-0 sm:text-sm h-12 pl-3"
        placeholder="Search by name or department"
        onChange={(e) => {
          // TODO
        }}
      />

      <div className="flow-root mt-8 overflow-y-auto h-96">
        <ul className="-my-5 divide-y divide-gray-200">
          {items.map((item, i) => (
            <ItemRow key={`${i}-${item.name}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
