import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

interface LogoProps {
   moreClass?: string;
   onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ moreClass = '', onClick }) => {
   return (
      <Link onClick={onClick} to={'/'} className={`logo ${moreClass}`}>
         <svg
            width="405"
            height="100"
            viewBox="0 0 405 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
               d="M6.91668 81C4.99538 81 3.36151 80.3232 2.01507 78.9698C0.668622 77.6163 -0.00306357 75.9754 1.05037e-05 74.0472V65.2403L18.4445 48.7854V81H6.91668ZM23.0556 81V62.4592H59.9444V81H23.0556ZM64.5556 81V42.9914L44.8431 25.3777L58.7917 12.9785L80.6944 32.5622C81.463 33.2575 82.0394 34.0501 82.4236 34.9401C82.8079 35.83 83 36.7756 83 37.7768V74.0472C83 75.9785 82.3268 77.6209 80.9803 78.9744C79.6339 80.3279 78.0016 81.0031 76.0833 81H64.5556ZM1.05037e-05 58.9828V37.7768C1.05037e-05 36.7725 0.19214 35.8069 0.576399 34.8798C0.960659 33.9528 1.53705 33.1803 2.30557 32.5622L36.8889 1.7382C37.5037 1.12017 38.2154 0.676737 39.0238 0.407896C39.8323 0.139055 40.6577 0.00309013 41.5 0C42.3454 0 43.1708 0.135965 43.9762 0.407896C44.7816 0.679827 45.4932 1.12326 46.1111 1.7382L55.3333 9.96566L1.05037e-05 58.9828Z"
               fill="black"
            />
            <path
               d="M111.17 68V41.8182H120.324C122.148 41.8182 123.652 42.1335 124.837 42.7642C126.021 43.3864 126.903 44.2259 127.483 45.2827C128.063 46.331 128.352 47.4943 128.352 48.7727C128.352 49.8977 128.152 50.8267 127.751 51.5597C127.359 52.2926 126.839 52.8722 126.192 53.2983C125.553 53.7244 124.858 54.0398 124.108 54.2443V54.5C124.909 54.5511 125.714 54.8324 126.524 55.3438C127.334 55.8551 128.011 56.5881 128.557 57.5426C129.102 58.4972 129.375 59.6648 129.375 61.0455C129.375 62.358 129.077 63.5384 128.48 64.5866C127.884 65.6349 126.942 66.4659 125.655 67.0795C124.368 67.6932 122.693 68 120.631 68H111.17ZM114.341 65.1875H120.631C122.702 65.1875 124.172 64.7869 125.041 63.9858C125.919 63.1761 126.358 62.196 126.358 61.0455C126.358 60.1591 126.132 59.3409 125.68 58.5909C125.229 57.8324 124.585 57.2273 123.75 56.7756C122.915 56.3153 121.926 56.0852 120.784 56.0852H114.341V65.1875ZM114.341 53.3239H120.222C121.176 53.3239 122.037 53.1364 122.804 52.7614C123.58 52.3864 124.193 51.858 124.645 51.1761C125.105 50.4943 125.335 49.6932 125.335 48.7727C125.335 47.6222 124.935 46.6463 124.134 45.8452C123.332 45.0355 122.063 44.6307 120.324 44.6307H114.341V53.3239ZM142.408 68.4091C140.516 68.4091 138.884 67.9915 137.512 67.1562C136.148 66.3125 135.096 65.1364 134.354 63.6278C133.621 62.1108 133.255 60.3466 133.255 58.3352C133.255 56.3239 133.621 54.5511 134.354 53.017C135.096 51.4744 136.127 50.2727 137.448 49.4119C138.778 48.5426 140.329 48.108 142.102 48.108C143.124 48.108 144.134 48.2784 145.131 48.6193C146.129 48.9602 147.036 49.5142 147.854 50.2812C148.673 51.0398 149.325 52.0455 149.81 53.2983C150.296 54.5511 150.539 56.0937 150.539 57.9261V59.2045H135.403V56.5966H147.471C147.471 55.4886 147.249 54.5 146.806 53.6307C146.371 52.7614 145.749 52.0753 144.94 51.5724C144.138 51.0696 143.192 50.8182 142.102 50.8182C140.9 50.8182 139.86 51.1165 138.982 51.7131C138.113 52.3011 137.444 53.0682 136.975 54.0142C136.506 54.9602 136.272 55.9744 136.272 57.0568V58.7955C136.272 60.2784 136.528 61.5355 137.039 62.5668C137.559 63.5895 138.279 64.3693 139.2 64.9062C140.12 65.4347 141.19 65.6989 142.408 65.6989C143.201 65.6989 143.917 65.5881 144.556 65.3665C145.204 65.1364 145.762 64.7955 146.231 64.3438C146.7 63.8835 147.062 63.3125 147.317 62.6307L150.232 63.4489C149.925 64.4375 149.41 65.3068 148.685 66.0568C147.961 66.7983 147.066 67.3778 146.001 67.7955C144.935 68.2045 143.738 68.4091 142.408 68.4091ZM169.038 52.7614L166.327 53.5284C166.157 53.0767 165.906 52.6378 165.573 52.2116C165.249 51.777 164.806 51.419 164.244 51.1378C163.681 50.8565 162.961 50.7159 162.083 50.7159C160.881 50.7159 159.88 50.9929 159.079 51.5469C158.286 52.0923 157.89 52.7869 157.89 53.6307C157.89 54.3807 158.163 54.973 158.708 55.4077C159.254 55.8423 160.106 56.2045 161.265 56.4943L164.18 57.2102C165.935 57.6364 167.244 58.2884 168.104 59.1662C168.965 60.0355 169.396 61.1562 169.396 62.5284C169.396 63.6534 169.072 64.6591 168.424 65.5455C167.785 66.4318 166.89 67.1307 165.739 67.642C164.589 68.1534 163.251 68.4091 161.725 68.4091C159.722 68.4091 158.065 67.9744 156.752 67.1051C155.44 66.2358 154.609 64.9659 154.259 63.2955L157.123 62.5795C157.396 63.6364 157.911 64.429 158.67 64.9574C159.437 65.4858 160.438 65.75 161.674 65.75C163.08 65.75 164.197 65.4517 165.023 64.8551C165.859 64.25 166.276 63.5256 166.276 62.6818C166.276 62 166.038 61.429 165.56 60.9688C165.083 60.5 164.35 60.1506 163.362 59.9205L160.089 59.1534C158.29 58.7273 156.969 58.0668 156.126 57.1719C155.29 56.2685 154.873 55.1392 154.873 53.7841C154.873 52.6761 155.184 51.696 155.806 50.8438C156.437 49.9915 157.293 49.3224 158.376 48.8366C159.467 48.3509 160.702 48.108 162.083 48.108C164.026 48.108 165.552 48.5341 166.66 49.3864C167.776 50.2386 168.569 51.3636 169.038 52.7614ZM182.477 48.3636V50.9205H172.301V48.3636H182.477ZM175.267 43.6591H178.284V62.375C178.284 63.2273 178.407 63.8665 178.654 64.2926C178.91 64.7102 179.234 64.9915 179.626 65.1364C180.027 65.2727 180.449 65.3409 180.892 65.3409C181.224 65.3409 181.497 65.3239 181.71 65.2898C181.923 65.2472 182.093 65.2131 182.221 65.1875L182.835 67.8977C182.63 67.9744 182.345 68.0511 181.978 68.1278C181.612 68.2131 181.147 68.2557 180.585 68.2557C179.733 68.2557 178.897 68.0724 178.079 67.706C177.27 67.3395 176.596 66.7812 176.059 66.0312C175.531 65.2812 175.267 64.3352 175.267 63.1932V43.6591ZM195.926 68H187.846V41.8182H196.284C198.824 41.8182 200.997 42.3423 202.804 43.3906C204.61 44.4304 205.995 45.9261 206.958 47.8778C207.922 49.821 208.403 52.1477 208.403 54.858C208.403 57.5852 207.917 59.9332 206.946 61.902C205.974 63.8622 204.559 65.3707 202.701 66.4276C200.843 67.4759 198.585 68 195.926 68ZM191.017 65.1875H195.721C197.886 65.1875 199.68 64.7699 201.103 63.9347C202.527 63.0994 203.588 61.9105 204.287 60.3679C204.985 58.8253 205.335 56.9886 205.335 54.858C205.335 52.7443 204.99 50.9247 204.299 49.3991C203.609 47.8651 202.578 46.6889 201.206 45.8707C199.833 45.044 198.125 44.6307 196.079 44.6307H191.017V65.1875ZM221.545 68.4091C219.653 68.4091 218.021 67.9915 216.649 67.1562C215.285 66.3125 214.233 65.1364 213.491 63.6278C212.758 62.1108 212.392 60.3466 212.392 58.3352C212.392 56.3239 212.758 54.5511 213.491 53.017C214.233 51.4744 215.264 50.2727 216.585 49.4119C217.914 48.5426 219.466 48.108 221.238 48.108C222.261 48.108 223.271 48.2784 224.268 48.6193C225.265 48.9602 226.173 49.5142 226.991 50.2812C227.809 51.0398 228.461 52.0455 228.947 53.2983C229.433 54.5511 229.676 56.0937 229.676 57.9261V59.2045H214.539V56.5966H226.608C226.608 55.4886 226.386 54.5 225.943 53.6307C225.508 52.7614 224.886 52.0753 224.076 51.5724C223.275 51.0696 222.329 50.8182 221.238 50.8182C220.037 50.8182 218.997 51.1165 218.119 51.7131C217.25 52.3011 216.581 53.0682 216.112 54.0142C215.643 54.9602 215.409 55.9744 215.409 57.0568V58.7955C215.409 60.2784 215.664 61.5355 216.176 62.5668C216.696 63.5895 217.416 64.3693 218.336 64.9062C219.257 65.4347 220.326 65.6989 221.545 65.6989C222.338 65.6989 223.054 65.5881 223.693 65.3665C224.341 65.1364 224.899 64.7955 225.368 64.3438C225.836 63.8835 226.199 63.3125 226.454 62.6307L229.369 63.4489C229.062 64.4375 228.547 65.3068 227.822 66.0568C227.098 66.7983 226.203 67.3778 225.137 67.7955C224.072 68.2045 222.875 68.4091 221.545 68.4091ZM249.724 48.3636L242.463 68H239.395L232.134 48.3636H235.406L240.827 64.0114H241.031L246.452 48.3636H249.724ZM253.707 68V48.3636H256.724V68H253.707ZM255.241 45.0909C254.653 45.0909 254.146 44.8906 253.719 44.4901C253.302 44.0895 253.093 43.608 253.093 43.0455C253.093 42.483 253.302 42.0014 253.719 41.6009C254.146 41.2003 254.653 41 255.241 41C255.829 41 256.332 41.2003 256.749 41.6009C257.175 42.0014 257.388 42.483 257.388 43.0455C257.388 43.608 257.175 44.0895 256.749 44.4901C256.332 44.8906 255.829 45.0909 255.241 45.0909ZM270.227 68.4091C268.386 68.4091 266.801 67.9744 265.471 67.1051C264.142 66.2358 263.119 65.0384 262.403 63.5128C261.687 61.9872 261.329 60.2443 261.329 58.2841C261.329 56.2898 261.696 54.5298 262.429 53.0043C263.17 51.4702 264.201 50.2727 265.522 49.4119C266.852 48.5426 268.403 48.108 270.176 48.108C271.556 48.108 272.801 48.3636 273.909 48.875C275.017 49.3864 275.924 50.1023 276.632 51.0227C277.339 51.9432 277.778 53.017 277.949 54.2443H274.931C274.701 53.3494 274.19 52.5568 273.397 51.8665C272.613 51.1676 271.556 50.8182 270.227 50.8182C269.051 50.8182 268.02 51.125 267.133 51.7386C266.255 52.3437 265.569 53.2003 265.075 54.3082C264.589 55.4077 264.346 56.6989 264.346 58.1818C264.346 59.6989 264.585 61.0199 265.062 62.1449C265.548 63.2699 266.23 64.1435 267.108 64.7656C267.994 65.3878 269.034 65.6989 270.227 65.6989C271.011 65.6989 271.723 65.5625 272.362 65.2898C273.001 65.017 273.542 64.625 273.985 64.1136C274.429 63.6023 274.744 62.9886 274.931 62.2727H277.949C277.778 63.4318 277.356 64.4759 276.683 65.4048C276.018 66.3253 275.136 67.0582 274.037 67.6037C272.946 68.1406 271.676 68.4091 270.227 68.4091ZM290.592 68.4091C288.7 68.4091 287.068 67.9915 285.696 67.1562C284.332 66.3125 283.279 65.1364 282.538 63.6278C281.805 62.1108 281.439 60.3466 281.439 58.3352C281.439 56.3239 281.805 54.5511 282.538 53.017C283.279 51.4744 284.311 50.2727 285.632 49.4119C286.961 48.5426 288.512 48.108 290.285 48.108C291.308 48.108 292.318 48.2784 293.315 48.6193C294.312 48.9602 295.22 49.5142 296.038 50.2812C296.856 51.0398 297.508 52.0455 297.994 53.2983C298.48 54.5511 298.723 56.0937 298.723 57.9261V59.2045H283.586V56.5966H295.654C295.654 55.4886 295.433 54.5 294.99 53.6307C294.555 52.7614 293.933 52.0753 293.123 51.5724C292.322 51.0696 291.376 50.8182 290.285 50.8182C289.083 50.8182 288.044 51.1165 287.166 51.7131C286.297 52.3011 285.627 53.0682 285.159 54.0142C284.69 54.9602 284.456 55.9744 284.456 57.0568V58.7955C284.456 60.2784 284.711 61.5355 285.223 62.5668C285.743 63.5895 286.463 64.3693 287.383 64.9062C288.304 65.4347 289.373 65.6989 290.592 65.6989C291.385 65.6989 292.1 65.5881 292.74 65.3665C293.387 65.1364 293.946 64.7955 294.414 64.3438C294.883 63.8835 295.245 63.3125 295.501 62.6307L298.416 63.4489C298.109 64.4375 297.593 65.3068 296.869 66.0568C296.145 66.7983 295.25 67.3778 294.184 67.7955C293.119 68.2045 291.922 68.4091 290.592 68.4091ZM318.039 48.3636C317.886 47.0682 317.264 46.0625 316.173 45.3466C315.082 44.6307 313.744 44.2727 312.159 44.2727C311 44.2727 309.985 44.4602 309.116 44.8352C308.255 45.2102 307.582 45.7259 307.096 46.3821C306.619 47.0384 306.38 47.7841 306.38 48.6193C306.38 49.3182 306.547 49.919 306.879 50.4219C307.22 50.9162 307.654 51.3295 308.183 51.6619C308.711 51.9858 309.265 52.2543 309.845 52.4673C310.424 52.6719 310.957 52.8381 311.443 52.9659L314.102 53.6818C314.784 53.8608 315.542 54.108 316.377 54.4233C317.221 54.7386 318.027 55.169 318.794 55.7145C319.569 56.2514 320.208 56.9418 320.711 57.7855C321.214 58.6293 321.466 59.6648 321.466 60.892C321.466 62.3068 321.095 63.5852 320.353 64.7273C319.62 65.8693 318.547 66.777 317.132 67.4503C315.725 68.1236 314.017 68.4602 312.005 68.4602C310.13 68.4602 308.507 68.1577 307.135 67.5526C305.771 66.9474 304.697 66.1037 303.913 65.0213C303.137 63.9389 302.699 62.6818 302.596 61.25H305.869C305.954 62.2386 306.287 63.0568 306.866 63.7045C307.454 64.3437 308.196 64.821 309.091 65.1364C309.994 65.4432 310.966 65.5966 312.005 65.5966C313.216 65.5966 314.302 65.4006 315.265 65.0085C316.228 64.608 316.991 64.054 317.554 63.3466C318.116 62.6307 318.397 61.7955 318.397 60.8409C318.397 59.9716 318.154 59.2642 317.669 58.7188C317.183 58.1733 316.544 57.7301 315.751 57.3892C314.958 57.0483 314.102 56.75 313.181 56.4943L309.96 55.5739C307.914 54.9858 306.295 54.1463 305.102 53.0554C303.909 51.9645 303.312 50.5369 303.312 48.7727C303.312 47.3068 303.708 46.0284 304.501 44.9375C305.302 43.8381 306.376 42.9858 307.723 42.3807C309.078 41.767 310.591 41.4602 312.261 41.4602C313.949 41.4602 315.449 41.7628 316.761 42.3679C318.074 42.9645 319.113 43.7827 319.88 44.8224C320.656 45.8622 321.065 47.0426 321.108 48.3636H318.039ZM334.809 48.3636V50.9205H324.633V48.3636H334.809ZM327.599 43.6591H330.616V62.375C330.616 63.2273 330.739 63.8665 330.987 64.2926C331.242 64.7102 331.566 64.9915 331.958 65.1364C332.359 65.2727 332.781 65.3409 333.224 65.3409C333.556 65.3409 333.829 65.3239 334.042 65.2898C334.255 65.2472 334.425 65.2131 334.553 65.1875L335.167 67.8977C334.962 67.9744 334.677 68.0511 334.31 68.1278C333.944 68.2131 333.479 68.2557 332.917 68.2557C332.065 68.2557 331.229 68.0724 330.411 67.706C329.602 67.3395 328.928 66.7812 328.391 66.0312C327.863 65.2812 327.599 64.3352 327.599 63.1932V43.6591ZM347.114 68.4091C345.341 68.4091 343.786 67.9872 342.447 67.1435C341.118 66.2997 340.078 65.1193 339.328 63.6023C338.587 62.0852 338.216 60.3125 338.216 58.2841C338.216 56.2386 338.587 54.4531 339.328 52.9276C340.078 51.402 341.118 50.2173 342.447 49.3736C343.786 48.5298 345.341 48.108 347.114 48.108C348.886 48.108 350.438 48.5298 351.767 49.3736C353.105 50.2173 354.145 51.402 354.886 52.9276C355.636 54.4531 356.011 56.2386 356.011 58.2841C356.011 60.3125 355.636 62.0852 354.886 63.6023C354.145 65.1193 353.105 66.2997 351.767 67.1435C350.438 67.9872 348.886 68.4091 347.114 68.4091ZM347.114 65.6989C348.46 65.6989 349.568 65.3537 350.438 64.6634C351.307 63.973 351.95 63.0653 352.368 61.9403C352.786 60.8153 352.994 59.5966 352.994 58.2841C352.994 56.9716 352.786 55.7486 352.368 54.6151C351.95 53.4815 351.307 52.5653 350.438 51.8665C349.568 51.1676 348.46 50.8182 347.114 50.8182C345.767 50.8182 344.659 51.1676 343.79 51.8665C342.92 52.5653 342.277 53.4815 341.859 54.6151C341.442 55.7486 341.233 56.9716 341.233 58.2841C341.233 59.5966 341.442 60.8153 341.859 61.9403C342.277 63.0653 342.92 63.973 343.79 64.6634C344.659 65.3537 345.767 65.6989 347.114 65.6989ZM360.617 68V48.3636H363.532V51.3295H363.736C364.094 50.358 364.742 49.5696 365.679 48.9645C366.617 48.3594 367.674 48.0568 368.85 48.0568C369.071 48.0568 369.348 48.0611 369.681 48.0696C370.013 48.0781 370.265 48.0909 370.435 48.108V51.1761C370.333 51.1506 370.098 51.1122 369.732 51.0611C369.374 51.0014 368.995 50.9716 368.594 50.9716C367.64 50.9716 366.787 51.1719 366.037 51.5724C365.296 51.9645 364.708 52.5099 364.273 53.2088C363.847 53.8991 363.634 54.6875 363.634 55.5739V68H360.617ZM381.647 68.4091C379.755 68.4091 378.123 67.9915 376.75 67.1562C375.387 66.3125 374.334 65.1364 373.593 63.6278C372.86 62.1108 372.493 60.3466 372.493 58.3352C372.493 56.3239 372.86 54.5511 373.593 53.017C374.334 51.4744 375.365 50.2727 376.686 49.4119C378.016 48.5426 379.567 48.108 381.34 48.108C382.363 48.108 383.373 48.2784 384.37 48.6193C385.367 48.9602 386.275 49.5142 387.093 50.2812C387.911 51.0398 388.563 52.0455 389.049 53.2983C389.534 54.5511 389.777 56.0937 389.777 57.9261V59.2045H374.641V56.5966H386.709C386.709 55.4886 386.488 54.5 386.044 53.6307C385.61 52.7614 384.988 52.0753 384.178 51.5724C383.377 51.0696 382.431 50.8182 381.34 50.8182C380.138 50.8182 379.098 51.1165 378.221 51.7131C377.351 52.3011 376.682 53.0682 376.213 54.0142C375.745 54.9602 375.51 55.9744 375.51 57.0568V58.7955C375.51 60.2784 375.766 61.5355 376.277 62.5668C376.797 63.5895 377.517 64.3693 378.438 64.9062C379.358 65.4347 380.428 65.6989 381.647 65.6989C382.439 65.6989 383.155 65.5881 383.794 65.3665C384.442 65.1364 385 64.7955 385.469 64.3438C385.938 63.8835 386.3 63.3125 386.556 62.6307L389.471 63.4489C389.164 64.4375 388.648 65.3068 387.924 66.0568C387.199 66.7983 386.304 67.3778 385.239 67.7955C384.174 68.2045 382.976 68.4091 381.647 68.4091Z"
               fill="white"
            />
         </svg>
      </Link>
   );
};
