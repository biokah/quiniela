export default function CategoryTitle({ size, title, cancelButton }) {
  return (
    <section className="flex category__title my-4 items-center">
      <svg
        width="35"
        height="72"
        viewBox="0 0 35 72"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.2329 71.9999H1.9135C1.69809 72 1.48491 71.9563 1.28694 71.8714C1.08896 71.7865 0.910332 71.6622 0.761909 71.5061C0.613486 71.35 0.498375 71.1653 0.423578 70.9633C0.348781 70.7613 0.315863 70.5462 0.326826 70.331L0.594816 65.0521C0.615545 64.6453 0.791775 64.262 1.08708 63.9815C1.38238 63.701 1.77418 63.5446 2.18149 63.5448H3.66323L5.72775 56.5742C5.82503 56.2463 6.02577 55.9587 6.29998 55.7542C6.57418 55.5498 6.90716 55.4395 7.24919 55.4399H10.7487C11.296 54.8557 11.7809 54.2219 11.8986 53.9184C11.849 53.5937 11.503 52.5799 11.2705 51.8993C10.7416 50.3523 10.1957 48.7529 10.1957 47.5278C10.1957 46.3934 10.3715 44.726 10.5133 43.386C10.5771 42.782 10.6466 42.1099 10.6693 41.7667C10.5785 41.5583 10.3715 41.1712 10.1999 40.8479C9.37893 39.3023 8.00637 36.7174 8.00637 33.978C7.99285 32.106 8.35946 30.2508 9.084 28.5246L8.68982 28.2311C7.47181 27.3321 6.71179 26.738 6.46791 25.8702C6.43813 25.7682 3.50158 14.5778 6.65224 12.709C7.86883 11.9872 9.21587 11.498 10.2978 11.1053C10.8408 10.9082 11.3513 10.7224 11.6902 10.5622C12.3197 10.2616 12.7026 10.0347 12.8245 9.88869C12.8118 9.86317 12.8004 9.83764 12.7877 9.8107C12.4842 9.14144 11.9199 7.89649 11.7951 5.34846C11.7143 3.67813 12.1241 2.35662 13.0145 1.42645C14.3687 0.0085144 16.3977 0.0085144 17.0642 0.0085144H18.0794C18.7458 0.0085144 20.7735 0.0085144 22.1319 1.42645C23.0195 2.35945 23.4293 3.67955 23.3484 5.34846C23.2222 7.90074 22.6565 9.14286 22.3559 9.81212C22.3445 9.83481 22.3375 9.85608 22.3275 9.87593C22.458 10.0418 22.8394 10.2659 23.4619 10.5622C23.7994 10.7224 24.3126 10.9096 24.8557 11.1081C25.9348 11.4995 27.2804 11.9887 28.4941 12.709C31.6349 14.5721 28.7082 25.7667 28.6756 25.8787C28.4346 26.7366 27.6746 27.3321 26.4566 28.2311L26.0624 28.5246C26.7869 30.2508 27.1535 32.106 27.14 33.978C27.14 36.716 25.7674 39.3038 24.9465 40.8479C24.7749 41.1712 24.5679 41.5569 24.4771 41.7667C24.4998 42.1113 24.5693 42.782 24.6331 43.386C24.7749 44.726 24.9507 46.3949 24.9507 47.5278C24.9507 48.7543 24.4034 50.3552 23.8745 51.905C23.6476 52.5671 23.3144 53.5427 23.252 53.9298C23.3782 54.2389 23.8575 54.8628 24.3977 55.4399H27.8972C28.2395 55.4396 28.5728 55.5498 28.8475 55.7542C29.1221 55.9586 29.3234 56.2462 29.4215 56.5742L31.4846 63.5448H32.9649C33.3721 63.5447 33.7637 63.701 34.0588 63.9816C34.3538 64.2622 34.5298 64.6454 34.5501 65.0521L34.8196 70.3325C34.8303 70.5472 34.7973 70.7619 34.7226 70.9636C34.6479 71.1653 34.533 71.3496 34.3849 71.5055C34.2368 71.6615 34.0586 71.7857 33.861 71.8707C33.6635 71.9557 33.4508 71.9996 33.2357 71.9999H33.2329ZM3.58524 68.8238H31.5611L31.4548 66.7153H30.2992C29.9571 66.7153 29.6241 66.6049 29.3497 66.4005C29.0754 66.1962 28.8743 65.9087 28.7763 65.5809L26.7118 58.6118H23.7341C23.3278 58.6121 22.9369 58.4563 22.6423 58.1765C21.7121 57.2974 20.1425 55.5973 20.0659 54.1169C20.0291 53.3612 20.3297 52.4381 20.8642 50.8727C21.2471 49.754 21.7703 48.2226 21.7703 47.525C21.7703 46.5593 21.6044 44.9826 21.4697 43.715C21.3548 42.626 21.291 41.9908 21.291 41.6022C21.291 40.9472 21.6086 40.3474 22.1418 39.3548C22.8678 37.9879 23.9652 35.9234 23.9652 33.9752C23.9735 32.3906 23.6347 30.8235 22.9727 29.3839C22.8069 29.0543 22.6922 28.7015 22.6324 28.3375C22.5034 27.1946 23.3683 26.5565 24.565 25.6731C24.949 25.4024 25.3182 25.1113 25.671 24.8011C26.1801 22.8089 27.1315 16.7728 26.6537 15.3151C25.7433 14.8103 24.6955 14.4303 23.7639 14.0915C23.1471 13.8674 22.5643 13.6547 22.0907 13.4279C21.0471 12.9316 19.1031 12.0099 19.1031 9.80503C19.1031 9.28039 19.2917 8.86352 19.459 8.49769C19.7058 7.95463 20.0773 7.13506 20.168 5.19107C20.1935 4.66501 20.1553 3.96314 19.8235 3.61574C19.547 3.32507 18.9571 3.1776 18.0723 3.1776H17.0571C16.1723 3.1776 15.5838 3.31939 15.3059 3.61574C14.9755 3.96314 14.9358 4.66502 14.9613 5.19391C15.0578 7.13506 15.4293 7.95604 15.6703 8.49769C15.8376 8.86494 16.0248 9.28039 16.0248 9.80503C16.0248 12.0014 14.0865 12.9245 13.0471 13.4279C12.5693 13.6547 11.9879 13.866 11.374 14.0886C10.4396 14.4289 9.38886 14.8075 8.47854 15.3151C7.99786 16.777 8.95355 22.8302 9.46118 24.8011C9.81441 25.1109 10.1836 25.4019 10.5672 25.6731C11.7625 26.5565 12.626 27.1932 12.4998 28.3346C12.4413 28.7001 12.327 29.0545 12.1609 29.3853C11.4978 30.8241 11.159 32.391 11.1684 33.9752C11.1684 35.9234 12.2659 37.9893 12.9918 39.3562C13.5207 40.3488 13.8426 40.9486 13.8426 41.6037C13.8426 41.9922 13.7774 42.6274 13.6625 43.7164C13.5292 44.984 13.3619 46.5593 13.3619 47.525C13.3619 48.2212 13.8837 49.7525 14.2666 50.8684C14.8025 52.4381 15.1046 53.3626 15.0649 54.1169C14.9911 55.5987 13.4201 57.2974 12.4913 58.1779C12.1964 58.4572 11.8057 58.6129 11.3995 58.6132H8.42183L6.37149 65.5809C6.2742 65.9089 6.07347 66.1965 5.79926 66.4009C5.52505 66.6054 5.19208 66.7157 4.85004 66.7153H3.69159L3.58524 68.8238Z"
          fill="black"
        />
      </svg>
      <span
        className={`font-bold ${size === "large" ? "text-xl" : "text-base"}`}
      >
        {title}
      </span>
      <span>{cancelButton}</span>
    </section>
  );
}
