import { apiRequest, apiSuccess, apiFailure } from "./urlCallReducer";

export const urlRequest = (values) => ({
  type: apiRequest,
  payload: values,
});

export const urlSucceded = (user) => ({
  type: apiSuccess.type,
  payload: user,
});

export const urlFailed = (error) => ({
  type: apiFailure.type,
  payload: error,
});
