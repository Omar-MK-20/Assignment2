const path = require('node:path');
const fsP = require('node:fs/promises');
const fs = require('node:fs');

//#region 1. Write a function that logs the current file path and directory.

function currentFilePathAndDirectory()
{
    console.log({ File: __filename, Dir: __dirname });
}

// currentFilePathAndDirectory()

//#endregion


//#region 2. Write a function that takes a file path and returns its file name.

function getFileName(filePath)
{
    return path.basename(filePath);
}

// console.log(getFileName("/user/files/report.pdf"))


//#endregion


//#region 3. Write a function that builds a path from an object.

function BuildPath(pathObject)
{
    return path.format(pathObject);
}

// console.log(BuildPath({ dir: "folder", name: "app", ext: ".js" }))

//#endregion


//#region 4. Write a function that returns the file extension from a given file path.

function getFileExtension(filePath)
{
    return path.extname(filePath);
}

// console.log(getFileExtension("/docs/readme.md"))

//#endregion


//#region 5. Write a function that parses a given path and returns its name and ext.

function getFileNameAndExt(filePath)
{
    const { name: Name, ext: Ext } = path.parse(filePath);
    return { Name, Ext };
}

// console.log(getFileNameAndExt("/home/app/main.js"))

//#endregion


//#region 6. Write a function that checks whether a given path is absolute.

function isAbsolute(filePath)
{
    return path.isAbsolute(filePath);
}

// console.log(isAbsolute("/home/user/file.txt"))

//#endregion


//#region 7. Write a function that joins multiple segments.

function joinSegments(...filePaths)
{
    return path.join(...filePaths);
}

// console.log(joinSegments("src","components", "App.js"))

//#endregion


//#region 8. Write a function that resolves a relative path to an absolute one.

function getAbsolute(filePath)
{
    return path.resolve(filePath);
}

// console.log(getAbsolute("./index.js"))

//#endregion


//#region 9. Write a function that joins two paths.

function joinPaths(filePath1, filePath2)
{
    return path.join(filePath1, filePath2);
}

// console.log(joinPaths("/folder1", "folder2/file.txt"))

//#endregion


//#region 10. Write a function that deletes a file asynchronously.

async function deleteFile(filePath)
{
    try
    {
        await fsP.unlink(filePath);
        console.log(`The ${getFileName(filePath)} is deleted.`);
    }
    catch (error)
    {
        console.log(error);
    }

}

// deleteFile("folder1/folder2/test.txt")

//#endregion


//#region 11. Write a function that creates a folder synchronously.

// function createFolder(path)
// {
//     fs.mkdir()
// }
















