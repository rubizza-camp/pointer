export default function getToken() {
  return document.querySelector('[name="csrf-token"]').content
}
