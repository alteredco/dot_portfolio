import React from "react";

function ProjectBtn4(props) {
  return (
    <button className="Project-link" onClick={props.click}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="95"
      height="94"
      fill="none"
      viewBox="0 0 95 94"
    >
      <g filter="url(#filter0_d)">
        <path fill="#FF56D0" d="M0 0H86V86H0z"></path>
        <circle cx="43.5" cy="43.5" r="30.5" fill="#fff"></circle>
        <path
          fill="#FF56D0"
          d="M31.908 55.36c-1.536 0-2.916-.264-4.14-.792-1.224-.528-2.268-1.236-3.132-2.124a9.818 9.818 0 01-1.944-3.132 10.166 10.166 0 01-.684-3.708c0-1.32.228-2.568.684-3.744a9.402 9.402 0 011.944-3.096c.864-.912 1.908-1.632 3.132-2.16 1.224-.528 2.604-.792 4.14-.792 1.536 0 2.904.264 4.104.792 1.224.528 2.256 1.248 3.096 2.16a9.117 9.117 0 011.98 3.096c.456 1.176.684 2.424.684 3.744 0 1.296-.228 2.532-.684 3.708a9.818 9.818 0 01-1.944 3.132c-.84.888-1.872 1.596-3.096 2.124s-2.604.792-4.14.792zm-4.932-9.756c0 .84.12 1.608.36 2.304.264.672.612 1.26 1.044 1.764.456.504.984.9 1.584 1.188.6.264 1.248.396 1.944.396s1.344-.132 1.944-.396a4.69 4.69 0 001.548-1.188 5.148 5.148 0 001.044-1.8c.264-.696.396-1.464.396-2.304 0-.816-.132-1.572-.396-2.268a5.148 5.148 0 00-1.044-1.8 4.293 4.293 0 00-1.548-1.152 4.434 4.434 0 00-1.944-.432c-.696 0-1.344.144-1.944.432a5.09 5.09 0 00-1.584 1.188 6.013 6.013 0 00-1.044 1.8 6.914 6.914 0 00-.36 2.268zm27.088 13.968v-5.364H43.552v-4.284l12.06-15.48h3.276v15.444h3.168v4.32h-3.168v5.364h-4.824zm-5.688-9.684h6.228v-8.136l-6.228 8.136z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="95"
          height="94"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="5" dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.890196 0 0 0 0 0.755608 0 0 0 0 0.278431 0 0 0 0.3 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
    </button>
  );
}

export default ProjectBtn4;