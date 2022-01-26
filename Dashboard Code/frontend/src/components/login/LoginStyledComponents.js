import styled from 'styled-components';

export const LoginDiv = styled.div`
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
`;

export const NavBarDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    max-height: 62px;
    width: 100%;
`;

export const MainDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    display: flex;
    background-color: black;
    /* border: 2px solid red; */
`;

export const ContentDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    margin: 2% auto auto auto;
    /* border: 2px solid green; */
    height: 75%;
    max-width: 60%;
    background-color: #0c0c0c;
    padding: 10px;
    display: flex;
    flex-direction: row;
    border-radius: 30px;
`;

export const LoginMainFormDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 2px solid yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginH1Div = styled.div`
    width: 50%;
    /* margin: auto; */
    box-sizing: border-box;
    /* border: 2px solid pink; */
    text-align: center;

    /* position: relative; */
    /* flex: 1; */
`;

export const LoginFormDiv = styled.div`
    /* flex: 1; */
    box-sizing: border-box;
    /* margin: auto; */
    /* border: 2px solid yellow; */
    text-align: center;
    align-content: center;
    border-radius: 30px;
    padding-top: 10px;
    background-color: #191919;

`;

export const IndividualField = styled.div`
    margin: 15px;
    box-sizing: border-box;
    text-align: center;
    /* border: 2px solid green; */
`;

export const LoginAttemptFailedDiv = styled.div`

`;

export const LoginAttemptFailedText = styled.text`
    color: red
`;

export const LeftContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const RightContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SideContentDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginH2Div = styled.div`
    width: 80%;
    /* margin: auto; */
    box-sizing: border-box;
    /* border: 2px solid pink; */
    text-align: center;
    position: relative;
    /* flex: 1; */
    padding-bottom: 10px;
`;

export const LoginH1 = styled.h1`
    color: white; 
`;

export const LoginH2 = styled.h2`
    color: white;
`;

export const GIFDiv = styled.div`
    /* flex: 3; */
    /* margin: auto; */
    box-sizing: border-box;
    overflow: hidden;

`;

export const Video = styled.video`
    object-fit: cover;
    width: 400px;
    height: 300px;
`;