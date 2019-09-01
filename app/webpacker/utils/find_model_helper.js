import { find } from 'lodash'

const findModel = (included, relation) => find(
  included,
  model => (
    model.type === relation.data.type && model.id === relation.data.id
  )
)

export default findModel
