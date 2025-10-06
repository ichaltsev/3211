#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build', 'static', 'js');
const BUDGET_KB = 350; // adjust as needed

try {
  const files = fs.readdirSync(buildDir).filter(f => f.endsWith('.js'));
  const main = files.find(f => f.includes('main')) || files[0];
  if (!main) process.exit(0);
  const stat = fs.statSync(path.join(buildDir, main));
  const sizeKb = Math.round(stat.size / 1024);
  if (sizeKb > BUDGET_KB) {
    console.warn(`Bundle budget warning: ${main} is ${sizeKb}KB (budget ${BUDGET_KB}KB)`);
  } else {
    console.log(`Bundle size OK: ${main} is ${sizeKb}KB (budget ${BUDGET_KB}KB)`);
  }
} catch (e) {
  // no-op if build artifacts not present
}