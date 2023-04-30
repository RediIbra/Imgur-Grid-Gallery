import { apiRequest, apiSuccess, apiFailure } from "./urlCallReducer";

export const urlRequest = (values) => ({
  type: apiRequest.type,
  payload: values,
});

export const urlSuccededFetch = (values) => ({
  type: apiSuccess.type,
  payload: values,
});

export const urlFailed = (error) => ({
  type: apiFailure.type,
  payload: error,
});
