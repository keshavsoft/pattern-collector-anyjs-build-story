import buildSummary from "./buildSummary.js";
import getAllLinesStory from "./totalLinesStory.js";
import buildLinesStory from "./buildLinesStory/index.js";

const startFunc = ({ importLines, useLines, allLines,
    exportLines, importLinesFromNpm }) => {

    let useMissInImport;
    let allLinesStory;
    let importLinesFromNpmStory;

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

    if (importLinesFromNpm) {
        importLinesFromNpmStory = buildLinesStory(importLinesFromNpm)
    };

    return {
        allLines,
        allLinesStory,
        importLines,
        useLines,
        importMissInUse,
        useMissInImport,
        exportLines,
        summary: buildSummary({
            importLines, useLines, exportLines,
            importLinesFromNpm
        }),
        importLinesFromNpm,
        importLinesFromNpmStory
    };
};

export default startFunc;