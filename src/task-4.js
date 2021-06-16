export default function runRover(commandsList) {
  const reg = /\d+/
  const obj = {
    x: 0,
    y: 0,
  }
  let path = 0

  if (!commandsList.length) return obj

  commandsList
    .filter(
      (el) =>
        el.command === 'turn left' ||
        el.command === 'turn right' ||
        el.command.startsWith('go')
    )
    .sort((a, b) => a.order - b.order)
    .map((el) => {
      el.command === 'turn right' && path++
      el.command === 'turn left' && path--

      switch (path % 4) {
        case 0:
          obj.y += +reg.exec(el.command)
          break;
        case -1:
          obj.x -= +reg.exec(el.command)
          break;
        case 1:
        case -3:
          obj.x += +reg.exec(el.command)
          break;
        case 2:
        case -2:
          obj.y -= +reg.exec(el.command)
          break;
      }
    })
  return obj
}
