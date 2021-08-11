import {_createCalendarConnection, _existsCalendarConnection} from './_operations'
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req, res) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing create data'
    })
  }

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const createInput = isEmpty(data.data) ? undefined : data.data
  const includeInput = isEmpty(data.include) ? undefined : data.include
  
  const createArgs = {
    select: selectInput,
    include: includeInput,
    data: createInput
  }

  try {
    const calendarConnection = await _createCalendarConnection(createArgs)
    
    return res.status(200).json({
      message: 'CalendarConnection created.',
      data: calendarConnection
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

export default nc()
  .post(post)
