import DropdownDownload from '@/components/DropdownDownload'
import ThemeImage from '@/components/ThemeImage'
import { totalDownload } from '@/utils/format'
import Link from 'next/link'
import { useData } from 'nextra/data'

const LifeHackerLogo = () => {
  return (
    <svg
      width="116"
      height="32"
      viewBox="0 0 116 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_441_25128)">
        <path
          d="M1.69082 1.5459H0.144928V30.4541H1.69082V1.5459Z"
          fill="#363636"
        />
        <path
          d="M115.855 1.5459H114.309V30.4541H115.855V1.5459Z"
          fill="#363636"
        />
        <path
          d="M110.781 32V30.4541L5.01447 30.4541V32L110.781 32Z"
          fill="#363636"
        />
        <path
          d="M110.747 1.54589V0L4.98048 0V1.54589L110.747 1.54589Z"
          fill="#363636"
        />
        <path
          d="M44.0943 25.7291V6.28027H46.952V14.3244H49.1748V6.28027H52.0325V25.7291H49.1748V17.2616H46.952V25.7291H44.0943Z"
          fill="#363636"
        />
        <path
          d="M54.874 25.7291L57.8112 6.28027H61.304L64.2412 25.7291H61.4628L60.9336 21.76H58.1816L57.6524 25.7291H54.874ZM58.5785 18.7434H60.5366L59.7164 12.2075L59.6369 11.1755H59.4782L59.3988 12.2075L58.5785 18.7434Z"
          fill="#363636"
        />
        <path
          d="M70.7552 25.9408C69.9436 25.9408 69.2512 25.76 68.6779 25.3983C68.1135 25.0279 67.6812 24.5251 67.3813 23.8901C67.0903 23.255 66.9448 22.5362 66.9448 21.7335V10.2759C66.9448 9.4821 67.0947 8.76759 67.3946 8.13253C67.7033 7.4975 68.1443 6.99474 68.7176 6.62428C69.291 6.25383 69.9701 6.0686 70.7552 6.0686C71.3461 6.0686 71.8753 6.17886 72.3428 6.39936C72.8103 6.61988 73.2072 6.92418 73.5335 7.31227C73.8687 7.69154 74.1245 8.13694 74.3009 8.64855C74.4773 9.15128 74.5655 9.69373 74.5655 10.2759V12.9485H71.8929V10.2759C71.8929 9.8702 71.8091 9.53056 71.6416 9.25717C71.474 8.9837 71.1961 8.84697 70.808 8.84697C70.4553 8.84697 70.1994 8.98811 70.0406 9.27039C69.8819 9.55267 69.8025 9.88782 69.8025 10.2759V21.7335C69.8025 22.1216 69.8863 22.4568 70.0539 22.739C70.2303 23.0213 70.4817 23.1624 70.808 23.1624C71.2049 23.1624 71.4828 23.0257 71.6416 22.7522C71.8091 22.4788 71.8929 22.1393 71.8929 21.7335V19.0609H74.5655V21.7335C74.5655 22.5274 74.4111 23.2418 74.1024 23.8768C73.7937 24.5119 73.3527 25.0146 72.7794 25.3851C72.2149 25.7556 71.5402 25.9408 70.7552 25.9408Z"
          fill="#363636"
        />
        <path
          d="M77.8833 25.7291V6.28027H80.7417V12.7632V13.0808H80.8476L80.9797 12.7632L83.2027 6.28027H86.1392L83.5196 12.6839L86.4839 25.7291H83.5467L81.6414 16.8647H81.5618L80.7417 18.8492V25.7291H77.8833Z"
          fill="#363636"
        />
        <path
          d="M89.1297 25.7291V6.28027H95.6657V9.21742H91.9873V14.4567H94.6338V17.3145H91.9873V22.7919H95.6657V25.7291H89.1297Z"
          fill="#363636"
        />
        <path
          d="M99.1092 25.7291V6.28027H101.967C103.678 6.28027 104.94 6.75657 105.751 7.70917C106.563 8.65294 106.969 10.0466 106.969 11.89C106.969 12.9837 106.775 13.9319 106.386 14.7346C106.007 15.5284 105.544 16.1105 104.997 16.481L106.941 25.7291H104.084L102.47 17.5262H101.967V25.7291H99.1092ZM101.967 14.8801C102.496 14.8801 102.915 14.7654 103.224 14.5361C103.533 14.2979 103.753 13.9628 103.885 13.5305C104.018 13.0984 104.084 12.5868 104.084 11.9959C104.084 11.0697 103.929 10.3597 103.621 9.86577C103.321 9.36297 102.77 9.11161 101.967 9.11161V14.8801Z"
          fill="#363636"
        />
        <path
          d="M9.46567 25.736V6.30151H12.3213V23.0919H16.1025V25.736H9.46567Z"
          fill="url(#paint0_linear_441_25128)"
        />
        <path
          d="M18.5859 25.736V6.30151H21.4416V25.736H18.5859Z"
          fill="url(#paint1_linear_441_25128)"
        />
        <path
          d="M24.8916 25.736V6.30151H31.687V9.23652H27.7473V14.3397H30.3914V17.2748H27.7473V25.736H24.8916Z"
          fill="url(#paint2_linear_441_25128)"
        />
        <path
          d="M34.1668 25.736V6.30151H40.6978V9.23652H37.0225V14.4719H39.6666V17.3276H37.0225V22.801H40.6978V25.736H34.1668Z"
          fill="url(#paint3_linear_441_25128)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_441_25128"
          x1="9.49759"
          y1="16.0001"
          x2="40.7246"
          y2="16.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6FB538" />
          <stop offset="1" stopColor="#38B588" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_441_25128"
          x1="9.4976"
          y1="16.0001"
          x2="40.7246"
          y2="16.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6FB538" />
          <stop offset="1" stopColor="#38B588" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_441_25128"
          x1="9.49759"
          y1="16.0001"
          x2="40.7246"
          y2="16.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6FB538" />
          <stop offset="1" stopColor="#38B588" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_441_25128"
          x1="9.49758"
          y1="16.0001"
          x2="40.7246"
          y2="16.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6FB538" />
          <stop offset="1" stopColor="#38B588" />
        </linearGradient>
        <clipPath id="clip0_441_25128">
          <rect
            width="115.71"
            height="32"
            fill="white"
            transform="translate(0.144928)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

const QuoteIcon = () => {
  return (
    <div className="absolute ml-20 -mt-10 hidden lg:block">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.7939 65.5999H11.6294V38.1159C11.6294 30.7278 13.1071 25.1128 16.0623 21.2709C19.3131 17.2813 24.7804 14.991 32.4641 14.3999V27.477C29.8043 27.477 27.5879 28.5852 25.8147 30.8016C24.9281 31.9837 24.4849 34.2741 24.4849 37.6726V41.8839H33.7939V65.5999ZM68.3706 65.5999H46.2061V38.1159C46.2061 30.7278 47.5359 25.3344 50.1957 21.9358C53.742 17.5029 59.357 14.991 67.0407 14.3999V27.477C62.46 27.477 59.8742 29.7673 59.2831 34.348C59.1354 34.939 59.0615 36.0472 59.0615 37.6726V41.8839H68.3706V65.5999Z"
          fill="url(#paint0_linear_441_25144)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_441_25144"
            x1="-116.909"
            y1="39.9508"
            x2="143.834"
            y2="39.9508"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6FB538" />
            <stop offset="1" stopColor="#38B588" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const Hero = () => {
  const { lastVersion, lastRelease, release } = useData()

  return (
    <div className="nextra-wrap-container">
      <div className="mt-10 text-center">
        <div>
          <Link
            href="https://github.com/janhq/jan/releases"
            target="_blank"
            className="hidden lg:inline-block"
          >
            <div className="inline-flex my-2 py-2 pl-2 pr-4 rounded-lg bg-indigo-500 text-white">
              <div className="flex items-center rounded bg-white px-2">
                <span className="font-bold uppercase text-blue-600">new</span>
              </div>
              &nbsp;✨&nbsp; <b>{lastVersion}</b>&nbsp;is now live on
              GitHub.&nbsp;Check it out!
            </div>
          </Link>
        </div>

        <div className="py-10">
          <ThemeImage
            className="mx-auto h-full relative"
            source={{
              light: '/assets/images/homepage/icon.png',
              dark: '/assets/images/homepage/icon.png',
            }}
            priority
            alt="App screenshots"
            width={100}
            height={100}
          />
        </div>

        <div className="relative inline-block">
          <QuoteIcon />
          <h1 className="text-6xl lg:text-[80px] !font-normal leading-tight lg:leading-tight mt-2 font-serif">
            Chat with AI <br /> without privacy concerns
          </h1>

          <div className="py-8 flex justify-center">
            <LifeHackerLogo />
          </div>

          <p className="text-xl -mt-1 leading-relaxed text-black/60 dark:text-white/60">
            Jan is an open source ChatGPT-alternative that runs 100% offline.
          </p>
        </div>
        <div className="mb-4 mt-8">
          <DropdownDownload lastRelease={lastRelease} />
        </div>
        <p className="mt-6 text-black/60 dark:text-white/60">
          <span className="text-[#EDA703] font-semibold">
            {totalDownload(release)}+
          </span>
          &nbsp;downloads | Free & Open Source
        </p>
        <div className="w-4/5 mx-auto mt-10 relative">
          <ThemeImage
            className="absolute object-cover w-full object-center mx-auto h-full top-0 left-0 scale-150"
            source={{
              light: '/assets/images/homepage/glow.png',
              dark: '/assets/images/homepage/glow.png',
            }}
            priority
            alt="App screenshots"
            width={800}
            height={800}
          />
          <ThemeImage
            className="object-cover w-full object-center mx-auto h-full relative"
            source={{
              light: '/assets/images/homepage/app-frame-light-fixed.png',
              dark: '/assets/images/homepage/app-frame-light-fixed.png',
            }}
            priority
            alt="App screenshots"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
