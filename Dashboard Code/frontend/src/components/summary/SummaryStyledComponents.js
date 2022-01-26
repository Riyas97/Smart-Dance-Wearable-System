import styled from 'styled-components';

export const SummaryDiv = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* border: 5px solid red; */
`;

export const NavbarDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    max-height: 56px;
    width: 100%;
`;

export const SummaryMainDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 3px solid lightgoldenrodyellow; */
    width: 100%;
    height: 100%;
    /* max-width: 100%;
    max-height: 70%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: black;
`;

export const DataDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 2px solid lightgray;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    margin: 10px 2px;
    background-color: #1A1A1A;

    :hover {
        background-color: black;
    }
`;

export const IndividualChartsDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid blue; */
`;

export const TableDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid blue; */
`;

export const StatsDiv = styled.div`
    flex: 2;
    box-sizing: border-box;
    /* border-left: 1px solid lightgray; */
    display: flex;
    flex-direction: column;
`;

export const SummaryStatsDiv = styled.div`
    flex: 2;
    box-sizing: border-box;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
`;

export const IndividualTraineeStatsDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
`;

export const MovesDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 2px solid lightgray;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    margin: 10px 2px;

    background-color: #1A1A1A;

    :hover {
        background-color: black;
    }
`;

export const MovesSummaryDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid red; */
`;

export const MovesStatsDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid red; */
`;

export const PositionsDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    border: 2px solid lightgray;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    background-color: #1A1A1A;
    margin: 10px 2px;

    :hover {
        background-color: black;
    }
`;

export const PositionsSummaryDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid red; */
`;

export const PositionsStatsDiv = styled.div`
    flex: 1;
    box-sizing: border-box;
    /* border: 1px solid red; */
`;

