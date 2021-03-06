export function fetchToolsRequest(params) {
  return {
    type: '@tool/FETCH_REQUEST',
    payload: { params },
  };
}

export function fetchToolsSuccess(data) {
  return {
    type: '@tool/FETCH_SUCCESS',
    payload: { data },
  };
}

export function addToolRequest(title, link, description, tags) {
  return {
    type: '@tool/ADD_REQUEST',
    payload: { title, link, description, tags },
  };
}

export function updateToolRequest(id, title, link, description, tags) {
  return {
    type: '@tool/UPDATE_REQUEST',
    payload: { id, title, link, description, tags },
  };
}

export function removeToolRequest(id, title, link, description, tags) {
  return {
    type: '@tool/REMOVE_REQUEST',
    payload: { id, title, link, description, tags },
  };
}

export function actionFailure() {
  return {
    type: '@tool/FAILURE',
  };
}
