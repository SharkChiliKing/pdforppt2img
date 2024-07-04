const { exec } = require("child_process");

class Conver {
  constructor() {}

  static async pptx2pdf(enterPath, outputPath, type) {
    const types = type || "pdf";
    const command = `soffice --headless --convert-to ${types} --outdir "${outputPath}" "${enterPath}"`;
    try {
      const { stdout, stderr } = await new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve({ stdout, stderr });
        });
      });
      return {
        success: true,
        message: "File created successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  static async pdf2png(
    newFileNameBase,
    enterPath,
    outputPath,
    type,
    ratio,
    quality
  ) {
    const densitys = ratio || "100";
    const qualitys = quality || "50";
    const types = type || "png";
    const command = `convert -quiet -density ${densitys} -quality ${qualitys} "${enterPath}" "${outputPath}.${types}"`;
    try {
      const { stdout, stderr } = await new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve({ stdout, stderr });
        });
      });
      return {
        success: true,
        message: "File created successfully",
        name: newFileNameBase || "default",
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  Conver,
  pdf2png: Conver.pdf2png,
  pptx2pdf: Conver.pptx2pdf,
};
