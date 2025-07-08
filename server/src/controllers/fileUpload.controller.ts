import { Request, Response } from "express";
import queue from "../utils/queue";

const fileUpload = async (req: Request, res: Response) => {
  console.log(req);

  try {
    await queue.add(
      "file-ready",
      JSON.stringify({
        fileName: req.file?.originalname,
        source: req.file?.destination,
        destination: req.file?.path,
      }),
    );

    res.json({
      msg: "uploaded",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "error in uploading file" });
  }
};

export default fileUpload;
