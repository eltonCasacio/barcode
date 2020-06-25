import React, { useState, useEffect } from 'react'
import Quagga from 'quagga'

import { Video, Container, ScanMarker } from './styles'

const Main = () => {

    const [readFilecode, setReadFilecode] = useState({})


    function initCam() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

            Quagga.init(
                {
                    inputStream: {
                        name: "Live",
                        type: "LiveStream",
                        target: document.querySelector('#camera'),
                        constraints: {
                            facingMode: 'environment',
                        }
                    },
                    numOfWorkers: 1,
                    locate: false,
                    decoder: {
                        readers: ["ean_reader"]
                    },
                },
                (err) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log("Initialization finished. Ready to start");
                    Quagga.start();
                }
            );

            Quagga.onDetected(function (result) {
                Quagga.offDetected()
                Quagga.stop()

                console.log('Resultado da leitura :: ', result.codeResult)
                setReadFilecode(result.codeResult)
            })
        }
    }

    useEffect(() => {
        initCam()
    }, [])

    useEffect(() => {
        initCam()
    }, [readFilecode])


    return (
        <>
            <Video id="camera" />
            <Container>
                <ScanMarker>
                    <div className="enquadramento" />
                    <p className="label">Aponte para o código de barras</p>
                </ScanMarker>

                <img
                    className="logo"
                    src="../../assets/robot-line.svg"
                    alt="Automagic"
                    width="137"
                    height="69"
                />

            </Container>
        </>
    )
}

export default Main