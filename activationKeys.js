function activationKeys(input) {
  let key = input.shift();

  while (input[0] !== 'Generate') {

    let [name, p1, p2, p3] = input.shift().split('>>>');

    switch (name) {

      case 'Contains':
        if (key.includes(p1)) {
          console.log(`${key} contains ${p1}`);
        } else {
          console.log(`Substring not found!`);
        }
        break;

      case 'Flip': {
        let left = key.slice(0, p2);
        let fliped = key.slice(p2, p3);
        let right = key.slice(p3);

        if (p1 == 'Upper') {
          fliped = fliped.toUpperCase();
        } else {
          fliped = fliped.toLowerCase();
        }

        key = left + fliped + right;
      }

        console.log(key);
        break;

      case 'Slice':
        {
          let left = key.slice(0, p1);
          let right = key.slice(p2);

          key = left + right;
        }
        console.log(key);
        break;
    }
  }
  console.log(`Your activation key is: ${key}`);
}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate"])