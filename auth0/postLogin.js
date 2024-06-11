/**
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
  const FORM_ID = 'ap_i6ydt7LxUb6gGAAxJNmkj6';

  api.prompt.render(FORM_ID);
}

/**
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onContinuePostLogin = async (event, api) => {
  const namespace = 'https://gansoft.io/';
  const {first_name, last_name, phone, country_code_iso} = event.user.user_metadata;

  if (event.authorization) {
    // Set claims 
    api.idToken.setCustomClaim(`${namespace}first_name`, first_name);
    api.idToken.setCustomClaim(`${namespace}last_name`, last_name);
    api.idToken.setCustomClaim(`${namespace}phone`, phone);
    api.idToken.setCustomClaim(`${namespace}country_code_iso `, country_code_iso);
  }
}