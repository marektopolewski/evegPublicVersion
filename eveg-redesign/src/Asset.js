import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

const LogoNav = () => <Link to="/" className="logo-nav">
<svg
  width="46px"
  height="40px"
  viewBox="0 0 46 40"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
  <path
    d="M44.705 19.321c-.817-.083-1.63-.11-2.436-.093-.31-2.266-1.38-4.353-3.031-5.845v-.043c0-5.208-4.003-9.446-8.922-9.446h-.094C28.552 1.472 25.862 0 23.003 0c-2.864 0-5.555 1.471-7.22 3.895h-.092c-4.922 0-8.927 4.237-8.927 9.445v.043c-1.652 1.492-2.722 3.578-3.032 5.845-.806-.017-1.619.01-2.436.093-.768.079-1.339.765-1.293 1.556.163 2.843.86 5.55 2.072 8.044a19.923 19.923 0 0 0 4.757 6.273 19.2 19.2 0 0 0 6.746 3.874c.146.047.293.07.438.07.609 0 1.174-.4 1.37-1.027a1.5 1.5 0 0 0-.44-1.574 1.423 1.423 0 0 0-.492-.28 16.352 16.352 0 0 1-5.748-3.3 16.998 16.998 0 0 1-4.058-5.353 17.889 17.889 0 0 1-1.634-5.432 16.212 16.212 0 0 1 5.428.814 16.357 16.357 0 0 1 5.748 3.3 16.852 16.852 0 0 1 2.003 2.124c.284 1.68.774 3.308 1.456 4.852a20.69 20.69 0 0 0 4.35 6.322 1.413 1.413 0 0 0 2 0 20.68 20.68 0 0 0 4.352-6.322 20.44 20.44 0 0 0 1.455-4.852 16.882 16.882 0 0 1 2.004-2.125 16.358 16.358 0 0 1 11.176-4.114 17.917 17.917 0 0 1-1.633 5.433c-1 2.059-2.366 3.86-4.059 5.353a16.346 16.346 0 0 1-5.748 3.299 1.423 1.423 0 0 0-.491.28 1.5 1.5 0 0 0-.44 1.575c.195.627.76 1.027 1.369 1.027.145 0 .292-.024.438-.07a19.196 19.196 0 0 0 6.747-3.874 19.924 19.924 0 0 0 4.757-6.274 21.09 21.09 0 0 0 2.071-8.043c.046-.792-.524-1.477-1.292-1.556zm-25.934 5.6c0-4.244 1.492-8.262 4.23-11.464a17.541 17.541 0 0 1 4.229 11.465A17.54 17.54 0 0 1 23 36.387a17.544 17.544 0 0 1-4.229-11.465zm11.31-.995c-.244-5.168-2.38-9.988-6.08-13.667a1.41 1.41 0 0 0-2 0c-3.7 3.679-5.837 8.5-6.08 13.667a19.163 19.163 0 0 0-6.602-3.751c-.893-.294-1.801-.516-2.72-.674.265-1.702 1.146-3.243 2.483-4.248.406-.306.627-.806.583-1.32a6.873 6.873 0 0 1-.026-.593c0-3.582 2.715-6.495 6.052-6.495.234 0 .465.014.685.04a1.422 1.422 0 0 0 1.419-.741c1.082-1.97 3.077-3.193 5.208-3.193 2.127 0 4.123 1.224 5.21 3.195.285.516.84.807 1.415.74.23-.028.455-.041.688-.041 3.334 0 6.047 2.913 6.047 6.495 0 .2-.009.395-.026.59a1.49 1.49 0 0 0 .582 1.323c1.338 1.006 2.219 2.546 2.484 4.248-.92.16-1.827.38-2.72.674a19.183 19.183 0 0 0-6.602 3.751z"
    fillRule="nonzero"
    fill="#538EFF"
  />
</svg>

  <p>eVeg</p>
</Link>

