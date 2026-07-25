const startFunc = ({ importLines, useLines }) => {

    const importMissInUse = importLines.map(loopImport => {
        const findUser = useLines.find(element => {
            return element.variableName === loopImport.variable
        });

        return {
            ...loopImport,
            isFound: findUser ? true : false,
            usedLine: findUser
        };
    });

    const useMissInImport = useLines.map(loopUse => {
        const findImport = importLines.find(element => {
            return element.variable === loopUse.variableName
        });

        return {
            ...loopUse,
            isFound: findImport ? true : false,
            usedLine: findImport
        };
    });

    return {
        importLines,
        useLines,
        importMissInUse,
        useMissInImport,
        summary: buildSummary({ importLines, useLines })
    };
};

const buildSummary = ({ importLines, useLines }) => {
    const importLineNumbers = importLines.map(element => {
        return element.lineNumber;
    });

    const useLineNumbers = useLines.map(element => {
        return element.lineNumber;
    });

    let returnObject = {};
    returnObject.importSummary = {};
    returnObject.importSummary.minLineNumber = Math.min(...importLineNumbers);
    returnObject.importSummary.maxLineNumber = Math.max(...importLineNumbers);
    returnObject.importSummary.lineCount = importLineNumbers.length;

    returnObject.consumeSummary = {};
    returnObject.consumeSummary.minLineNumber = Math.min(...useLineNumbers);
    returnObject.consumeSummary.maxLineNumber = Math.max(...useLineNumbers);
    returnObject.consumeSummary.lineCount = useLineNumbers.length;

    return returnObject;
};

export default startFunc;