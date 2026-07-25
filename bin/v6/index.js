import buildSummary from "./buildSummary.js";
import getAllLinesStory from "./totalLinesStory.js";

const startFunc = ({ importLines, useLines, allLines }) => {
    let useMissInImport;
    let allLinesStory;

    const importMissInUse = importLines.map(loopImport => {
        let findUser;

        if (useLines) {
            findUser = useLines.find(element => {
                return element.variableName === loopImport.variable
            });
        };

        return {
            ...loopImport,
            isFound: findUser ? true : false,
            usedLine: findUser
        };
    });

    if (useLines) {
        useMissInImport = useLines.map(loopUse => {
            const findImport = importLines.find(element => {
                return element.variable === loopUse.variableName
            });

            return {
                ...loopUse,
                isFound: findImport ? true : false,
                usedLine: findImport
            };
        });
    };

    if (allLines) {
        allLinesStory = getAllLinesStory(allLines)
    };

    return {
        allLines,
        allLinesStory,
        importLines,
        useLines,
        importMissInUse,
        useMissInImport,
        summary: buildSummary({ importLines, useLines })
    };
};

export default startFunc;