export default function makeNum(arr) {
  let newArr = []
  arr.forEach((element) => {
    newArr = [...newArr, {
      lat: Number(element.attributes.lat),
      lng: Number(element.attributes.lng),
    }]
  })
  return newArr
}
