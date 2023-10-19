import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

export const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">AddItem</label>
      <input
        autoFocus
        id="addItem"
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e)=>{
          setNewItem(e.target.value);
        }}
      />
      <button 
        type="submit" 
        aria-label="Add Item"
        onClick={()=> inputRef.current.focus()}
        >
        <FaPlus />
      </button>
    </form>
  );
};
