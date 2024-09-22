import fs from 'node:fs';
import { StatusCodes } from 'http-status-codes';
import { v2 as cloudinary } from 'cloudinary';

const upload = async (req, res) => {
  const uploadResult = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: 'products',
    }
  );

  fs.unlinkSync(req.file.path);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: uploadResult.url } });
};

export { upload };
