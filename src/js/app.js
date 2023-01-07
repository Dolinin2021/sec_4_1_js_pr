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

export function sortDictionary(dictionary) {
  return dictionary.sort((item1, item2) => item2.health - item1.health);
}
