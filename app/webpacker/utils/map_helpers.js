export default function makeNum(arr) {
  return arr.map(element => ({
    lat: Number(element.attributes.lat),
    lng: Number(element.attributes.lng),
  }))
}
