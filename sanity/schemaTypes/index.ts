// import { type SchemaTypeDefinition } from 'sanity'
// import { tag } from '../schemas/tag'
// import { post } from '../schemas/post'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [post, tag],
// }

import { type SchemaTypeDefinition } from 'sanity'
import post from "../schemas/post"
import { tag } from '../schemas/tag'
import destination from "../schemas/destination"
import category from "../schemas/category"
import guide from "../schemas/guide"
import newsletter from "../schemas/newsletter"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, destination, category, guide, newsletter],
}
