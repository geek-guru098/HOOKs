import React, { useState } from "react";
import { useEffect } from "react";

function Useefct() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 1000); //1sec=1000  if the count goes on skipping then remove strict  mode from main.jsx
  }, [count]); // [empty_array]functional will exexute for only once
  return (
    <>
      <h1 className=" text-4xl text-black font-bold mx-auto w-1/5">
        Rendered {count} times
      </h1>
    </>
  );
}

export default Useefct;
// useeffcet without dependencies.
