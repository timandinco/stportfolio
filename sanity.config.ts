import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sp-nextjs-site',
  title: 'SP Next.js Site',

  projectId: 'sxwpo1sg',
  dataset: 'production',
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
