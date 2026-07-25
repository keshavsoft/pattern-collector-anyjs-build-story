const startFunc = ({ importLines, useLines }) => {
    let useMissInImport;

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

    let returnObject = {};
    returnObject.importSummary = {};
    returnObject.importSummary.minLineNumber = Math.min(...importLineNumbers);
    returnObject.importSummary.maxLineNumber = Math.max(...importLineNumbers);
    returnObject.importSummary.lineCount = importLineNumbers.length;

    returnObject.consumeSummary = {};

    if (useLines) {
        const useLineNumbers = useLines.map(element => {
            return element.lineNumber;
        });

        returnObject.consumeSummary.minLineNumber = Math.min(...useLineNumbers);
        returnObject.consumeSummary.maxLineNumber = Math.max(...useLineNumbers);
        returnObject.consumeSummary.lineCount = useLineNumbers.length;
    };

    return returnObject;
};

export default startFunc;