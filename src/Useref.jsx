import React, { useEffect, useRef, useState } from "react";

function Useref() {
  const [value, setvalue] = useState(0);
  const count = useRef(0);
  console.log(count);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div className=" text-center  border-x-slate-600 text-wrap w-1/6 mx-auto  text-3xl  font-bold  my-auto">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-s-md"
          onClick={() => {
            if (value > 0) {
              setvalue(value - 1);
            }
          }}
        >
          -1
        </button>
        <h1> {value}</h1>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-s-md"
          onClick={() => {
            if (value < 20) {
              setvalue(value + 1);
            }
          }}
        >
          {" "}
          +1
        </button>
        <h1> render count :{count.current}</h1>
      </div>
    </>
  );
}

export default Useref;
// useref is used when we dont wann to rerender component when the value is changed
