interface IconProps {
  className?: string;
  color?: string;
  size?: number;
}
export const Chat1 = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 8.75C1.75 4.60786 5.10786 1.25 9.25 1.25H31.75C35.8921 1.25 39.25 4.60786 39.25 8.75V26.25C39.25 30.3921 35.8921 33.75 31.75 33.75H25.4422L21.4408 38.3231C21.2034 38.5944 20.8604 38.75 20.5 38.75C20.1396 38.75 19.7966 38.5944 19.5592 38.3231L15.5578 33.75H9.25C5.10786 33.75 1.75 30.3921 1.75 26.25V8.75ZM20.5 8.75C21.0836 8.75 21.5895 9.15381 21.7189 9.72281L22.4105 12.7643C22.7304 14.1711 23.8289 15.2696 25.2357 15.5895L28.2772 16.2811C28.8462 16.4105 29.25 16.9164 29.25 17.5C29.25 18.0836 28.8462 18.5895 28.2772 18.7189L25.2357 19.4105C23.8289 19.7304 22.7304 20.8289 22.4105 22.2357L21.7189 25.2772C21.5895 25.8462 21.0836 26.25 20.5 26.25C19.9164 26.25 19.4105 25.8462 19.2811 25.2772L18.5895 22.2357C18.2696 20.8289 17.1711 19.7304 15.7643 19.4105L12.7228 18.7189C12.1538 18.5895 11.75 18.0836 11.75 17.5C11.75 16.9164 12.1538 16.4105 12.7228 16.2811L15.7643 15.5895C17.1711 15.2696 18.2696 14.1711 18.5895 12.7643L19.2811 9.72281C19.4105 9.15381 19.9164 8.75 20.5 8.75Z"
        fill="white"
      />
    </svg>
  );
};
export const SparklesIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.59998 2.3999L8.06174 4.44982C8.45342 6.1886 9.81127 7.54645 11.5501 7.93813L13.6 8.3999L11.5501 8.86167C9.81127 9.25335 8.45342 10.6112 8.06174 12.35L7.59998 14.3999L7.13821 12.35C6.74653 10.6112 5.38868 9.25335 3.6499 8.86167L1.59998 8.3999L3.6499 7.93813C5.38868 7.54645 6.74653 6.1886 7.13821 4.44983L7.59998 2.3999Z"
        stroke="#FCBF25"
        strokeWidth="1.5"
        strokeLinejoin="round"
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
        d="M12.6668 3.33301L3.3335 12.6663M3.3335 3.33301L12.6668 12.6663"
        stroke={color || '#101828'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
export const StarIcon = ({ className }: IconProps) => {
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
        d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
        fill="#FCBF25"
      />
    </svg>
  );
};
export const MoreIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33333 6.6665C2.6 6.6665 2 7.2665 2 7.99984C2 8.73317 2.6 9.33317 3.33333 9.33317C4.06667 9.33317 4.66667 8.73317 4.66667 7.99984C4.66667 7.2665 4.06667 6.6665 3.33333 6.6665Z"
        fill="#3E4D65"
      />
      <path
        d="M12.6668 6.6665C11.9335 6.6665 11.3335 7.2665 11.3335 7.99984C11.3335 8.73317 11.9335 9.33317 12.6668 9.33317C13.4002 9.33317 14.0002 8.73317 14.0002 7.99984C14.0002 7.2665 13.4002 6.6665 12.6668 6.6665Z"
        fill="#3E4D65"
      />
      <path
        d="M7.99984 6.6665C7.2665 6.6665 6.6665 7.2665 6.6665 7.99984C6.6665 8.73317 7.2665 9.33317 7.99984 9.33317C8.73317 9.33317 9.33317 8.73317 9.33317 7.99984C9.33317 7.2665 8.73317 6.6665 7.99984 6.6665Z"
        fill="#3E4D65"
      />
    </svg>
  );
};
export const GroupIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.20546 2.63158C5.4105 2.54273 4.58937 2.54273 3.79441 2.63158C3.19574 2.69849 2.71059 3.16969 2.63971 3.77577C2.54458 4.58912 2.54458 5.41079 2.63971 6.22414C2.71059 6.83022 3.19575 7.30142 3.79441 7.36833C4.58937 7.45718 5.4105 7.45718 6.20546 7.36833C6.80413 7.30142 7.28928 6.83022 7.36016 6.22414C7.45529 5.41079 7.45529 4.58912 7.36016 3.77577C7.28928 3.16969 6.80413 2.69849 6.20546 2.63158Z"
        fill="white"
      />
      <path
        d="M13.2054 2.63158C12.4105 2.54273 11.5893 2.54273 10.7944 2.63158C10.1957 2.69849 9.7106 3.16969 9.63971 3.77577C9.54458 4.58912 9.54458 5.41079 9.63971 6.22414C9.7106 6.83022 10.1957 7.30142 10.7944 7.36833C11.5893 7.45718 12.4105 7.45718 13.2054 7.36833C13.8041 7.30142 14.2892 6.83022 14.3601 6.22414C14.4552 5.41079 14.4552 4.58912 14.3601 3.77577C14.2892 3.16969 13.8041 2.69849 13.2054 2.63158Z"
        fill="white"
      />
      <path
        d="M20.2055 2.63158C19.4106 2.54273 18.5894 2.54273 17.7945 2.63158C17.1958 2.69849 16.7106 3.16969 16.6398 3.77577C16.5446 4.58912 16.5446 5.41079 16.6398 6.22414C16.7106 6.83022 17.1958 7.30142 17.7945 7.36833C18.5894 7.45718 19.4106 7.45718 20.2055 7.36833C20.8042 7.30142 21.2893 6.83022 21.3602 6.22414C21.4553 5.41079 21.4553 4.58912 21.3602 3.77577C21.2893 3.16969 20.8042 2.69849 20.2055 2.63158Z"
        fill="white"
      />
      <path
        d="M6.20546 9.63158C5.4105 9.54273 4.58937 9.54273 3.79441 9.63158C3.19574 9.69849 2.71059 10.1697 2.63971 10.7758C2.54458 11.5891 2.54458 12.4108 2.63971 13.2241C2.71059 13.8302 3.19575 14.3014 3.79441 14.3683C4.58937 14.4572 5.4105 14.4572 6.20546 14.3683C6.80413 14.3014 7.28928 13.8302 7.36016 13.2241C7.45529 12.4108 7.45529 11.5891 7.36016 10.7758C7.28928 10.1697 6.80413 9.69849 6.20546 9.63158Z"
        fill="white"
      />
      <path
        d="M13.2054 9.63158C12.4105 9.54273 11.5893 9.54273 10.7944 9.63158C10.1957 9.69849 9.7106 10.1697 9.63971 10.7758C9.54458 11.5891 9.54458 12.4108 9.63971 13.2241C9.7106 13.8302 10.1957 14.3014 10.7944 14.3683C11.5893 14.4572 12.4105 14.4572 13.2054 14.3683C13.8041 14.3014 14.2892 13.8302 14.3601 13.2241C14.4552 12.4108 14.4552 11.5891 14.3601 10.7758C14.2892 10.1697 13.8041 9.69849 13.2054 9.63158Z"
        fill="white"
      />
      <path
        d="M20.2055 9.63158C19.4106 9.54273 18.5894 9.54273 17.7945 9.63158C17.1958 9.69849 16.7106 10.1697 16.6398 10.7758C16.5446 11.5891 16.5446 12.4108 16.6398 13.2241C16.7106 13.8302 17.1958 14.3014 17.7945 14.3683C18.5894 14.4572 19.4106 14.4572 20.2055 14.3683C20.8042 14.3014 21.2893 13.8302 21.3602 13.2241C21.4553 12.4108 21.4553 11.5891 21.3602 10.7758C21.2893 10.1697 20.8042 9.69849 20.2055 9.63158Z"
        fill="white"
      />
      <path
        d="M6.20546 16.6316C5.4105 16.5427 4.58937 16.5427 3.79441 16.6316C3.19574 16.6985 2.71059 17.1697 2.63971 17.7758C2.54458 18.5891 2.54458 19.4108 2.63971 20.2241C2.71059 20.8302 3.19575 21.3014 3.79441 21.3683C4.58937 21.4572 5.4105 21.4572 6.20546 21.3683C6.80413 21.3014 7.28928 20.8302 7.36016 20.2241C7.45529 19.4108 7.45529 18.5891 7.36016 17.7758C7.28928 17.1697 6.80413 16.6985 6.20546 16.6316Z"
        fill="white"
      />
      <path
        d="M13.2054 16.6316C12.4105 16.5427 11.5893 16.5427 10.7944 16.6316C10.1957 16.6985 9.7106 17.1697 9.63971 17.7758C9.54458 18.5891 9.54458 19.4108 9.63971 20.2241C9.7106 20.8302 10.1957 21.3014 10.7944 21.3683C11.5893 21.4572 12.4105 21.4572 13.2054 21.3683C13.8041 21.3014 14.2892 20.8302 14.3601 20.2241C14.4552 19.4108 14.4552 18.5891 14.3601 17.7758C14.2892 17.1697 13.8041 16.6985 13.2054 16.6316Z"
        fill="white"
      />
      <path
        d="M20.2055 16.6316C19.4106 16.5427 18.5894 16.5427 17.7945 16.6316C17.1958 16.6985 16.7106 17.1697 16.6398 17.7758C16.5446 18.5891 16.5446 19.4108 16.6398 20.2241C16.7106 20.8302 17.1958 21.3014 17.7945 21.3683C18.5894 21.4572 19.4106 21.4572 20.2055 21.3683C20.8042 21.3014 21.2893 20.8302 21.3602 20.2241C21.4553 19.4108 21.4553 18.5891 21.3602 17.7758C21.2893 17.1697 20.8042 16.6985 20.2055 16.6316Z"
        fill="white"
      />
    </svg>
  );
};
