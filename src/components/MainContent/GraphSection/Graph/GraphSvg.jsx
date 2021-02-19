import React from 'react';

const GraphSvg = (props) => {
  return (
    <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="110" x2="210" y2="110" stroke="black"/>

      <line x1="110" y1="10" x2="110" y2="210" stroke="black"/>


      <polygon points="179.661 109.554 110.595 109.554 110.595 72.554" fill="#A4FFFF" id="svg_5"/>
      <polygon points="42.554 42.405 42.554 109.405 109.554 109.405 109.554 42.405" fill="#A4FFFF" id="svg_6"/>
      <path fill="#A4FFFF"
            transform="matrix(0.297587, 0, 0, 0.297587, -12.903485, 17.599195)"
            d="M 411 534.784 A 221.784 221.784 0 0 1 189.216 313 L 411 313 Z"
            data-bx-shape="pie 411 313 0 221.784 180 270 1@b4b1a1eb"/>

      <line x1="43" y1="105" x2="43" y2="115" stroke="black"/>
      <text x={43 - (-props.rValue).toString().length * 3} y="100" fontSize="14">{-props.rValue}</text>

      <line x1="76" y1="105" x2="76" y2="115" stroke="black"/>
      <text x={76 - (-props.rValue / 2).toString().length * 3} y="100" fontSize="14">{-props.rValue / 2}</text>

      <line x1="143" y1="105" x2="143" y2="115" stroke="black"/>
      <text x={143 - (props.rValue / 2).toString().length * 3} y="100" fontSize="14">{props.rValue / 2}</text>

      <line x1="176" y1="105" x2="176" y2="115" stroke="black"/>
      <text x={176 - props.rValue.toString().length * 3} y="100" fontSize="14">{props.rValue}</text>

      <line x1="105" y1="176" x2="115" y2="176" stroke="black"/>
      <text x="120" y="181" fontSize="14">{-props.rValue}</text>

      <line x1="105" y1="143" x2="115" y2="143" stroke="black"/>
      <text x="120" y="148" fontSize="14">{-props.rValue / 2}</text>

      <line x1="105" y1="76" x2="115" y2="76" stroke="black"/>
      <text x="120" y="81" fontSize="14">{props.rValue / 2}</text>

      <line x1="105" y1="43" x2="115" y2="43" stroke="black"/>
      <text x="120" y="48" fontSize="14">{props.rValue}</text>
    </svg>
  );
}

export default GraphSvg;
