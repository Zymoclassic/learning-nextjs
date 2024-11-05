import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React from 'react'

const GsapTo = () => {
  return (
    <main>
        <h1 className="text-center mt-10">GSAP Animation Demo</h1>
        <div className="mt-20">
            <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
        </div>
    </main>
  )
}

export default GsapTo