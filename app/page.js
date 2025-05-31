"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Hello! Welcome to my website.</h1>  
      <p>Lorem ipsum dolor sit amet.</p>

      <div style={{
        border: "1px solid #ccc",
        borderRadius: "16px",
        padding: "16px",
        marginTop: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "'WDXL Lubrifont TC', sans-serif"
      }}>
        <h2>About Me</h2>
        <p>I am a person who does coding (wow, very original)</p>
      </div>

      <div className="curved-box titillium-web-regular">
        <h2>Projects</h2>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>sit</li>
          <li>amet</li>
        </ul>
      </div>

      <div className="curved-box titillium-web-regular">
        <h2>Contact</h2>
        <p>123-123-4567</p>
        <button className="titillium-web-regular" onClick={() => alert("hi")}>
          Click me
        </button>
      </div>
    </div>
  );
}