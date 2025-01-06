const path = require('path')
const fs = require('fs')

const updateSingularFile = async (fileOject: any) => {
  //dir
  const dir = path.resolve(__dirname, '../public/upload')
  try {
    //create folder not exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    //file name
    const extName = path.extname(fileOject.name)
    const baseName = path.basename(fileOject.name, extName)

    const finalName = baseName + '-' + Date.now() + extName
    const uploadPath = dir + '/' + finalName

    //upload file
    await fileOject.mv(uploadPath)

    return {
      status: 200,
      message: finalName
    }
  } catch (error) {
    return {
      status: 500,
      message: JSON.stringify(error)
    }
  }
}

const updateMultipleFile = async (fileOject: any) => {
  //dir
  const dir = path.resolve(__dirname, '../public/upload')
  //create folder not exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  const res = []

  for (const item of fileOject) {
    try {
      //file name
      const extName = path.extname(item.name)
      const baseName = path.basename(item.name, extName)

      const finalName = baseName + '-' + Date.now() + extName
      const uploadPath = dir + '/' + finalName

      //upload file
      await item.mv(uploadPath)

      res.push({
        status: 200,
        message: finalName
      })
    } catch (error) {
      res.push({
        status: 500,
        message: JSON.stringify(error)
      })
    }
  }

  return res
}

module.exports = {
  updateSingularFile,
  updateMultipleFile
}
