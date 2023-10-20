import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, ediTodo } from "./redux/todos";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SaveIcon from "@mui/icons-material/Save";
const ProductList = () => {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState("");
  const [idx, setIdx] = useState(null);
  ///  Accessing state from store
  const { data } = useSelector((state) => state.data);

  ///  Dispatching actions from store
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleChangs = (e) => {
    setEdit(e.target.value);
  };

  /// Add new TODO

  const handlesubmit = () => {
    if (text === "") {
      alert("TODO can't be empty");
    } else {
      dispatch(addTodo(text));
      setText("");
    }
    console.log(text);
    console.log(data);
  };

  const idHandler = (id) => {
    setIdx(id);
  };

  /// Editing Todo
  const handleEdit = (id) => {
    dispatch(ediTodo({ id: id, todo: edit }));
    setIdx(null);
  };
  console.log(text);

  return (
    <div className="w-3/12 h-2/4 bg-violet-700 rounded-2xl p-2 flex justify-evenly flex-wrap">
      <input
        className="w-9/12 h-6 rounded-2xl border-none outline-none px-2"
        name="todo"
        value={text ? text : ""}
        onChange={handleChange}
      />
      <button
        className="bg-red-600 hover:bg-blue-300 h-6 w-10 rounded-md text-white flex justify-center"
        onClick={handlesubmit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div className="bg-inherit w-full h-3/4 ">
        {data.map((item, id) => {
          return (
            <div key={id} className="flex my-2 ">
              {idx !== item.id ? (
                <>
                  <span className="w-9/12 bg-pink-900 rounded-md px-2 text-white">
                    {item.todo}
                  </span>
                  <button
                    className="bg-blue-700 hover:bg-blue-300 h-6 w-10 rounded-full text-white flex justify-center"
                    onClick={() => idHandler(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="w-9/12 h-6 rounded-2xl border-none outline-none px-2"
                    type="text"
                    defaultValue={item.todo}
                    onChange={handleChangs}

                    // disabled={isEdit}
                  />
                  <button
                    className="bg-green-600 hover:bg-blue-300 h-6 w-10 rounded-full text-white flex justify-center"
                    onClick={() => handleEdit(item.id)}
                  >
                    <SaveIcon />
                  </button>
                </>
              )}

              <button
                className="bg-red-600 hover:bg-blue-300 h-6 w-10 rounded-md text-white flex justify-center"
                /// Deleting Todo
                onClick={() => dispatch(delTodo(item.id))}
              >
                <DeleteForeverIcon />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
