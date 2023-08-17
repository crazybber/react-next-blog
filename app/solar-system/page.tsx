
import * as React from 'react';
// import * as SolarSys from '@app/lib/solar-system';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solar system",
    description: "Solar system description",
}


export default function SolarSystem() {

    return (
        <div id="canvas-root"></div>
        //     <script src="./main.js"></script>
    )

}