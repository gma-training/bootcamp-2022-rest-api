export function validatePresence(body, ...names) {
  for (const name of names) {
    if (!body[name]) {
      throw `'${name}' is required`
    }
  }
}
