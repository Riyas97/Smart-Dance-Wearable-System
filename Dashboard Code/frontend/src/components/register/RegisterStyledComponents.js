import styled from 'styled-components';

// how to use grid with styled components: https://stackoverflow.com/questions/56900826/how-do-i-use-grid-template-areas-in-styled-components-with-react

export const RegisterDiv = styled.div`
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* border: 5px black solid; */
`;

export const RegisterMainDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    display: flex;
    background-color: black;
`;

export const RegisterOutsideDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    margin: 2% auto auto auto;
    /* border: 2px solid green; */
    height: 80%;
    max-width: 60%;
    background-color: #0c0c0c;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
`;

export const RegisterContentDiv = styled.div`
    flex: 1;
    /* margin: auto; */
    box-sizing: border-box;
`;

export const NavBarDiv = styled.div`
    /* border: 5px red solid; */
    box-sizing: border-box;
`;

export const HeaderTabDiv = styled.div`
    /* border: 5px red solid; */
    text-align: center;
    /* background-color: hsla(0, 0%, 0%, 0.1); */
    box-shadow: 1em;
`

export const HeaderH1 = styled.h1`
    font-size: 3em;
    color: hsla(0, 0%, 100%, 0.9);
    /* text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; */
`;

export const InfoP = styled.p`
    text-align: center;
    font-size: 1.25rem;
    color: hsla(0, 0%, 100%, 0.9);
`
export const VerticalTabDiv = styled.div`
    /* border: 5px blue solid; */
    text-align: center;
`