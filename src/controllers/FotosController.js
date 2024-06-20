import multer from "multer";

import multerConfig from "../config/multerConfig";
import Foto from "../models/Foto";

const uploads = multer(multerConfig).single("foto");

class FotosController {
  store(req, res) {
    return uploads(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const dadosFoto = await Foto.create({
          originalname,
          filename,
          aluno_id,
        });

        return res.json(dadosFoto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

export default new FotosController();
