const { updateSingularFile, updateMultipleFile } = require('~/services/upload.service')

const uploadController = {
  uploadSingular: async (req: any, res: any) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.')
    }
    const { status, message } = await updateSingularFile(req.files.image)
    res.status(status).send(message)
  },
  uploadMultiple: async (req: any, res: any) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.')
    }
    if (Array.isArray(req.files.image)) {
      const result = await updateMultipleFile(req.files.image)
      res.send({ result })
    } else {
      const { status, message } = await updateSingularFile(req.files.image)
      res.status(status).send(message)
    }
  }
}

module.exports = uploadController
