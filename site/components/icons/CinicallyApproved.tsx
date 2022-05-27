const ClinicallyApproved = ({ ...props }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="none" cx="243.6" cy="149.73" r="80.53" stroke="var(--accent-1)"
              strokeMiterlimit={10}
              strokeWidth={20} />
      <circle fill="none" cx="186.08" cy="370.08" r="27.61" stroke="var(--accent-1)"
              strokeMiterlimit={10}
              strokeWidth={20}/>
      <path
        fill="none"
        d="M275.36,397.81a46.6,46.6,0,0,1-5.55-21.39c-.43-23,15.34-42,35.24-42.36s36.37,18,36.8,41a46.39,46.39,0,0,1-5,22"
        stroke="var(--accent-1)"
        strokeMiterlimit={10}
        strokeWidth={20}
      />
      <path
        fill="none"
        d="M394.34,410.5c.11-34.22,5.67-70.72-9.06-102.88C375,285.14,355.6,264,331.07,260.84c-9.29-1.2-55.31,12.61-85.22,10.4H243.6c-29.91,2.21-75.93-11.6-85.22-10.4-24.52,3.16-43.91,24.3-54.21,46.78-14.72,32.16-9.16,68.66-9,102.88"
        stroke="var(--accent-1)"
        strokeMiterlimit={10}
        strokeWidth={20}
      />
      <rect fill="var(--accent-1)" x="176.88" y="268.85" width="18.41" height="73.63" />
      <rect fill="var(--accent-1)" x="296.52" y="264.24" width="18.41" height="69.02" />
    </svg>
  )
}

export default ClinicallyApproved
