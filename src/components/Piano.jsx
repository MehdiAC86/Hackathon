import React from "react";
import "./piano.css"
export default function Piano() {
  return (
    <>
    
    <header>
    <div className="container"></div>
      
      <div className="column volume">
        <span>Volume</span>
        <input type="range" min="0" max="1" value="0.5" step="any" />
      </div>
      </header>
      <div>
      <ul className="liste-notes">
        <li className="note white" data-key="a">
          <span>a</span>
        </li>
        <li className="note black" data-key="z">
          <span>z</span>
        </li>
        <li className="note white" data-key="e">
          <span>e</span>
        </li>
        <li className="note black" data-key="r">
          <span>r</span>
        </li>
        <li className="note white" data-key="t">
          <span>t</span>
        </li>
        <li className="note black" data-key="y">
          <span>y</span>
        </li>
        <li className="note white" data-key="u">
          <span>u</span>
        </li>
        <li className="note black" data-key="i">
          <span>i</span>
        </li>
        <li className="note white" data-key="o">
          <span>o</span>
        </li>
        <li className="note black" data-key="p">
          <span>p</span>
        </li>
        <li className="note white" data-key="q">
          <span>q</span>
        </li>
        <li className="note black" data-key="s">
          <span>s</span>
        </li>
        <li className="note white" data-key="d">
          <span>d</span>
        </li>
        <li className="note black" data-key="f">
          <span>f</span>
        </li>
        <li className="note white" data-key="g">
          <span>g</span>
        </li>
        <li className="note black" data-key="h">
          <span>h</span>
        </li>
        <li className="note white" data-key="j">
         <span>j</span>
        </li>
      </ul>
      </div>
    </>
  );
}
