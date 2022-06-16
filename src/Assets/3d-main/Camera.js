//This file controls the camera of the player

import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

export const Camera = () => {
    const ref = useRef()
    const { setDefaultCamera } = useThree()

    useEffect(()=>{
        setDefaultCamera(ref.current)
    })

    return <perspectiveCamera />
};







