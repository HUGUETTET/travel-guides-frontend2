import { type SchemaTypeDefinition } from 'sanity'
import { tag } from '../schemas/tag'
import { post } from '../schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
