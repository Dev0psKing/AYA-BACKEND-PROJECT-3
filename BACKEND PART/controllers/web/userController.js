import { User } from '../../models/User'

export const usersView = async (req, res) => {
  const users = await User.find({})

  res.render('users', { project_name: process.env.APP_NAME, users })
}

export const userView = async (req, res) => {
  const user = await User.findOne({ _id: req.params.userId })

  if (!user) {
    return res.render('404', { project_name: process.env.APP_NAME, error: 'user not found' })
  }
  
  return res.render('user-data', { project_name: process.env.APP_NAME, user })
}