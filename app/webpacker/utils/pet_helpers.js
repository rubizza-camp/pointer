export const transformItems = (items) =>
{
    console.log(items.map(el => { console.log(el); return {id: el, text: el}}))
  return items.map(el => {return {id: el, text: el}})
}
export const prepareRequest = (hash) =>
{
    hash.times.map(el => {el.text})
}