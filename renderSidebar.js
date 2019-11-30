const fs = require('fs');
const path = require('path');


function render(startPath, ignorePaths, contentSidebar, depth) {
    fs.readdirSync(startPath).forEach(file => {
        const filePath = path.join(startPath, file);
        const stats = fs.statSync(filePath);
        if (!ignorePaths.includes(filePath)) {
            if (stats.isDirectory()) {
                // recursive call
                contentSidebar = render(filePath, ignorePaths, contentSidebar, depth + 1);
            } else {
                // add to list
                if (path.extname(filePath) === '.md') {
                    contentSidebar += '\t'.repeat(depth) + filePath + '\n';
                }
            }
        }
    });
    return contentSidebar;
}

console.log(render('./', ['.git', 'node_modules', 'assets'], '', 0));