import React, { useEffect } from 'react'
import Quagga from 'quagga'

import { Video, Container, ScanMarker } from './styles'

const Main = () => {

    const onDetected = result => {
        Quagga.offDetected(onDetected)

        let codeResult = result.codeResult.code
        console.log('Resultado da leitura :: ',codeResult)
        alert(codeResult)
    }
    useEffect(() => {
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
                    }
                },
                function (err) {
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log("Initialization finished. Ready to start");
                    Quagga.start();
                    Quagga.onDetected(onDetected)
                }
            );

        }
    }, [onDetected])

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