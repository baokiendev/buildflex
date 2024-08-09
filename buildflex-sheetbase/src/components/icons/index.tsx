import React from 'react';
interface IconProps {
  className?: string;
  color?: string;
}
// below icons is not supported by iconsax-react


export const ArrowRotate = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.07355 3.38664C6.65355 3.21331 7.29355 3.09998 8.00021 3.09998C11.1935 3.09998 13.7802 5.68664 13.7802 8.87998C13.7802 12.0733 11.1935 14.66 8.00021 14.66C4.80688 14.66 2.22021 12.0733 2.22021 8.87998C2.22021 7.69331 2.58021 6.58664 3.19355 5.66664"
        stroke="#087AAF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.24658 3.54671L7.17325 1.33337"
        stroke="#087AAF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.24658 3.54663L7.49325 5.18663"
        stroke="#087AAF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const LaptopIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10942_21619)">
        <path
          d="M13.3337 9.66669V4.33335C13.3337 3.07627 13.3337 2.44774 12.9431 2.05721C12.5526 1.66669 11.9241 1.66669 10.667 1.66669H5.33366C4.07658 1.66669 3.44804 1.66669 3.05752 2.05721C2.66699 2.44774 2.66699 3.07628 2.66699 4.33335V9.66669"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 3.66669H8.00599"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.33191 10.3436L2.67985 9.66669H13.3014L13.6684 10.3436C14.6303 12.118 14.8699 13.0052 14.5043 13.6693C14.1386 14.3334 13.1692 14.3334 11.2304 14.3334L4.76991 14.3334C2.83111 14.3334 1.8617 14.3334 1.49608 13.6693C1.13045 13.0052 1.36999 12.118 2.33191 10.3436Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10942_21619">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const CollapseIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.9875 15.8332C10.153 15.8342 10.3151 15.7858 10.453 15.6943C10.5909 15.6028 10.6985 15.4723 10.762 15.3195C10.8255 15.1666 10.842 14.9983 10.8094 14.836C10.7768 14.6737 10.6967 14.5248 10.5792 14.4082L6.1625 9.9999L10.5792 5.59157C10.7157 5.43215 10.787 5.22709 10.7789 5.01736C10.7708 4.80763 10.6839 4.60868 10.5355 4.46026C10.3871 4.31185 10.1881 4.22491 9.97838 4.21681C9.76865 4.20871 9.56359 4.28005 9.40417 4.41657L4.40417 9.41657C4.24896 9.5727 4.16184 9.78391 4.16184 10.0041C4.16184 10.2242 4.24896 10.4354 4.40417 10.5916L9.40417 15.5916C9.55939 15.7455 9.76889 15.8323 9.9875 15.8332Z"
        fill="#6A758B"
      />
      <path
        d="M14.9875 15.8333C15.153 15.8342 15.3151 15.7859 15.453 15.6944C15.5909 15.6029 15.6985 15.4724 15.762 15.3195C15.8255 15.1666 15.842 14.9983 15.8094 14.8361C15.7768 14.6738 15.6967 14.5248 15.5792 14.4083L11.1625 9.99995L15.5792 5.59162C15.7361 5.4347 15.8242 5.22187 15.8242 4.99995C15.8242 4.77803 15.7361 4.5652 15.5792 4.40828C15.4223 4.25136 15.2094 4.16321 14.9875 4.16321C14.7656 4.16321 14.5528 4.25136 14.3958 4.40828L9.39584 9.40828C9.24063 9.56442 9.15351 9.77563 9.15351 9.99578C9.15351 10.2159 9.24063 10.4271 9.39584 10.5833L14.3958 15.5833C14.473 15.662 14.5651 15.7247 14.6666 15.7676C14.7682 15.8105 14.8772 15.8328 14.9875 15.8333Z"
        fill="#6A758B"
      />
    </svg>
  );
};

