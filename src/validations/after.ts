import { body } from 'express-validator'

export const afterValidator = [
  body('name').notEmpty().withMessage('name is required'),
  body('local').notEmpty().withMessage('local is required'),
  body('hour').notEmpty().withMessage('hour is required'),
  body('payment').notEmpty().withMessage('payment is required'),
  body('stars').notEmpty().withMessage('stars is required'),
  body('pic').notEmpty().withMessage('pic is required'),
  body('phone').notEmpty().withMessage('phone is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('indicator').notEmpty().withMessage('indicator is required'),
]
