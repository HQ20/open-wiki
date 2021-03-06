const fs = require('fs');
const path = require('path');
const { readSync } = require('node-yaml')

const topicsYaml = readSync('topics.yaml');
const emojiYaml = readSync('emojis.yaml');


function render(startPath, ignorePaths, contentSidebar, depth) {
    fs.readdirSync(startPath).forEach(file => {
        const filePath = path.join(startPath, file);
        const stats = fs.statSync(filePath);
        if (!ignorePaths.includes(filePath)) {
            if (stats.isDirectory()) {
                // recursive call
                const matchTopic = topicsYaml[file] !== undefined ? topicsYaml[file] : file;
                contentSidebar += `${'\t'.repeat(depth)}\* [**${matchTopic}**](${path.join(filePath, file + '.md')})\n`;
                contentSidebar = render(filePath, ignorePaths, contentSidebar, depth + 1);
            } else {
                // add to list
                if (path.extname(filePath) === '.md') {
                    const matchValue = fs.readFileSync(filePath).toString().match(/^# ([\w: \(\)]+)\n/);
                    const fileNameDashed = path.basename(filePath, '.md');
                    // ignore the file with same name as folder
                    if (startPath.indexOf(fileNameDashed) >= 0) {
                        return;
                    }
                    let matchEmoji = emojiYaml[fileNameDashed];
                    contentSidebar += `${'\t'.repeat(depth)}\* ` +
                        `[${matchEmoji !== undefined ? (matchEmoji + ' ') : ''}` +
                        `${matchValue === null ? 'INVALID TITLE' : matchValue[1]}](${filePath})\n`;
                }
            }
        }
    });
    return contentSidebar;
}

function renderBySection(startPath, ignorePaths, folderOrder, contentSidebar, depth) {
    folderOrder.forEach((currentFolder) => {
        const matchTopic = topicsYaml[currentFolder] !== undefined ? topicsYaml[currentFolder] : currentFolder;
        contentSidebar += `${'\t'.repeat(depth)}\* [**${matchTopic}**](${path.join(currentFolder, currentFolder + '.md')})\n`;
        contentSidebar = render(path.join(startPath, currentFolder), ignorePaths, contentSidebar, depth + 1);
    })
    return contentSidebar;
}

fs.writeFileSync('_sidebar.md', renderBySection('./', [
    '.git',
    'node_modules',
    'assets',
    '_sidebar.md',
    '_404.md',
    'README.md',
    'CONTRIBUTING.md',
],
    [
        'welcome',
        '101',
        'blockchain',
        'nodejs',
    ], '', 0));