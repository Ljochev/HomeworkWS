const fs = require("fs");
const makeId = require("../pkg/strings/index");

const MAX_FILESIZE = 5000000; // 1024 * 4096 = 4MB = 4194304 bytes
const ALLOWED_FILETYPES = [
    "image/jpeg",
    "image/png",
    "image/pjpeg",
    "image/gif",

];

const upload = async (req,res) => {
    console.log("files", req.files);
    if (MAX_FILESIZE < req.files.document.size) {
        return res.status(400).send("File exceeds max file size!");
    }
    if (!ALLOWED_FILETYPES.includes(req.files.document.mimetype)) {
        return res.status(400).send("File type is not allowed!");
    }

    let userDir = `user_${req.auth.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;

    if(!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }

    let fileName = `${makeId(6)}_${req.files.document.name}`;
    let filePath = `${userDirPath}/${fileName}`;

    req.files.document.mv(filePath, (err) => {
        if (err) {
            return res.status(500).send("Internal server error!");
        }
        return res.status(200).send( { file_name: fileName });
    });
};

const download = async (req, res) => {
  try {
    let userDir = `user_${req.auth.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;
    let filePath = `${userDirPath}/${req.params.filename}`;
    console.log("file path", filePath);
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found!");
    }
  
    res.download(filePath);
  } catch (err) {
    return res.status(500).send("internal server error");
  }
  };

const listFiles = async (req, res) => {
    try {
    let userDir = `user_${req.auth.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;
    if (!fs.existsSync(userDirPath)) {
        return res.status(404).send("File path not found!");
      }
      const files = fs.readdirSync(userDirPath);
      console.log(files, typeof files);
      return res.status(200).send(files);
    } catch (err) {
      return res.status(500).send("internal server error");
    }
      
};

const deleteFile = async (req, res) => {
  try {
    let userDir = `user_${req.auth.id}`;
    let userDirPath = `${__dirname}/../uploads/${userDir}`;
    let filePath = `${userDirPath}/${req.params.filename}`;
    if (!fs.existsSync(userDirPath)) {
        return res.status(404).send("File path not found!");
      }
      const files = fs.readdirSync(userDirPath);
      // if (!files.includes(req.params.filename)) {
        if( !fs.existsSync(userDirPath)) {
      console.log(`The file ${req.params.filename} is not the file directory!`);
      return res.status(200).send("File not found!");
      }
      fs.unlink(filePath, () => {
        console.log(`The file ${req.params.filename} was deleted!`);
      });
      if(files.length === 1)
      fs.rmdir(userDirPath, () => { 
        console.log("Folder Deleted!"); 
      }); 
      return res.status(200)
      .send(`Before deleting file ${req.params.filename}, there were these files in the directory: ${files}`);
    } catch (err) {
      return res.status(500).send("internal server error");
    }
};

  
  module.exports = {
    upload,
    download,
    listFiles,
    deleteFile,
  };