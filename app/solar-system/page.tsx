
import * as React from 'react';
import * as Solar from '@app/lib/solar-system';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home Page Root",
    description: "Page Root description",
}


export default function SolarSystem() {

    return (
        <div id="canvas-root"></div>
        //     <head>
        //     <meta charset="UTF-8" />
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //     <title>Solar system</title>
        //     <link rel="stylesheet" href="./main.css" />
        // </head>
        // <body>
        //     <div id="root"></div>
        //     <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.153.0/three.min.js"></script>
        //     <script src="./main.js"></script>
        // </body>
    )

}