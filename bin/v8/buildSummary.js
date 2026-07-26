const getLineSummary = (lines) => {
    const lineNumbers = lines.map(element => element.lineNumber);
    return {
        minLineNumber: Math.min(...lineNumbers),
        maxLineNumber: Math.max(...lineNumbers),
        lineCount: lineNumbers.length
    };
};

const startFunc = ({ importLines, useLines, exportLines, importLinesFromNpm }) => {
    let returnObject = {};

    returnObject.importSummary = {};
    if (importLines) {
        returnObject.importSummary = getLineSummary(importLines);
    }

    returnObject.consumeSummary = {};
    if (useLines) {
        returnObject.consumeSummary = getLineSummary(useLines);
    }

    returnObject.exportSummary = {};
    if (exportLines) {
        returnObject.exportSummary = getLineSummary(exportLines);
    }
    returnObject.exportSummary = {};
    if (exportLines) {
        returnObject.exportSummary = getLineSummary(exportLines);
    };

    returnObject.importFromNpmSummary = {};

    if (importLinesFromNpm) {
        returnObject.importFromNpmSummary = getLineSummary(importLinesFromNpm);
    };

    return returnObject;
};

export default startFunc;