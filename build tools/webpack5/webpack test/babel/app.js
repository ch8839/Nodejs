function main() {
  const list = [1, 2, 4]
  const cloneList = [...list]

  const User = {
    name: 'Tom',
    getName: () => {
      return this.name
    },
  }

  return User
}
