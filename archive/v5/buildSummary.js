const startFunc = ({ importLines, useLines }) => {
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