import styled from 'styled-components';

export const DashboardDiv = styled.div`
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
`;

export const NavbarDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    max-height: 62px;
    width: 100%;
    /* border: 2px solid green; */
`;

export const ContentDiv = styled.div`
    flex: 1;
    /* max-height: calc(100vh - 62px); */
    box-sizing: border-box;
    /* border: 2px solid red; */
`;