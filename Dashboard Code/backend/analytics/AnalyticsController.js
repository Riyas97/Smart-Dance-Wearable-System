const express = require('express');
const app = express();
const { authChecker } = require('../auth/Auth');
const { getAccumulatedData, 
    getAccumulatedMoves, 
    getAccumulatedPositions,
    getIndividualPositionStats,
    getIndividualMoveStats } = require('./Analytics');
    
module.exports = app;

app.get(
    '/data',
    async (req, res) => {
        try {
            console.log('ANALYTICS PRE-DATA');
            const accumulatedData = await getAccumulatedData();
            console.log('ANALYTICS DATA ', accumulatedData);
            return res.status(200).json(accumulatedData);
        } catch (error) {
            return res.status(403).json({ error });
        }
})

app.get(
    '/moves/summary',
    async (req, res) => {
        try {
            console.log('ANALYTICS PRE-MOVES');
            const accumulatedMoves = await getAccumulatedMoves();
            console.log('ANALYTICS MOVES ', accumulatedMoves);
            return res.status(200).json(accumulatedMoves);
        } catch (error) {
            return res.status(403).json({ error });
        }
})

app.get(
    '/positions/summary',
    async (req, res) => {
        try {
            console.log('ANALYTICS PRE-POSITIONS');
            const accumulatedPositions = await getAccumulatedPositions();
            console.log('ANALYTICS POSITIONS ', accumulatedPositions);
            return res.status(200).json(accumulatedPositions);
        } catch (error) {
            return res.status(403).json({ error });
        }
})

app.get(
    '/moves/stats',
    async (req, res) => {
        try {
            console.log('ANALYTICS Moves Stats');
            const individualMoveStats = await getIndividualMoveStats();
            return res.status(200).json(individualMoveStats);
        } catch (error) {
            return res.status(403).json({ error });
        }
});

app.get(
    '/positions/stats',
    async (req, res) => {
        try {
            console.log('ANALYTICS Positions Stats');
            const individualPositionStats = await getIndividualPositionStats();
            return res.status(200).json(individualPositionStats);
        } catch (error) {
            return res.status(403).json({ error });
        }
});
