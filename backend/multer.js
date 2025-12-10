import multer from "multer";
import fs from "fs";
import path from "path";

const createFolderIfNotExist = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

const eventImageFolder = path.join("uploads/eventImages");
const qrImageFolder = path.join("uploads/qrImages");

createFolderIfNotExist(eventImageFolder);
createFolderIfNotExist(qrImageFolder);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "eventImage") cb(null, eventImageFolder);
    else if (file.fieldname === "qrImage") cb(null, qrImageFolder);
    else cb(null, "uploads/"); // default
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });

