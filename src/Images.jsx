import { useEffect, useState, useRef } from "react";
import React from "react";
import "./App.css";

function Images() {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  let ArrayImags = [
    "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    "https://t3.ftcdn.net/jpg/06/05/37/40/360_F_605374009_hEUHatmKPzuHTIacg7rLneAgnLHUgegM.jpg",
    "https://t3.ftcdn.net/jpg/07/61/66/26/360_F_761662688_PtKytZfox6XNk7bslR5ahhGswCJN5QBZ.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MO_553w_CxJTbFwvFbkPeyOMkekwDyQ2oA&s.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBcF8FkwLlemoyXAy6DPn_27PC0yF5GCoqg&s.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXVAiSRXwK_M_nc0BVI1vybBVCBE-umhWUw&s.jpg",
  ];
  const array_len = ArrayImags.length;
  const Next = () => {
    setCount((e) => {
      console.log(e);
      if (e == array_len - 1) {
        return 0;
      }
      let x = e + 1;
      console.log(x);
      return x;
    });
  };

  const Back = () => {
    if (count == 0) {
      setCount(array_len - 1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(Next, 2000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <>
      <h1>Images</h1>
      <div className=" items-center h-64 w-96  mx-auto my-1">
        <img
          className=" w-full h-full"
          onMouseEnter={() => {
            clearInterval(ref.current);
          }}
          onMouseLeave={() => {
            ref.current = setInterval(Next, 2000);
          }}
          src={ArrayImags[count]}
          alt=""
        />
      </div>
      <div>{count + 1}/6</div>
      <div className=" py-4 ">
        <button
          className=" border-emerald-500 p-2 border-2 m-5   rounded"
          onClick={Next}
        >
          NEXT
        </button>
        <button
          className=" border-emerald-500 p-2 border-2 m-5   rounded "
          onClick={Back}
        >
          BACK
        </button>
      </div>
    </>
  );
}

export default Images;