export const MoreVert = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99996 5.33329C8.73329 5.33329 9.33329 4.73329 9.33329 3.99996C9.33329 3.26663 8.73329 2.66663 7.99996 2.66663C7.26663 2.66663 6.66663 3.26663 6.66663 3.99996C6.66663 4.73329 7.26663 5.33329 7.99996 5.33329ZM7.99996 6.66663C7.26663 6.66663 6.66663 7.26663 6.66663 7.99996C6.66663 8.73329 7.26663 9.33329 7.99996 9.33329C8.73329 9.33329 9.33329 8.73329 9.33329 7.99996C9.33329 7.26663 8.73329 6.66663 7.99996 6.66663ZM7.99996 10.6666C7.26663 10.6666 6.66663 11.2666 6.66663 12C6.66663 12.7333 7.26663 13.3333 7.99996 13.3333C8.73329 13.3333 9.33329 12.7333 9.33329 12C9.33329 11.2666 8.73329 10.6666 7.99996 10.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CheckBoxIcon = ({ className, color }: IconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16675 10.8333L7.10543 13.1842C7.79486 13.7357 8.79479 13.6539 9.38542 12.9977L15.8334 5.83325"
        stroke={color || '#ffffff'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const RedoIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2467 12.7067H5.91341C3.80008 12.7067 2.08008 10.9867 2.08008 8.87337C2.08008 6.76004 3.80008 5.04004 5.91341 5.04004H13.2467C13.5201 5.04004 13.7467 5.26671 13.7467 5.54004C13.7467 5.81337 13.5201 6.04004 13.2467 6.04004H5.91341C4.35341 6.04004 3.08008 7.31337 3.08008 8.87337C3.08008 10.4334 4.35341 11.7067 5.91341 11.7067H11.2467C11.5201 11.7067 11.7467 11.9334 11.7467 12.2067C11.7467 12.48 11.5267 12.7067 11.2467 12.7067Z"
        fill="#101828"
      />
      <path
        d="M11.7134 7.70671C11.5868 7.70671 11.4601 7.66004 11.3601 7.56004C11.1668 7.36671 11.1668 7.04671 11.3601 6.85338L12.7134 5.50004L11.3601 4.14671C11.1668 3.95338 11.1668 3.63338 11.3601 3.44004C11.5534 3.24671 11.8734 3.24671 12.0668 3.44004L13.7734 5.14671C13.9668 5.34004 13.9668 5.66004 13.7734 5.85338L12.0668 7.56004C11.9668 7.66004 11.8401 7.70671 11.7134 7.70671Z"
        fill="#101828"
      />
    </svg>
  );
};
export const UndoIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0868 12.7067H4.75342C4.48008 12.7067 4.25342 12.48 4.25342 12.2067C4.25342 11.9334 4.48008 11.7067 4.75342 11.7067H10.0868C11.6468 11.7067 12.9201 10.4334 12.9201 8.87337C12.9201 7.31337 11.6468 6.04004 10.0868 6.04004H2.75342C2.48008 6.04004 2.25342 5.81337 2.25342 5.54004C2.25342 5.26671 2.48008 5.04004 2.75342 5.04004H10.0868C12.2001 5.04004 13.9201 6.76004 13.9201 8.87337C13.9201 10.9867 12.2001 12.7067 10.0868 12.7067Z"
        fill="#101828"
      />
      <path
        d="M4.28679 7.70671C4.16012 7.70671 4.03345 7.66004 3.93345 7.56004L2.22679 5.85338C2.03345 5.66004 2.03345 5.34004 2.22679 5.14671L3.93345 3.44004C4.12679 3.24671 4.44679 3.24671 4.64012 3.44004C4.83345 3.63338 4.83345 3.95338 4.64012 4.14671L3.28679 5.50004L4.64012 6.85338C4.83345 7.04671 4.83345 7.36671 4.64012 7.56004C4.54679 7.66004 4.41345 7.70671 4.28679 7.70671Z"
        fill="#101828"
      />
    </svg>
  );
};
export const UnorderedListIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1434 2.28683H4.71484C4.63627 2.28683 4.57199 2.35112 4.57199 2.42969V3.42969C4.57199 3.50826 4.63627 3.57254 4.71484 3.57254H15.1434C15.222 3.57254 15.2863 3.50826 15.2863 3.42969V2.42969C15.2863 2.35112 15.222 2.28683 15.1434 2.28683ZM15.1434 7.35826H4.71484C4.63627 7.35826 4.57199 7.42255 4.57199 7.50112V8.50112C4.57199 8.57969 4.63627 8.64397 4.71484 8.64397H15.1434C15.222 8.64397 15.2863 8.57969 15.2863 8.50112V7.50112C15.2863 7.42255 15.222 7.35826 15.1434 7.35826ZM15.1434 12.4297H4.71484C4.63627 12.4297 4.57199 12.494 4.57199 12.5725V13.5725C4.57199 13.6511 4.63627 13.7154 4.71484 13.7154H15.1434C15.222 13.7154 15.2863 13.6511 15.2863 13.5725V12.5725C15.2863 12.494 15.222 12.4297 15.1434 12.4297ZM0.714844 2.92969C0.714844 3.06101 0.74071 3.19105 0.790964 3.31237C0.841219 3.4337 0.914878 3.54394 1.00774 3.63679C1.1006 3.72965 1.21083 3.80331 1.33216 3.85357C1.45349 3.90382 1.58352 3.92969 1.71484 3.92969C1.84617 3.92969 1.9762 3.90382 2.09753 3.85357C2.21885 3.80331 2.32909 3.72965 2.42195 3.63679C2.51481 3.54394 2.58847 3.4337 2.63872 3.31237C2.68898 3.19105 2.71484 3.06101 2.71484 2.92969C2.71484 2.79837 2.68898 2.66833 2.63872 2.547C2.58847 2.42568 2.51481 2.31544 2.42195 2.22258C2.32909 2.12972 2.21885 2.05606 2.09753 2.00581C1.9762 1.95555 1.84617 1.92969 1.71484 1.92969C1.58352 1.92969 1.45349 1.95555 1.33216 2.00581C1.21083 2.05606 1.1006 2.12972 1.00774 2.22258C0.914878 2.31544 0.841219 2.42568 0.790964 2.547C0.74071 2.66833 0.714844 2.79837 0.714844 2.92969ZM0.714844 8.00112C0.714844 8.13244 0.74071 8.26248 0.790964 8.3838C0.841219 8.50513 0.914878 8.61537 1.00774 8.70822C1.1006 8.80108 1.21083 8.87474 1.33216 8.925C1.45349 8.97525 1.58352 9.00112 1.71484 9.00112C1.84617 9.00112 1.9762 8.97525 2.09753 8.925C2.21885 8.87474 2.32909 8.80108 2.42195 8.70822C2.51481 8.61537 2.58847 8.50513 2.63872 8.3838C2.68898 8.26248 2.71484 8.13244 2.71484 8.00112C2.71484 7.86979 2.68898 7.73976 2.63872 7.61843C2.58847 7.49711 2.51481 7.38687 2.42195 7.29401C2.32909 7.20115 2.21885 7.12749 2.09753 7.07724C1.9762 7.02698 1.84617 7.00112 1.71484 7.00112C1.58352 7.00112 1.45349 7.02698 1.33216 7.07724C1.21083 7.12749 1.1006 7.20115 1.00774 7.29401C0.914878 7.38687 0.841219 7.49711 0.790964 7.61843C0.74071 7.73976 0.714844 7.86979 0.714844 8.00112ZM0.714844 13.0725C0.714844 13.2039 0.74071 13.3339 0.790964 13.4552C0.841219 13.5766 0.914878 13.6868 1.00774 13.7797C1.1006 13.8725 1.21083 13.9462 1.33216 13.9964C1.45349 14.0467 1.58352 14.0725 1.71484 14.0725C1.84617 14.0725 1.9762 14.0467 2.09753 13.9964C2.21885 13.9462 2.32909 13.8725 2.42195 13.7797C2.51481 13.6868 2.58847 13.5766 2.63872 13.4552C2.68898 13.3339 2.71484 13.2039 2.71484 13.0725C2.71484 12.9412 2.68898 12.8112 2.63872 12.6899C2.58847 12.5685 2.51481 12.4583 2.42195 12.3654C2.32909 12.2726 2.21885 12.1989 2.09753 12.1487C1.9762 12.0984 1.84617 12.0725 1.71484 12.0725C1.58352 12.0725 1.45349 12.0984 1.33216 12.1487C1.21083 12.1989 1.1006 12.2726 1.00774 12.3654C0.914878 12.4583 0.841219 12.5685 0.790964 12.6899C0.74071 12.8112 0.714844 12.9412 0.714844 13.0725Z"
        fill="#101828"
      />
    </svg>
  );
};

