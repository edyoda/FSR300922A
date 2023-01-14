import React, { useRef } from "react";
import "./container.css";

const Container = (props) => {
  const ref = useRef();
  const headingref = useRef();

  const { children, heading, headingComponent } = props;

  const onButtonClick = () => {
    const ele = ref.current;
    ele.style.backgroundColor = "red";
  };
  return (
    <div ref={ref} className="custom-container">
      <button onClick={onButtonClick}>Change Color</button>
      {heading && <h1 ref={headingref}>{heading}</h1>}
      {headingComponent}
      {children}
    </div>
  );
};

export default Container;
