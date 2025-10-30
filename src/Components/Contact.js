import React from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigateTo = useNavigate();
  return (
    <>
      <div>
        <h3>Contact Page</h3>
        <br></br>
        <button onClick={() => navigateTo(-1)}>Go To One Step Back..</button>
      </div>
    </>
  );
}

export default Contact;
