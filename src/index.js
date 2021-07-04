
  const { resolve } = require('path')
   const { readdirSync } = require('fs')


  const staticPropDefs = {
    requirePackageManifestFromStartPath: __dirname,
    requirePackageManifestFromEndPath: process.cwd(),
    manifestFileFullName: `package.json`,
    specialKeyPropValues: [
      [
        [ `nameField`, `name` ], {
          packageScope: `@theorylabs/`,
          packageNamePrefix: `better-errors`,
          packageNameRoot: `common`,
          packageNameSuffix: `constants`,
          packageNameDelim: `-`
        }
      ],
      [`mainField`, [`source`, `main`, `module`] ], {

     }
    ]
  }




  const startAtResolvedDirectoryPath = resolve(staticPropDefs.requirePackageManifestFromStartPath)
  const startAtPathResolvedDirectoryAndListAllFoundFiles = readdirSync(startAtResolvedDirectoryPath, { withFileTypes: true }).filter(item => !item.isDirectory()).map(item => item.name)

  const endAtResolvedDirectoryPath = resolve(staticPropDefs.requirePackageManifestFromEndPath)

  const computedPropDefs = {
    startAtDirectoryPath: startAtResolvedDirectoryPath,
    startPathDirectoryFilesListing: startAtPathResolvedDirectoryAndListAllFoundFiles,
    endAtDirectoryPath: endAtResolvedDirectoryPath,
    packageRootPath: resolve(staticPropDefs.requirePackageManifestFromStartPath, staticPropDefs.manifestFileFullName)
  }


  let packageProps = {
    manifestFile: {
      staticProps: { ...staticPropDefs },
      computedProps: { ...computedPropDefs }
    }
  }

const ConstantProps = () => {
  return {
    _PackageProps_: { ...packageProps }
  }
}


export default ConstantProps()
