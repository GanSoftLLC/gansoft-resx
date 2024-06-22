/**
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onExecutePostLogin = async (event, api) => {
  api.prompt.render(event.secrets.FORM_ID);
}

/**
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
exports.onContinuePostLogin = async (event, api) => {
  const {first_name, last_name, phone, country_code} = event.user.user_metadata;

  if (event.authorization) {
    api.idToken.setCustomClaim(`given_name`, first_name);
    api.idToken.setCustomClaim(`family_name`, last_name);
    api.idToken.setCustomClaim(`phone_number`, phone.replaceAll(" ", ""));
    let names = [first_name, last_name];
    api.idToken.setCustomClaim(`name`, names.join(" "));
    // Set Custom Claims
    api.idToken.setCustomClaim(`country_code`, country_code);
  }
}