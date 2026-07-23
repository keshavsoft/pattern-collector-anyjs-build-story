import fs from 'fs';
import path from 'path';

import pullImportLines from "pattern-collector-anyjs-pull-lines";

import defaultFunc from '../../index.js';

import extractRegex from './extractRegex.js';

const filePath = path.join(process.cwd(), "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

const { importLines, useLines } = pullImportLines({
    fileContent,
    importRegex: extractRegex.importRegex,
    consumptionRegex: extractRegex.consumptionRegex
});

const k1 = defaultFunc({
    importLines,
    useLines,
    showLog: false,
    showLogStep1: false
});

console.log("ssssssssss : ", k1);

