const Plant = ({ ...props }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        d="M90,388.5s17.75-110.81,202.52-127.27"
        stroke="var(--accent-1)"
        strokeMiterlimit={10}
        strokeWidth={20}
      />
      <path
        fill="none"
        d="M156.63,310.28a90.16,90.16,0,0,0,13.88,26.34c20.43,26,53.16,35.27,85,31.38,76.23-9.3,125.1-63.11,144.26-134.62q2.56-9.58,4.53-19.31c7.28-35.78,7.1-73,2-109,0,0-45.29,71.44-132.29,71.44-26.51,0-55.59-7.51-80.56,4.81C151.22,202.12,141.25,265.52,156.63,310.28Z"
        stroke="var(--accent-1)"
        strokeMiterlimit={10}
        strokeWidth={20}
      />
    </svg>
  )
}

export default Plant
