import { SVGProps } from 'react';

const JavaScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    className="icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      d="M0 0v1024h1024V0H0zm556.8 798.4c0 99.2-59.2 145.6-144 145.6-76.8 0-121.6-40-144-88l78.4-48c14.4 27.2 28.8 49.6 62.4 49.6 32 0 51.2-12.8 51.2-60.8V470.4h96v328zM785.6 944c-89.6 0-147.2-43.2-176-97.6L688 800c20.8 33.6 48 59.2 94.4 59.2 40 0 65.6-19.2 65.6-48 0-33.6-25.6-44.8-70.4-64l-24-9.6c-68.8-28.8-115.2-67.2-115.2-145.6 0-72 54.4-126.4 140.8-126.4 60.8 0 105.6 20.8 136 76.8l-75.2 48c-16-28.8-33.6-41.6-62.4-41.6-28.8 0-46.4 17.6-46.4 41.6 0 28.8 17.6 40 59.2 59.2l24 9.6c81.6 35.2 128 70.4 128 152C944 896 876.8 944 785.6 944z"
      fill="currentColor"
    />
  </svg>
);
export default JavaScriptIcon;
