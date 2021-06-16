
export default function boundingRect(coordsList) {
	const obj = {
		top: 0,
		bottom: 0,
		right: 0,
		left: 0
	}
	if (!coordsList.length) {
		return obj
	}
  obj.top = coordsList.reduce((acc, curr) => acc.y > curr.y ? acc : curr, 0).y
  obj.bottom = coordsList.reduce((acc, curr) => acc.y < curr.y ? acc : curr, 0).y
  obj.right = coordsList.reduce((acc, curr) => acc.x > curr.x ? acc : curr, 0).x
  obj.left = coordsList.reduce((acc, curr) => acc.x < curr.x ? acc : curr, 0).x

  return obj
}
