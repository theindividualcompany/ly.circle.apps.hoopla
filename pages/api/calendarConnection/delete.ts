import {_deleteCalendarConnection} from './_operations'
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req, res) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing delete data'
    })
  }
  
  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where

  const deleteArgs = {
    select: selectInput,
    where: whereInput
  }
  try {
    const calendarConnection = await _deleteCalendarConnection(deleteArgs)

    return res.status(200).json({
      message: 'CalendarConnection deleted.',
      data: calendarConnection
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

export default nc()
  .post(post)