export const CloseIcon = ({ className, color }: IconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6671 3.33325L3.33374 12.6666M3.33374 3.33325L12.6671 12.6666"
        stroke={color || '#101828'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const QuestionCircle = ({ className }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 1.33325C4.31861 1.33325 1.3335 4.31837 1.3335 7.99992C1.3335 11.6815 4.31861 14.6666 8.00016 14.6666C11.6817 14.6666 14.6668 11.6815 14.6668 7.99992C14.6668 4.31837 11.6817 1.33325 8.00016 1.33325ZM8.00016 13.5356C4.94362 13.5356 2.46445 11.0565 2.46445 7.99992C2.46445 4.94337 4.94362 2.4642 8.00016 2.4642C11.0567 2.4642 13.5359 4.94337 13.5359 7.99992C13.5359 11.0565 11.0567 13.5356 8.00016 13.5356Z"
        fill="#101828"
      />
      <path
        d="M9.66065 5.0932C9.21422 4.70183 8.62493 4.48755 7.99993 4.48755C7.37493 4.48755 6.78565 4.70332 6.33922 5.0932C5.87493 5.49945 5.61898 6.04559 5.61898 6.63041V6.7435C5.61898 6.80898 5.67255 6.86255 5.73803 6.86255H6.45231C6.51779 6.86255 6.57136 6.80898 6.57136 6.7435V6.63041C6.57136 5.97416 7.21273 5.43993 7.99993 5.43993C8.78713 5.43993 9.4285 5.97416 9.4285 6.63041C9.4285 7.0932 9.10112 7.51731 8.59368 7.71225C8.27821 7.83279 8.01035 8.0441 7.81838 8.32088C7.62344 8.60362 7.52225 8.94291 7.52225 9.28666V9.6066C7.52225 9.67207 7.57582 9.72565 7.6413 9.72565H8.35559C8.42106 9.72565 8.47463 9.67207 8.47463 9.6066V9.2688C8.4754 9.12434 8.51969 8.98346 8.60171 8.86454C8.68373 8.74562 8.79969 8.65417 8.93446 8.60213C9.81243 8.26433 10.3794 7.49053 10.3794 6.63041C10.3809 6.04559 10.1249 5.49945 9.66065 5.0932ZM7.40469 11.2733C7.40469 11.4311 7.46741 11.5825 7.57903 11.6942C7.69066 11.8058 7.84206 11.8685 7.99993 11.8685C8.1578 11.8685 8.3092 11.8058 8.42083 11.6942C8.53246 11.5825 8.59517 11.4311 8.59517 11.2733C8.59517 11.1154 8.53246 10.964 8.42083 10.8524C8.3092 10.7407 8.1578 10.678 7.99993 10.678C7.84206 10.678 7.69066 10.7407 7.57903 10.8524C7.46741 10.964 7.40469 11.1154 7.40469 11.2733Z"
        fill="#101828"
      />
    </svg>
  );
};

export const PlusIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.53558 1.57227H7.46415C7.36891 1.57227 7.32129 1.61988 7.32129 1.71512V7.32227H2.00028C1.90504 7.32227 1.85742 7.36988 1.85742 7.46512V8.53655C1.85742 8.63179 1.90504 8.67941 2.00028 8.67941H7.32129V14.2866C7.32129 14.3818 7.36891 14.4294 7.46415 14.4294H8.53558C8.63081 14.4294 8.67843 14.3818 8.67843 14.2866V8.67941H14.0003C14.0955 8.67941 14.1431 8.63179 14.1431 8.53655V7.46512C14.1431 7.36988 14.0955 7.32227 14.0003 7.32227H8.67843V1.71512C8.67843 1.61988 8.63081 1.57227 8.53558 1.57227Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CSVIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.8644 7.12508L11.0728 2.33341H5.08317C4.42192 2.33102 3.88525 2.86529 3.88525 3.52654C3.88525 3.52654 3.88525 3.52893 3.88525 3.53133V16.4688C3.88525 17.1301 4.41713 17.6667 5.07838 17.6667C5.07838 17.6667 5.08077 17.6667 5.08317 17.6667H14.6665C15.3278 17.6667 15.862 17.1349 15.8644 16.4736C15.8644 16.4736 15.8644 16.4712 15.8644 16.4688V7.12508Z"
        fill="#009688"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0728 2.33333L15.8644 7.125H12.2707C11.6094 7.125 11.0751 6.59313 11.0728 5.93187C11.0728 5.93187 11.0728 5.92948 11.0728 5.92708V2.33333Z"
        fill="#4DB6AC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.4732 10.3234H7.84549L7.45497 9.69573L7.06684 10.3234H6.45351L7.11955 9.29562L6.49424 8.31573H7.09559L7.45736 8.93625L7.80716 8.31573H8.42768L7.79038 9.33875L8.47559 10.3234H8.4732ZM8.96674 8.08333H11.0487V9.04646H8.96674V8.08333ZM11.5087 8.08333H13.5883V9.04646H11.5063V8.08333H11.5087ZM8.96674 9.47771H11.0487V10.4408H8.96674V9.47771ZM11.5087 9.47771H13.5883V10.4408H11.5063V9.47771H11.5087ZM8.96674 10.8745H11.0487V11.8376H8.96674V10.8745ZM11.5087 10.8745H13.5883V11.8376H11.5063V10.8745H11.5087ZM6.42476 10.8745H8.50434V11.8376H6.42236V10.8745H6.42476ZM8.96674 12.2712H11.0487V13.2344H8.96674V12.2712ZM11.5087 12.2712H13.5883V13.2344H11.5063V12.2712H11.5087ZM6.42476 12.2712H8.50434V13.2344H6.42236V12.2712H6.42476Z"
        fill="white"
      />
    </svg>
  );
};

