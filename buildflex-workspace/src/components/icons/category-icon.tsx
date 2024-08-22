import React from 'react';

const CategoryIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5976 6.31641H11.2984C11.2314 6.31639 11.1658 6.3353 11.1091 6.37096C11.0524 6.40661 11.0069 6.45756 10.9779 6.51792C10.9489 6.57829 10.9376 6.64563 10.9452 6.71217C10.9528 6.77872 10.979 6.84176 11.0209 6.89404L12.5849 8.84912C12.7509 9.05752 12.9618 9.22571 13.2019 9.34113C13.442 9.45654 13.7051 9.5162 13.9715 9.51563H25.0195C25.1138 9.51563 25.2042 9.47817 25.2709 9.41151C25.3375 9.34485 25.375 9.25443 25.375 9.16016V8.09375C25.3744 7.62254 25.187 7.17079 24.8538 6.83759C24.5206 6.50439 24.0688 6.31696 23.5976 6.31641Z"
        fill="#FFB125"
      />
      <path
        d="M25.375 8.80469H13.9716C13.8119 8.80469 13.6543 8.76878 13.5104 8.69963C13.3665 8.63047 13.24 8.52984 13.1403 8.40518L11.3624 6.18275C11.13 5.89124 10.8347 5.65596 10.4986 5.49446C10.1626 5.33295 9.79441 5.24939 9.42156 5.25H4.40234C3.93096 5.25 3.47889 5.43726 3.14557 5.77058C2.81226 6.10389 2.625 6.55597 2.625 7.02735L2.625 21.2461C2.625 21.7175 2.81226 22.1696 3.14557 22.5029C3.47889 22.8362 3.93096 23.0234 4.40234 23.0234H23.5977C24.069 23.0234 24.5211 22.8362 24.8544 22.5029C25.1877 22.1696 25.375 21.7175 25.375 21.2461V8.80469Z"
        fill="#FCD354"
      />
    </svg>
  );
};

export default CategoryIcon;
