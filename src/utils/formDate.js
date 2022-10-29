export default function formDate(prevDate) {
  const newDate = new Date(prevDate);
  return `${newDate.getFullYear()}년 ${newDate.getMonth()}월 ${newDate.getDay()}일`;
}
