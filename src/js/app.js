// TODO: write your code here
export default function statusCheck(dictionary) {
  let message;

  if (+dictionary.health > 50) {
    message = 'healthy';
  } else if (+dictionary.health > 15 && +dictionary.health <= 50) {
    message = 'wounded';
  } else if (+dictionary.health < 15) {
    message = 'critical';
  }

  return message;
}
