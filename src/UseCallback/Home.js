import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [increment, setincrement] = useState(12);
  const [decrement, setdecrement] = useState(34);

  const incrementFunction = useCallback(() => {
    //usecallback
    setincrement(increment + 1);
  }, [increment]);
  const decrementFunction = useCallback(() => {
    setdecrement(decrement - 1);
  }, [decrement]);
  return (
    <>
      <Title />
      <Count text="incNo" count={increment} />
      <Button handleClick={incrementFunction}>increment the no</Button>
      <Count text="decNo" count={decrement} />
      <Button handleClick={decrementFunction}>decrement the no</Button>
    </>
  );
}

export default Home;
