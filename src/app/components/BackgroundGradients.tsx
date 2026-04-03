import React from 'react';
import { imgGroup46890 } from '../../imports/svg-thtve';
import svgPaths from '../../imports/svg-cscsarvg7n';

export function BackgroundGradients() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0B0B0D]">
      {/* Main dark background is set on the container */}
      
      {/* Top Right Gold Glow - Adjusted for responsiveness */}
      <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] opacity-40 mix-blend-screen animate-pulse-slow">
         <svg className="w-full h-full" viewBox="0 0 979 979" fill="none">
            <g filter="url(#filter0_f_1_284)">
              <circle cx="489.5" cy="489.5" r="289.5" fill="#F9E4B7" fillOpacity="0.1" />
              <circle cx="489.5" cy="489.5" r="289" stroke="url(#paint0_linear_1_284)" />
            </g>
            <defs>
              <filter id="filter0_f_1_284" x="0" y="0" width="979" height="979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_284" />
              </filter>
              <linearGradient id="paint0_linear_1_284" x1="489.5" y1="200" x2="489.5" y2="779" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4AF37" />
                <stop offset="1" stopColor="#0A0A0A" />
              </linearGradient>
            </defs>
          </svg>
      </div>

      {/* Complex Wave Pattern - Centered/Left */}
      <div className="absolute top-0 left-[-10%] w-[120%] h-full opacity-30">
        <div className="w-full h-full" style={{ 
          maskImage: `url('${imgGroup46890}')`, 
          maskSize: 'contain', 
          maskRepeat: 'no-repeat',
          maskPosition: 'center'
        }}>
           <svg className="w-full h-full" viewBox="0 0 1156.69 1799.23" preserveAspectRatio="xMidYMid slice">
               {/* Reusing the paths from the import but simplifying structure for React */}
               <g>
                 <path d={svgPaths.p3767f800} fill="url(#paint0_linear_wave)" stroke="url(#paint1_linear_wave)" strokeWidth="2" />
                 {/* Adding a few key waves for the effect */}
                 <path d={svgPaths.p3756e500} fill="url(#paint2_linear_wave)" className="blur-sm" />
                 <path d={svgPaths.p29d3fc00} fill="url(#paint4_linear_wave)" className="blur-md" />
               </g>
               <defs>
                  <linearGradient id="paint0_linear_wave" x1="647" y1="340" x2="647" y2="1450" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E6BE8A" />
                    <stop offset="1" stopColor="#996515" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_wave" x1="647" y1="340" x2="647" y2="1450" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D4AF37" />
                    <stop offset="1" stopColor="#0A0A0A" />
                  </linearGradient>
                   <linearGradient id="paint2_linear_wave" x1="637" y1="340" x2="637" y2="1450" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E6BE8A" />
                    <stop offset="1" stopColor="#996515" />
                  </linearGradient>
                   <linearGradient id="paint4_linear_wave" x1="620" y1="341" x2="620" y2="1459" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E6BE8A" />
                    <stop offset="1" stopColor="#996515" />
                  </linearGradient>
               </defs>
           </svg>
        </div>
      </div>

      {/* Bottom Left Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[400px] opacity-40">
         <svg className="w-full h-full" viewBox="0 0 590 365" fill="none">
          <g filter="url(#filter_bottom_glow)">
            <path d={svgPaths.p373b5700} fill="#D4AF37" fillOpacity="0.5" />
          </g>
          <defs>
             <filter id="filter_bottom_glow" x="0" y="0" width="590" height="365" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
            </filter>
          </defs>
         </svg>
      </div>
    </div>
  );
}
