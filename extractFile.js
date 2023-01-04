function extractFile(path) {
    let dirs = path.split('\\');
    let file = dirs.pop();
    let lastComa = file.lastIndexOf('.');
    let fileName = file.substring(0,lastComa);
    let extension = file.substring(lastComa + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}



extractFile('C:\\Internal\\training-internal\\Template.pptx'
)