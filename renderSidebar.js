const fs = require('fs');
const path = require('path');
const { readSync } = require("node-yaml")
 
const topicsYaml = readSync("topics.yaml");
const emojiYaml = readSync("emojis.yaml");


function render(startPath, ignorePaths, contentSidebar, depth) {
    fs.readdirSync(startPath).forEach(file => {
        const filePath = path.join(startPath, file);
        const stats = fs.statSync(filePath);
        if (!ignorePaths.includes(filePath)) {
            if (stats.isDirectory()) {
                // recursive call
                let matchTopic = topicsYaml[file] !== undefined ? topicsYaml[file] : file;
                contentSidebar += `${'\t'.repeat(depth)}\* **${matchTopic}**\n`;
                contentSidebar = render(filePath, ignorePaths, contentSidebar, depth + 1);
            } else {
                // add to list
                if (path.extname(filePath) === '.md') {
                    const matchValue = fs.readFileSync(filePath).toString().match(/^# ([\w: \(\)]+)\n/);
                    let matchEmoji;
                    if (matchValue[1] !== null) {
                        matchEmoji = emojiYaml[matchValue[1].toLowerCase()];
                    }
                    contentSidebar += `${'\t'.repeat(depth)}\* `+
                        `[${matchEmoji !== undefined ? (':' + matchEmoji + ': ') : ''}` +
                        `${matchValue === null ? 'INVALID TITLE' : matchValue[1]}](${filePath})\n`;
                }
            }
        }
    });
    return contentSidebar;
}

fs.writeFileSync('_sidebar.md', render('./', [
    '.git',
    'node_modules',
    'assets',
    '_sidebar.md',
    '_404.md',
    'README.md',
    'CONTRIBUTING.md',
], '', 0));