export const GoogleCalendarIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5084 6.49128H6.4917V13.5079H13.51V6.48961L13.5084 6.49128Z"
        fill="white"
      />
      <path
        d="M13.5083 16.6663L16.6666 13.5079H13.5083V16.6663Z"
        fill="#EA4335"
      />
      <path
        d="M16.6666 6.49128H13.5083V13.5079H16.6666V6.48961V6.49128Z"
        fill="#FBBC04"
      />
      <path
        d="M13.5084 13.5079H6.4917V16.6663H13.51V13.5079H13.5084Z"
        fill="#34A853"
      />
      <path
        d="M3.3335 13.5079V15.6129C3.3335 16.1946 3.80516 16.6663 4.38683 16.6663H6.49183V13.5079H3.3335Z"
        fill="#188038"
      />
      <path
        d="M16.6666 6.49121V4.38621C16.6666 3.80455 16.195 3.33288 15.6133 3.33288H13.5083V6.49121H16.6666Z"
        fill="#1967D2"
      />
      <path
        d="M13.5085 3.33295H4.38683C3.80516 3.33295 3.3335 3.80462 3.3335 4.38628V13.5079H6.49183V6.48961H13.5101V3.33128L13.5085 3.33295ZM7.93016 11.9346C7.66849 11.7579 7.48682 11.4979 7.38682 11.1563L7.99516 10.9046C8.05016 11.1146 8.14682 11.2779 8.28516 11.3946C8.42349 11.5113 8.58849 11.5679 8.78349 11.5679C8.97849 11.5679 9.15349 11.5079 9.29682 11.3863C9.44015 11.2646 9.51182 11.1113 9.51182 10.9246C9.51515 10.7413 9.43182 10.5663 9.28515 10.4563C9.13515 10.3346 8.94516 10.2746 8.71849 10.2746H8.36682V9.67127H8.68349C8.87849 9.67127 9.04182 9.61794 9.17515 9.51294C9.30849 9.40794 9.37515 9.26461 9.37515 9.07961C9.37515 8.91627 9.31515 8.78627 9.19682 8.68961C9.07849 8.59294 8.92682 8.54294 8.74349 8.54294C8.56016 8.54294 8.42182 8.58961 8.31682 8.68627C8.21182 8.78127 8.13182 8.90294 8.08682 9.03794L7.48349 8.78627C7.56349 8.55961 7.71016 8.35961 7.92516 8.18794C8.14016 8.01628 8.41516 7.92794 8.74849 7.92794C8.99516 7.92794 9.21682 7.97461 9.41349 8.07128C9.61015 8.16794 9.76349 8.29961 9.87515 8.46794C9.98682 8.63628 10.0418 8.82627 10.0418 9.03794C10.0418 9.24961 9.99015 9.43461 9.88682 9.58294C9.78349 9.73127 9.65682 9.84627 9.50515 9.92627V9.96294C9.70015 10.0429 9.86849 10.1746 9.99515 10.3446C10.1218 10.5163 10.1868 10.7196 10.1868 10.9579C10.1868 11.1963 10.1268 11.4096 10.0052 11.5963C9.88349 11.7829 9.71682 11.9313 9.50349 12.0379C9.29015 12.1446 9.05015 12.1996 8.78515 12.1996C8.47682 12.1996 8.19349 12.1113 7.93016 11.9346ZM11.6702 8.91461L11.0018 9.39794L10.6668 8.89127L11.8652 8.02628H12.3252V12.1063H11.6685V8.91461H11.6702Z"
        fill="#4285F4"
      />
    </svg>
  );
};

