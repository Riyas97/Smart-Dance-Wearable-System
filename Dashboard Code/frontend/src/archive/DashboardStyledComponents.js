import styled from 'styled-components';

export const PreDashboardDiv = styled.div`
    display: grid;
    grid-template-areas: 
    '. . .'
    '. question .'
    '. . .';
    grid-gap: 1rem;
    grid-template-rows: 62px 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #FFFFF2;
    margin: auto;
    width: 100vw;
    height: 100vh;
`;

export const QuestionDiv = styled.div`
    grid-area: question;
    /* background-color: #ffece2; */
    text-align: center;
    margin: auto;
`;

export const CoverDiv = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: 2px solid pink;
`;

export const DashboardDiv = styled.div`
    box-sizing: border-box;
    border: 3px solid lightgoldenrodyellow;
    width: 100%;
    height: 68%;
    /* max-width: 100%;
    max-height: 70%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: #FFFFF2;
`;

export const SummaryDiv = styled.div`
    box-sizing: border-box;
    border: 2px solid lightblue;
    width: 100%;
    height: 32%;
    /* max-width: 100%;
    max-height: 30%; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
`;

export const PostDashboardDiv = styled.div`
    display: grid;
    grid-template-areas: 
    '. . .'
    '. results .'
    '. . .';
    grid-gap: 1rem;
    grid-template-rows: 0.25fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #FFFFF2;
    margin: auto;
    width: 100vw;
    height: 100vh;
`;

export const PostResultsDiv = styled.div`
    grid-area: results;
    background-color: #ffece2;
`;