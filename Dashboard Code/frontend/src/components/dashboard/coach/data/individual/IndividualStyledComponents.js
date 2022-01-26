import styled from 'styled-components';

export const IndividualDiv = styled.div`
    border: 1px lightgray solid;
    box-sizing: border-box;
    flex: 1;
    text-align: center;
    border-radius: 20px;
    margin-right: 15px;
    background-color: #1A1A1A;

    :hover {
        background-color: black;
    }
`;

export const PreDisplay = styled.div`
    height: auto;
    margin: auto;
    padding: 1.5rem;
    text-align: center;
    position: relative;
`;

export const DisplayDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
    box-sizing: border-box;
`;

export const MiscDiv = styled.div`
    box-sizing: border-box;
    flex: 1;
`;
export const InfoDisplay = styled.div`
    margin: auto;
    box-sizing: border-box;
`;

export const PositionDisplay = styled.div`
    margin: auto;
    box-sizing: border-box;
`;

export const AccGraphDiv = styled.div`
    box-sizing: border-box;
    flex: 1;
`;

export const YPRGraphDiv = styled.div`
    box-sizing: border-box;
    flex: 1;
`;

export const WhiteH1 = styled.h1`
    color: white;
`;

export const WhiteH2 = styled.h2`
    color: white;
`;

export const WhiteH3 = styled.h3`
    color: white;
`;

export const WhiteP = styled.p`
    color: white;
`;
