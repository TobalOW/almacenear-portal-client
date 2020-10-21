export default (paramName = "") => {
  if (paramName) {
    throw new Error(`Parameter "${paramName}" is required`);
  }

  throw new Error("Missing a required parameter");
};
