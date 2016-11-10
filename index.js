console.log('hoi');
let lastSavePath = window.localStorage.getItem('lastSavePath') || '';
let filename = 'foo.txt';
let main = require('electron').remote;
console.log(main);
main.dialog.showSaveDialog({
  defaultPath: lastSavePath + filename,
  title: 'Download File',
  filters: [{
    name: "File",
    extensions: [filename.split('.').pop()]
  }]
}, (filePath) => {
  console.log(filePath);
  let fs = require('fs');
  let savedFileName = filePath.split('/').pop();
  window.localStorage.setItem('lastSavePath', filePath.replace(savedFileName, ''));
  fs.writeFile(filePath, 'foobar', 'binary', (err) => {});
});

// let request = require('request');

// // ①
// request(url, {
//   encoding: 'binary'
// }, (error, response, body) => {
//   if (!error) {
//     let remote = require('remote');

//     // ②
//     let lastSavePath = window.localStorage.getItem('lastSavePath') || '';

//     // ③
//     remote.require('dialog').showSaveDialog({
//       defaultPath: lastSavePath + filename,
//       title: 'Download File',
//       filters: [{
//         name: "File",
//         extensions: [filename.split('.').pop()]
//       }]
//     }, (filePath) => {

//       // ④
//       if (filePath) {
//         let fs = require('fs');

//         // ⑤
//         let savedFileName = filePath.split('/').pop();
//         window.localStorage.setItem('lastSavePath', filePath.replace(savedFileName, ''));
//         fs.writeFile(filePath, body, 'binary', (err) => {});
//       }
//     });
//   }
// });
