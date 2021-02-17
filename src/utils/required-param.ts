export default (paramName = ""): any => {
  if (paramName) {
    throw new Error(`Parameter "${paramName}" is required`);
  }

  throw new Error("Missing a required parameter");
};
