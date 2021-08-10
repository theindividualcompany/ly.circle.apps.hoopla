import { _getAccount } from './_operations'
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req, res) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include

  const findOneArgs = {
    select: selectInput,
    where: whereInput,
    include: includeInput
  }

  try {
    const account = await _getAccount(findOneArgs)

    return res.status(200).json({ data: account })
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default nc()
  .post(post)