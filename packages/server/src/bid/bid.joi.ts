import * as Joi from 'joi';

const name = Joi.string();
const time_window = Joi.number();
const start_price = Joi.number();

export const createBidItemValidation = Joi.object().keys({
  name: name.required(),
  time_window: time_window.required(),
  start_price: start_price.required(),
});

export const updateBidItemValidation = Joi.object().keys({
  name: name.optional(),
  time_window: time_window.optional(),
  start_price: start_price.optional(),
});

export const updateBidPriceValidation = Joi.object().keys({
  start_price: start_price.required(),
});
