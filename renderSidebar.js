const fs = require('fs');
const path = require('path');


function render(startPath, ignorePaths, contentSidebar, depth) {
    fs.readdirSync(startPath).forEach(file => {
        const filePath = path.join(startPath, file);
        const stats = fs.statSync(filePath);
        if (!ignorePaths.includes(filePath)) {
            if (stats.isDirectory()) {
                // recursive call
                contentSidebar += `${'\t'.repeat(depth)}\* [${file}]()\n`;
                contentSidebar = render(filePath, ignorePaths, contentSidebar, depth + 1);
            } else {
                // add to list
                if (path.extname(filePath) === '.md') {
                    const matchValue = fs.readFileSync(filePath).toString().match(/^# ([\w \(\)]+)\n/);
                    contentSidebar += `${'\t'.repeat(depth)}\* `+
                        `[${matchValue === null ? 'INVALID TITLE' : matchValue[1]}](${filePath})\n`;
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
], '', 0));