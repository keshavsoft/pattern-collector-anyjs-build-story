import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../index.js';

import extractRegex from './extractRegex.js';

import pullImportLines from "pattern-collector-anyjs-pull-lines";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const { importLines, useLines, exportLines } = pullImportLines({
    fileContent,
    importRegex: extractRegex.importRegex,
    consumptionRegex: extractRegex.consumptionRegex,
    exportRegex: extractRegex.consumptionRegex
});

// console.log("aaaaaaaaaa : ", importLines, useLines, exportLines);

const k1 = defaultFunc({
    importLines,
    useLines,
    exportLines,
    showLog: false,
    showLogStep1: false
});

console.log("ssssssssss : ", k1);

