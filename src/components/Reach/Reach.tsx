import "./Reach.css";

function Reach() {
  return (
    <div id="reach-wrapper">
      <div id="reach-doodle-line" />
      <h1>Let's solve together!</h1>
      <div
        id="reach-action"
        onClick={() =>
          (window.location.href = "mailto:dion.08osmani@gmail.com")
        }
      >
        <h2>Get in touch</h2>
      </div>
    </div>
  );
}

export default Reach;
