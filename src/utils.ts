export function weakUUID() {
  const timestamp = new Date().getTime();

  // Generate a random string for the remaining part of the UUID
  const randomPart = Math.floor(Math.random() * 1000000000).toString();

  // Concatenate the timestamp and random parts
  const uuid = `${timestamp}-${randomPart}`;

  return uuid;
}
