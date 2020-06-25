import styled from 'styled-components'


export const Video = styled.div`
    Video {
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        min-width: 100%;
        min-height:100%;
    }

    canvas {
        display:none;
    }
    `;

export const Container = styled.div`
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        min-width: 100%;
        min-height:100%;

        display:flex;
        flex-direction: column;
        align-items: center;

        .logo {
            margin-bottom: 20px;
        }
    `;

export const ScanMarker = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    align-items:center;
    width: 100%;
    justify-content:center;

    .enquadramento {
        width:95%;
        height:30%;
        border: solid 2px #FFF;

        justify-self:center;
    }

    .label {
        color: #fff;
        font-size: 14px;
        font-style: italic;
        margin-top: 20px;
    }
    `;