// -------------- Path Modules -------------//

// ---------const path = require('node:path'); -------------// We can also import this for absolute 
const path = require('node:path');

console.log(__filename); 
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.parse(__filename).ext);
console.log(path.parse(__dirname));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute('./add.js'));

console.log(path.join('folder1' , 'folder2' , 'index.html'));
console.log(path.join('/folder1' , 'folder2' , 'index.html'));
console.log(path.join('\folder1' , 'folder2' , 'index.html'));
console.log(path.join('folder1' , '//folder2' , 'index.html')); // normalises the path as it removes the double backslash
console.log(path.join(__dirname , './data.json'))

console.log(path.resolve('folder1' , 'folder2' , 'index.html')); // it will take us straight to absolute path for index.html
console.log(path.resolve('/folder1' , 'folder2' , 'index.html'));
console.log(path.resolve('\folder1' , 'folder2' , 'index.html'));
console.log(path.resolve('folder1' , '//folder2' , 'index.html')); // with "//" it starts the path from right there
console.log(path.resolve(__dirname , './data.json'))


