"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="titillium-web-regular">
      <h1 className="fade-in-up">Hello! Welcome to my website.</h1>  
      <p className="fade-in-up" style={{ animationDelay: '0.5s' }}>Lorem ipsum dolor sit amet.</p>

      <div className="curved-box titillium-web-regular" style={{ marginBottom: "24px" }}>
        <h2>About Me</h2>
        <p>I am a 16-year-old person who does coding (wow, very original)</p>
      </div>

      <div className="curved-box titillium-web-regular" style={{ marginBottom: "24px" }}>
        <h2>Projects</h2>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>sit</li>
          <li>amet</li>
        </ul>
      </div>

      <div className="curved-box titillium-web-regular" style={{ marginBottom: "24px" }}>
        <h2>Contact</h2>
        <p>123-123-4567</p>
        <button className="titillium-web-regular" onClick={() => alert("hi")}>
          Click me
        </button>
      </div>
    </div>
  );
}