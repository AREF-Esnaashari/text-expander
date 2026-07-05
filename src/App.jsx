import { useState } from "react";

export default function App() {
  // Show Btn
  let [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <h1>Text expander</h1>
      <button className="btn" onClick={handleShow}>
        {show ? "-" : "+"}
      </button>
      {show && (
        <>
          <TextExpander
            expander={false}
            // personalization
            // color="sky"
            // bg="sky"
          >
            Space travel is the ultimate adventure! Imagine soaring past the
            stars and exploring new worlds. It's the stuff of dreams and science
            fiction, but believe it or not, space travel is a real thing. Humans
            and robots are constantly venturing out into the cosmos to uncover
            its secrets and push the boundaries of what's possible.
          </TextExpander>
          <TextExpander
            expander={false}
            // personalization
            // color="black"
            // bg="#e2e2e2"
            maxlength={90}
          >
            Space travel is the ultimate adventure! Imagine soaring past the
            stars and exploring new worlds. It's the stuff of dreams and science
            fiction, but believe it or not, space travel is a real thing. Humans
            and robots are constantly venturing out into the cosmos to uncover
            its secrets and push the boundaries of what's possible.
          </TextExpander>
          <TextExpander
            expander={true}
            //personalization
            //  color="red"
            //   bg="black"
              maxlength={45}
          >
            Space travel is the ultimate adventure! Imagine soaring past the
            stars and exploring new worlds. It's the stuff of dreams and science
            fiction, but believe it or not, space travel is a real thing. Humans
            and robots are constantly venturing out into the cosmos to uncover
            its secrets and push the boundaries of what's possible.
          </TextExpander>
        </>
      )}
    </>
  );
}

function TextExpander({
  children,
  color = "black",
  bg = "white",
  expander,
  maxlength = 40,
}) {
  const [expand, setExpand] = useState(expander);
  function handleToggle() {
    setExpand((prev) => !prev);
  }

  const displayText = expand ? children : children.slice(0, maxlength) + "...";

  return (
    <div className="text-box" style={{ background: bg, color }}>
      {displayText}
      <button onClick={handleToggle}>
        {expand ? "LESS WORDS" : "SHOW MORE"}
      </button>
    </div>
  );
}
