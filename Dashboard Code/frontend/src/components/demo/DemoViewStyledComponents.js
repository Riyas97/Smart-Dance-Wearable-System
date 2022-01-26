import styled from 'styled-components';

export const VideoBg = styled.video`
    object-fit: contain;
    width: 100%;
    height: 100%;
    /* padding-bottom: 56px; */
    margin: auto;
    margin-top: 6px;
`;

export const VideoDiv = styled.div`
    box-sizing: border-box;
    /* border: 2px solid red; */
    margin: auto;
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
`;

export const VideoContentDiv = styled.div`
    box-sizing: border-box;
    /* border: 2px solid red; */
    margin: auto;
    height: 60%;
    width: 60%;
    flex: 2;
`;

export const VideoInfoDiv = styled.div`
    box-sizing: border-box;
    /* border: 2px solid red; */
    margin: auto;
    flex: 1;
`;

export const VideoP = styled.p`
    text-align: center;
    color: white;
    margin: 20px;
`;