import fs from 'fs';
import path from 'path';

import defaultFunc from '../../index.js';

const filePath = path.join(process.cwd(), "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

const k1 = defaultFunc({ fileContent });

console.log("ssssssssss : ", JSON.stringify(k1, null, 2));

