import { FC } from "react"

import { IconProps } from "types/index"

const BgPattern: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='768'
      height='504'
      viewBox='0 0 768 504'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='mask0_157_33666'
        style={{ maskType: "alpha" }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='-264'
        width='768'
        height='768'
      >
        <rect
          width='768'
          height='768'
          transform='translate(0 -264)'
          fill='url(#paint0_radial_157_33666)'
        />
      </mask>
      <g mask='url(#mask0_157_33666)'>
        <g clipPath='url(#clip0_157_33666)'>
          <g clipPath='url(#clip1_157_33666)'>
            <line x1='0.5' y1='-264' x2='0.5' y2='504' stroke='#EAECF0' />
            <line x1='48.5' y1='-264' x2='48.5' y2='504' stroke='#EAECF0' />
            <line x1='96.5' y1='-264' x2='96.5' y2='504' stroke='#EAECF0' />
            <line x1='144.5' y1='-264' x2='144.5' y2='504' stroke='#EAECF0' />
            <line x1='192.5' y1='-264' x2='192.5' y2='504' stroke='#EAECF0' />
            <line x1='240.5' y1='-264' x2='240.5' y2='504' stroke='#EAECF0' />
            <line x1='288.5' y1='-264' x2='288.5' y2='504' stroke='#EAECF0' />
            <line x1='336.5' y1='-264' x2='336.5' y2='504' stroke='#EAECF0' />
            <line x1='384.5' y1='-264' x2='384.5' y2='504' stroke='#EAECF0' />
            <line x1='432.5' y1='-264' x2='432.5' y2='504' stroke='#EAECF0' />
            <line x1='480.5' y1='-264' x2='480.5' y2='504' stroke='#EAECF0' />
            <line x1='528.5' y1='-264' x2='528.5' y2='504' stroke='#EAECF0' />
            <line x1='576.5' y1='-264' x2='576.5' y2='504' stroke='#EAECF0' />
            <line x1='624.5' y1='-264' x2='624.5' y2='504' stroke='#EAECF0' />
            <line x1='672.5' y1='-264' x2='672.5' y2='504' stroke='#EAECF0' />
            <line x1='720.5' y1='-264' x2='720.5' y2='504' stroke='#EAECF0' />
          </g>
          <rect x='0.5' y='-263.5' width='767' height='767' stroke='#EAECF0' />
          <g clipPath='url(#clip2_157_33666)'>
            <line y1='23.5' x2='768' y2='23.5' stroke='#EAECF0' />
            <line y1='71.5' x2='768' y2='71.5' stroke='#EAECF0' />
            <line y1='119.5' x2='768' y2='119.5' stroke='#EAECF0' />
            <line y1='167.5' x2='768' y2='167.5' stroke='#EAECF0' />
            <line y1='215.5' x2='768' y2='215.5' stroke='#EAECF0' />
            <line y1='263.5' x2='768' y2='263.5' stroke='#EAECF0' />
            <line y1='311.5' x2='768' y2='311.5' stroke='#EAECF0' />
            <line y1='359.5' x2='768' y2='359.5' stroke='#EAECF0' />
            <line y1='407.5' x2='768' y2='407.5' stroke='#EAECF0' />
            <line y1='455.5' x2='768' y2='455.5' stroke='#EAECF0' />
            <line y1='503.5' x2='768' y2='503.5' stroke='#EAECF0' />
          </g>
          <rect x='0.5' y='-263.5' width='767' height='767' stroke='#EAECF0' />
        </g>
      </g>
      <defs>
        <radialGradient
          id='paint0_radial_157_33666'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(384 384) rotate(90) scale(384 384)'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </radialGradient>
        <clipPath id='clip0_157_33666'>
          <rect
            width='768'
            height='768'
            fill='white'
            transform='translate(0 -264)'
          />
        </clipPath>
        <clipPath id='clip1_157_33666'>
          <rect y='-264' width='768' height='768' fill='white' />
        </clipPath>
        <clipPath id='clip2_157_33666'>
          <rect y='-264' width='768' height='768' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export { BgPattern }
