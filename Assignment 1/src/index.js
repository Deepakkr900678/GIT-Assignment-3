const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	fs.writeFile(fileName, fileContent, (err)=>{
		console.log(err)
	})
	// dont chnage function name
}
myFileWriter("file1.txt", "My name is Deepak Kumar");

const myFileReader = async (fileName) => {
	// write code here
	const data = await fs.readFile(fileName, "utf-8");
		console.log(data);
	// dont chnage function name
}
myFileReader("file1.txt");


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	const data = await fs.appendFile(fileName, fileContent);
	// dont chnage function name
}
myFileUpdater("file1.txt", " You are living in banglore");

const myFileDeleter = async (fileName) => {
	// write code here
	const data = await fs.unlink(fileName);
	// dont chnage function name
}
myFileDeleter("file1.txt")



module.exports = {myFileWriter,  myFileUpdater, myFileReader, myFileDeleter }