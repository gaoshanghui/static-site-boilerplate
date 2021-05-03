import sub from './sub'
import _ from 'lodash'

const scriptStart = 'Script has been imported. Happy coding!';

const greeting = (inputText) => {
  console.log(scriptStart); 
}

greeting();
sub.sayHello();

_.partition([1, 2, 3, 4], n => n % 2);