const LogoFooter = () => <svg
  width="136px"
  height="40px"
  viewBox="0 0 136 40"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
  <g
    transform="translate(-652.000000, -1681.000000) translate(0.000000, 1563.000000) translate(520.000000, 106.000000) translate(132.000000, 0.000000)"
    fill="#7F828D"
    stroke="none"
    strokeWidth={1}
    fillRule="evenodd"
  >
    <text
      fontFamily="OpenSans-Semibold, Open Sans"
      fontSize={24}
      fontWeight={500}
      line-spacing={57}
    >
      <tspan x={81} y={26}>
        eVeg
      </tspan>
    </text>
    <path
      d="M44.705 31.321c-.817-.083-1.63-.11-2.436-.093-.31-2.266-1.38-4.353-3.031-5.845v-.043c0-5.208-4.003-9.446-8.922-9.446h-.094C28.552 13.472 25.862 12 23.003 12c-2.864 0-5.555 1.471-7.22 3.895h-.092c-4.922 0-8.927 4.237-8.927 9.445v.043c-1.652 1.492-2.722 3.578-3.032 5.845-.806-.017-1.619.01-2.436.093-.768.079-1.339.765-1.293 1.556.163 2.843.86 5.55 2.072 8.044a19.923 19.923 0 0 0 4.757 6.273 19.2 19.2 0 0 0 6.746 3.874c.146.047.293.07.438.07.609 0 1.174-.4 1.37-1.027a1.5 1.5 0 0 0-.44-1.574 1.423 1.423 0 0 0-.492-.28 16.352 16.352 0 0 1-5.748-3.3 16.998 16.998 0 0 1-4.058-5.353 17.889 17.889 0 0 1-1.634-5.432 16.212 16.212 0 0 1 5.428.814 16.357 16.357 0 0 1 5.748 3.3 16.852 16.852 0 0 1 2.003 2.124c.284 1.68.774 3.308 1.456 4.852a20.69 20.69 0 0 0 4.35 6.322 1.413 1.413 0 0 0 2 0 20.68 20.68 0 0 0 4.352-6.322 20.44 20.44 0 0 0 1.455-4.852 16.882 16.882 0 0 1 2.004-2.125 16.358 16.358 0 0 1 11.176-4.114 17.917 17.917 0 0 1-1.633 5.433c-1 2.059-2.366 3.86-4.059 5.353a16.346 16.346 0 0 1-5.748 3.299 1.423 1.423 0 0 0-.491.28 1.5 1.5 0 0 0-.44 1.575c.195.627.76 1.027 1.369 1.027.145 0 .292-.024.438-.07a19.196 19.196 0 0 0 6.747-3.874 19.924 19.924 0 0 0 4.757-6.274 21.09 21.09 0 0 0 2.071-8.043c.046-.792-.524-1.477-1.292-1.556zm-25.934 5.6c0-4.244 1.492-8.262 4.23-11.464a17.541 17.541 0 0 1 4.229 11.465A17.54 17.54 0 0 1 23 48.387a17.544 17.544 0 0 1-4.229-11.465zm11.31-.995c-.244-5.168-2.38-9.988-6.08-13.667a1.41 1.41 0 0 0-2 0c-3.7 3.679-5.837 8.5-6.08 13.667a19.163 19.163 0 0 0-6.602-3.751c-.893-.294-1.801-.516-2.72-.674.265-1.702 1.146-3.243 2.483-4.248.406-.306.627-.806.583-1.32a6.873 6.873 0 0 1-.026-.593c0-3.582 2.715-6.495 6.052-6.495.234 0 .465.014.685.04a1.422 1.422 0 0 0 1.419-.741c1.082-1.97 3.077-3.193 5.208-3.193 2.127 0 4.123 1.224 5.21 3.195.285.516.84.807 1.415.74.23-.028.455-.041.688-.041 3.334 0 6.047 2.913 6.047 6.495 0 .2-.009.395-.026.59a1.49 1.49 0 0 0 .582 1.323c1.338 1.006 2.219 2.546 2.484 4.248-.92.16-1.827.38-2.72.674a19.183 19.183 0 0 0-6.602 3.751z"
      fillRule="nonzero"
    />
  </g>
</svg>

const CartIconNav = (props) => <svg
  {...props}
  width="30px"
  height="29px"
  viewBox="0 0 30 29"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
  <path
    d="M24.029 22.957c.815 0 1.51.3 2.086.9.576.599.863 1.306.863 2.121 0 .816-.287 1.511-.863 2.087a2.842 2.842 0 0 1-2.086.863c-.816 0-1.523-.288-2.123-.863-.6-.576-.899-1.271-.899-2.087 0-.815.3-1.522.9-2.122.599-.6 1.306-.9 2.122-.9zM0 0h4.928l1.403 2.95h22.194c.408 0 .756.15 1.043.45.288.299.432.665.432 1.096 0 .264-.072.492-.216.684l-5.324 9.712a3.15 3.15 0 0 1-1.097 1.115 2.862 2.862 0 0 1-1.528.432H10.683l-1.33 2.446-.072.216c0 .096.036.18.107.252a.345.345 0 0 0 .252.107h17.338v3.022H8.993c-.816 0-1.511-.3-2.087-.9-.575-.599-.863-1.306-.863-2.122 0-.455.12-.923.36-1.402l2.014-3.741L3.022 2.95H0V0zm8.993 22.957c.815 0 1.523.3 2.122.9.6.599.9 1.306.9 2.121 0 .816-.3 1.511-.9 2.087-.6.575-1.307.863-2.122.863-.816 0-1.511-.288-2.087-.863a2.842 2.842 0 0 1-.863-2.087c0-.815.288-1.522.863-2.122.576-.6 1.271-.9 2.087-.9z"
    fill="#538EFF"
    fillRule="evenodd"
  />
</svg>

export {LogoNav, LogoFooter, CartIconNav};