export const GoogleSheetIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.7694 2.33342L16.3135 6.55008V16.7084C16.3156 17.2374 15.8549 17.6667 15.2849 17.6667C15.2849 17.6667 15.2828 17.6667 15.2807 17.6667H5.36625C4.79617 17.6667 4.3335 17.2412 4.3335 16.7122C4.3335 16.7122 4.3335 16.7103 4.3335 16.7084V3.29175C4.3335 2.76275 4.79204 2.33533 5.36212 2.33342C5.36212 2.33342 5.36419 2.33342 5.36625 2.33342H11.7694Z"
        fill="#28B446"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.7695 2.33338L16.3137 6.55005H12.8023C12.2301 6.55005 11.7695 6.07472 11.7695 5.5438V2.33338Z"
        fill="#6ACE7C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.7505 6.55001L16.3135 7.91467V6.55001H12.7505Z"
        fill="#219B38"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.43164 10.3834C7.43164 10.1707 7.61547 10.0001 7.84474 10.0001H12.802C13.0313 10.0001 13.2151 10.1707 13.2151 10.3834V14.4084C13.2151 14.6212 13.0313 14.7917 12.802 14.7917H7.84474C7.61547 14.7917 7.43164 14.6212 7.43164 14.4084V10.3834ZM8.0513 10.7667H9.91026V11.3417H8.0513V10.7667ZM8.0513 12.1084H9.91026V12.6834H8.0513V12.1084ZM8.0513 13.4501H9.91026V14.0251H8.0513V13.4501ZM10.7365 10.7667H12.5954V11.3417H10.7365V10.7667ZM10.7365 12.1084H12.5954V12.6834H10.7365V12.1084ZM10.7365 13.4501H12.5954V14.0251H10.7365V13.4501Z"
        fill="white"
      />
    </svg>
  );
};
export const MicrosoftExcelIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4258 7.44446H15.9135V8.6709H13.4258V7.44446Z"
        fill="#02723B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4258 5.60389H15.9135V6.83032H13.4258V5.60389Z"
        fill="#02723B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4258 9.32581H15.9135V10.5522H13.4258V9.32581Z"
        fill="#02723B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4258 11.1664H15.9135V12.3928H13.4258V11.1664Z"
        fill="#02723B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.426 13.0477H15.9137V14.2741H13.426V13.0477ZM17.3417 3.92594H11.3451V2.25L2.25049 3.84456V16.1961L11.3471 17.75V15.8687H17.3436C17.5877 15.8687 17.7524 15.6633 17.7524 15.4599V4.33669C17.7524 4.13131 17.5897 3.92788 17.3436 3.92788L17.3417 3.92594ZM7.39068 12.7609L6.5343 10.5115H6.49361C6.49361 10.5522 5.63724 12.6389 5.63724 12.6389L4.49411 12.5575L5.84068 9.89925L4.61618 7.241L5.7593 7.15963L6.5343 9.24438H6.57499C6.57499 9.20369 7.43136 7.07631 7.43136 7.07631L8.61324 6.99494L7.1853 9.89925L8.65393 12.8036L7.38874 12.7629L7.39068 12.7609ZM17.2196 15.4192H11.3451V14.2741H12.7731V13.0477H11.3451V12.4335H12.7731V11.2071H11.3451V10.5929H12.7731V9.36644H11.3451V8.75225H12.7731V7.52581H11.3451V6.91163H12.7731V5.68519H11.3451V4.45875H17.2196V15.4192Z"
        fill="#02723B"
      />
    </svg>
  );
};
export const SaleForceIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.231 6.38184C10.9003 5.68509 11.8318 5.25362 12.861 5.25362C14.2331 5.25362 15.4223 6.01593 16.0626 7.15177C16.6313 6.89792 17.2465 6.7668 17.8693 6.7668C20.3392 6.7668 22.3441 8.78691 22.3441 11.2797C22.3441 13.7724 20.3392 15.7925 17.8693 15.7925C17.5674 15.7925 17.2732 15.762 16.985 15.7048C16.4247 16.7035 15.3537 17.3819 14.134 17.3819C13.6377 17.3827 13.1476 17.2706 12.7009 17.0526C12.133 18.3866 10.8103 19.3243 9.27049 19.3243C7.73063 19.3243 6.29749 18.3104 5.7715 16.8849C5.53747 16.9345 5.29887 16.9588 5.05951 16.9588C3.14612 16.9588 1.59863 15.3885 1.59863 13.4599C1.59863 12.1639 2.29538 11.0357 3.32907 10.4259C3.10952 9.92046 2.9967 9.37541 2.99747 8.82503C2.99747 6.59909 4.80413 4.80005 7.03007 4.80005C8.33361 4.80005 9.49994 5.42133 10.2318 6.38565"
        fill="#00A1E0"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.62041 12.3279C4.60745 12.3622 4.62498 12.369 4.62956 12.3751C4.66844 12.4033 4.70808 12.4239 4.74772 12.4468C4.95964 12.5589 5.15936 12.5916 5.36823 12.5916C5.7936 12.5916 6.05812 12.3652 6.05812 12.0008V11.994C6.05812 11.657 5.7593 11.5343 5.48029 11.4467L5.4437 11.4352C5.23254 11.3666 5.05035 11.3072 5.05035 11.1684V11.1615C5.05035 11.0426 5.15707 10.955 5.32173 10.955C5.50469 10.955 5.72271 11.0159 5.86221 11.0929C5.86221 11.0929 5.90337 11.1196 5.91862 11.08C5.927 11.0586 5.9979 10.8681 6.00552 10.8467C6.01391 10.8246 5.99942 10.8078 5.98494 10.7987C5.82486 10.7011 5.60379 10.6348 5.37509 10.6348H5.33241C4.94287 10.6348 4.67072 10.8703 4.67072 11.2073V11.2149C4.67072 11.5701 4.97107 11.686 5.2516 11.7661L5.29658 11.7798C5.50088 11.8423 5.67773 11.8972 5.67773 12.0405V12.0474C5.67773 12.1792 5.56262 12.2776 5.37814 12.2776C5.30649 12.2776 5.07779 12.276 4.83005 12.1198C4.80032 12.1022 4.78278 12.09 4.75991 12.0756C4.74772 12.0679 4.71722 12.055 4.70426 12.0946L4.62041 12.3279ZM10.8485 12.3271C10.8355 12.3614 10.853 12.3683 10.8576 12.3744C10.8965 12.4026 10.9361 12.4232 10.9758 12.446C11.1877 12.5581 11.3874 12.5909 11.5963 12.5909C12.0216 12.5909 12.2862 12.3645 12.2862 12.0001V11.9932C12.2862 11.6563 11.9881 11.5336 11.7083 11.4459L11.6717 11.4345C11.4606 11.3658 11.2784 11.3064 11.2784 11.1676V11.1608C11.2784 11.0419 11.3851 10.9542 11.5498 10.9542C11.7327 10.9542 11.95 11.0152 12.0903 11.0922C12.0903 11.0922 12.1314 11.1189 12.1467 11.0792C12.1551 11.0579 12.2259 10.8673 12.2328 10.846C12.2412 10.8238 12.2267 10.8071 12.2122 10.7979C12.0521 10.7004 11.8311 10.634 11.6024 10.634H11.5597C11.1702 10.634 10.898 10.8696 10.898 11.2065V11.2141C10.898 11.5694 11.1984 11.6853 11.4789 11.7653L11.5239 11.779C11.7289 11.8415 11.905 11.8964 11.905 12.0397V12.0466C11.905 12.1785 11.7899 12.2768 11.6054 12.2768C11.5338 12.2768 11.3043 12.2753 11.0573 12.119C11.0276 12.1015 11.0101 12.0893 10.9872 12.0748C10.9796 12.0702 10.9437 12.0557 10.9315 12.0939L10.8477 12.3271M15.1006 11.6128C15.1006 11.8187 15.0625 11.981 14.987 12.0961C14.9123 12.2097 14.7987 12.2654 14.6409 12.2654C14.4831 12.2654 14.3703 12.2105 14.2964 12.0969C14.2217 11.9826 14.1843 11.8194 14.1843 11.6136C14.1843 11.4078 14.2224 11.2462 14.2964 11.1326C14.3703 11.0198 14.4824 10.9656 14.6409 10.9656C14.7995 10.9656 14.9123 11.0205 14.987 11.1326C15.0625 11.2462 15.1006 11.4078 15.1006 11.6136M15.4558 11.2317C15.4208 11.1135 15.3667 11.0099 15.2942 10.9229C15.2218 10.836 15.1303 10.7659 15.0213 10.7156C14.9131 10.6645 14.785 10.6394 14.6402 10.6394C14.4953 10.6394 14.368 10.6653 14.259 10.7156C14.1508 10.7659 14.0585 10.836 13.9861 10.9229C13.9137 11.0099 13.8596 11.1135 13.8245 11.2317C13.7894 11.3491 13.7719 11.4771 13.7719 11.6136C13.7719 11.7501 13.7894 11.8781 13.8245 11.9955C13.8596 12.1137 13.9137 12.2173 13.9861 12.3042C14.0585 12.3912 14.1508 12.4605 14.259 12.5101C14.368 12.5596 14.4961 12.5848 14.6402 12.5848C14.7842 12.5848 14.9123 12.5596 15.0206 12.5101C15.1288 12.4605 15.221 12.3912 15.2935 12.3042C15.3659 12.2173 15.42 12.1137 15.4551 11.9955C15.4894 11.8781 15.5069 11.7501 15.5069 11.6136C15.5069 11.4771 15.4894 11.3491 15.4551 11.2317M18.3747 12.2074C18.3633 12.1731 18.329 12.1861 18.329 12.1861C18.2771 12.2059 18.2223 12.2242 18.1636 12.2334C18.1041 12.2425 18.0385 12.2471 17.9692 12.2471C17.7976 12.2471 17.6604 12.196 17.5629 12.0946C17.4645 11.9932 17.4096 11.8301 17.4104 11.609C17.4104 11.4078 17.4599 11.2568 17.5468 11.141C17.633 11.0266 17.7656 10.9672 17.941 10.9672C18.0873 10.9672 18.1994 10.9839 18.3168 11.0213C18.3168 11.0213 18.345 11.0335 18.3579 10.9969C18.3892 10.9108 18.4121 10.849 18.4456 10.7545C18.4548 10.727 18.4319 10.7164 18.4235 10.7126C18.3778 10.6943 18.2688 10.6653 18.1864 10.6523C18.1094 10.6409 18.0202 10.6348 17.9196 10.6348C17.7702 10.6348 17.6376 10.66 17.524 10.711C17.4104 10.7613 17.3143 10.8315 17.2381 10.9184C17.1619 11.0053 17.1039 11.109 17.0651 11.2271C17.0262 11.3445 17.0071 11.4733 17.0071 11.6098C17.0071 11.904 17.0864 12.1426 17.2435 12.3172C17.4005 12.4925 17.6368 12.581 17.9448 12.581C18.127 12.581 18.3137 12.5444 18.4479 12.491C18.4479 12.491 18.4738 12.4788 18.4624 12.4491L18.3747 12.2082M18.9968 11.4146C19.0135 11.3003 19.0448 11.205 19.0943 11.1311C19.1683 11.0182 19.2803 10.9565 19.4381 10.9565C19.5959 10.9565 19.7004 11.0182 19.7751 11.1311C19.8246 11.205 19.846 11.3041 19.8544 11.4146H18.9929H18.9968ZM20.1936 11.1631C20.1631 11.0495 20.0884 10.9344 20.0396 10.8818C19.9618 10.7987 19.8864 10.74 19.8109 10.708C19.7019 10.6615 19.5845 10.6378 19.4663 10.6378C19.3162 10.6378 19.1797 10.663 19.0692 10.7148C18.9586 10.7667 18.8656 10.8376 18.7925 10.926C18.7193 11.0144 18.6644 11.1189 18.6293 11.2385C18.5943 11.3567 18.5767 11.4863 18.5767 11.622C18.5767 11.7577 18.595 11.8896 18.6308 12.0062C18.6674 12.1236 18.7261 12.2265 18.8054 12.3119C18.8847 12.398 18.9861 12.4651 19.1081 12.5124C19.2293 12.5589 19.3764 12.5833 19.5449 12.5833C19.8925 12.5825 20.0754 12.5047 20.1501 12.4628C20.1638 12.4552 20.176 12.4422 20.16 12.4056L20.0815 12.1853C20.0693 12.1525 20.0365 12.164 20.0365 12.164C19.9504 12.196 19.8284 12.2539 19.5426 12.2532C19.3558 12.2532 19.2178 12.1975 19.1309 12.1114C19.0425 12.023 18.9983 11.8941 18.9914 11.7112H20.1959C20.1959 11.7112 20.2279 11.7112 20.2309 11.6807C20.2325 11.6677 20.2721 11.4337 20.1951 11.1631H20.1936ZM9.36882 11.4146C9.38559 11.3003 9.41761 11.205 9.4664 11.1311C9.54034 11.0182 9.6524 10.9565 9.8102 10.9565C9.96799 10.9565 10.0724 11.0182 10.1471 11.1311C10.1967 11.205 10.218 11.3041 10.2264 11.4146H9.36501H9.36882ZM10.5656 11.1631C10.5352 11.0495 10.4604 10.9344 10.4117 10.8818C10.3339 10.7987 10.2584 10.74 10.183 10.708C10.074 10.6615 9.95656 10.6378 9.8384 10.6378C9.68823 10.6378 9.55177 10.663 9.44124 10.7148C9.33071 10.7667 9.2377 10.8376 9.16452 10.926C9.09134 11.0144 9.03645 11.1189 9.00139 11.2385C8.96632 11.3567 8.94879 11.4863 8.94879 11.622C8.94879 11.7577 8.96708 11.8896 9.00368 12.0062C9.04027 12.1236 9.09896 12.2265 9.17748 12.3119C9.25676 12.398 9.35815 12.4651 9.48012 12.5124C9.60132 12.5589 9.74769 12.5833 9.91692 12.5833C10.2645 12.5825 10.4475 12.5047 10.5222 12.4628C10.5352 12.4552 10.5481 12.4422 10.5321 12.4056L10.4536 12.1853C10.4414 12.1525 10.4078 12.164 10.4078 12.164C10.3217 12.196 10.1997 12.2539 9.91387 12.2532C9.72787 12.2532 9.58913 12.1975 9.50222 12.1114C9.4138 12.023 9.36958 11.8941 9.36272 11.7112H10.5672C10.5672 11.7112 10.5992 11.7112 10.6022 11.6807C10.6038 11.6677 10.6434 11.4337 10.5664 11.1631H10.5656ZM6.76935 12.1998C6.72209 12.1625 6.71523 12.1533 6.69998 12.1282C6.67635 12.0916 6.66416 12.039 6.66416 11.9719C6.66416 11.8667 6.69922 11.7905 6.77164 11.7394C6.77088 11.7394 6.87531 11.6494 7.12078 11.6525C7.22979 11.6548 7.3388 11.6639 7.44705 11.6799V12.2265C7.44705 12.2265 7.29458 12.2593 7.1223 12.2699C6.8776 12.2844 6.76935 12.1998 6.77012 12.1998H6.76935ZM7.24808 11.3537C7.1993 11.3498 7.13602 11.3483 7.06056 11.3483C6.95764 11.3483 6.85778 11.3613 6.76478 11.3864C6.67102 11.4116 6.5864 11.4512 6.51398 11.5031C6.44156 11.5549 6.38134 11.6227 6.33941 11.7013C6.29672 11.7805 6.27538 11.8735 6.27538 11.9787C6.27538 12.0839 6.29367 12.1777 6.33027 12.2532C6.36609 12.3279 6.42022 12.3927 6.4873 12.4415C6.55438 12.4903 6.63671 12.5261 6.732 12.5474C6.82653 12.5688 6.93325 12.5802 7.05064 12.5802C7.17414 12.5802 7.29687 12.5695 7.41579 12.5497C7.51718 12.5322 7.6178 12.5124 7.71843 12.491C7.75883 12.4819 7.80304 12.4697 7.80304 12.4697C7.83277 12.462 7.83049 12.43 7.83049 12.43V11.3323C7.83049 11.0914 7.76569 10.9123 7.63838 10.8017C7.51184 10.6912 7.3266 10.6356 7.08647 10.6356C6.99652 10.6356 6.85092 10.6478 6.76402 10.6653C6.76402 10.6653 6.50178 10.7164 6.39354 10.801C6.39354 10.801 6.3699 10.8155 6.38286 10.849L6.46824 11.0777C6.47892 11.1074 6.50788 11.0975 6.50788 11.0975C6.50788 11.0975 6.51703 11.0937 6.5277 11.0876C6.75868 10.9618 7.05141 10.9656 7.05141 10.9656C7.181 10.9656 7.28162 10.9923 7.34871 11.0434C7.41427 11.0937 7.44781 11.1699 7.44781 11.33V11.3811C7.3449 11.3658 7.24961 11.3575 7.24961 11.3575L7.24808 11.3544V11.3537ZM16.9294 10.7339C16.9362 10.7171 16.9294 10.6981 16.9126 10.6912C16.9126 10.6912 16.9126 10.6912 16.9118 10.6912C16.8913 10.6836 16.7891 10.6615 16.7106 10.6569C16.5597 10.6478 16.4758 10.6729 16.4003 10.7065C16.3256 10.74 16.2433 10.7941 16.1976 10.8566V10.7103C16.1976 10.6904 16.1831 10.6737 16.1625 10.6737H15.8545C15.8347 10.6737 15.8202 10.6897 15.8202 10.7103V12.5017C15.8202 12.5215 15.8362 12.5383 15.8568 12.5383H16.1724C16.1922 12.5383 16.209 12.5223 16.209 12.5017V11.6022C16.209 11.4817 16.222 11.362 16.2486 11.2866C16.2746 11.2119 16.3104 11.1524 16.3538 11.1097C16.3958 11.0685 16.4468 11.0381 16.5025 11.0205C16.5551 11.0053 16.6092 10.9977 16.6641 10.9977C16.7266 10.9977 16.796 11.0137 16.796 11.0137C16.8188 11.0159 16.8318 11.0022 16.8402 10.9809C16.8608 10.926 16.9195 10.7613 16.9309 10.7286"
        fill="#FFFFFE"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9819 9.90774C13.943 9.89631 13.9034 9.8864 13.863 9.87954C13.8088 9.87039 13.754 9.86658 13.6998 9.86658C13.4826 9.86658 13.3111 9.92832 13.1906 10.0495C13.0709 10.17 12.9901 10.3537 12.949 10.5946L12.9345 10.6761H12.6616C12.6616 10.6761 12.628 10.6746 12.6212 10.7112L12.5762 10.9612C12.5731 10.9849 12.5831 11.0001 12.6151 11.0001H12.8811L12.6113 12.5049C12.5899 12.6261 12.5663 12.726 12.5388 12.8015C12.5122 12.8762 12.487 12.9318 12.455 12.9722C12.4245 13.0111 12.3948 13.0401 12.3452 13.0568C12.304 13.0706 12.256 13.0774 12.2034 13.0774C12.1745 13.0774 12.1356 13.0728 12.1074 13.0667C12.0784 13.0614 12.0639 13.0545 12.0426 13.0454C12.0426 13.0454 12.0113 13.0332 11.9991 13.0645C11.9892 13.0896 11.9183 13.2848 11.9099 13.3092C11.9015 13.3328 11.913 13.3518 11.9282 13.3572C11.9633 13.3701 11.99 13.3778 12.038 13.3892C12.1051 13.4052 12.1615 13.406 12.2141 13.406C12.3246 13.406 12.4253 13.3907 12.5091 13.3602C12.593 13.3297 12.6669 13.2771 12.7309 13.2047C12.8011 13.1277 12.8453 13.0462 12.8872 12.9356C12.9291 12.8259 12.9642 12.6902 12.9932 12.5316L13.2638 10.9986H13.6602C13.6602 10.9986 13.6937 11.0001 13.7006 10.9635L13.7456 10.7135C13.7486 10.6899 13.7387 10.6746 13.7067 10.6746H13.3225C13.324 10.6662 13.3415 10.5305 13.3858 10.4032C13.4048 10.3491 13.4399 10.3049 13.4704 10.2752C13.4986 10.2462 13.5329 10.2249 13.571 10.2127C13.6129 10.1997 13.6564 10.1936 13.6998 10.1944C13.7364 10.1944 13.7715 10.1989 13.7989 10.2043C13.8363 10.2119 13.8508 10.2165 13.8607 10.2195C13.8996 10.2317 13.9049 10.2195 13.9125 10.2012L14.0048 9.94891C14.0139 9.92146 13.991 9.91003 13.9826 9.90698M8.60991 12.508C8.60991 12.5278 8.59542 12.5446 8.5756 12.5446H8.25696C8.23714 12.5446 8.22266 12.5286 8.22266 12.508V9.94128C8.22266 9.92146 8.23714 9.90469 8.25696 9.90469H8.5756C8.59542 9.90469 8.60991 9.9207 8.60991 9.94128V12.508Z"
        fill="#FFFFFE"
      />
    </svg>
  );
};