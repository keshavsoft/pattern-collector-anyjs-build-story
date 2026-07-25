const startFunc = (allLines) => {

    const allLinesStory = allLines.map((element, loopIndex) => {
        return {
            line: element,
            lineNumber: loopIndex + 1
        };
    });

    return allLinesStory;
};

export default startFunc;