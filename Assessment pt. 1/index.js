// Why does React utilize the virtual-dom?
//    React uses virtual DOM because it cuts makes updating the real DOM more
//      efficient and cost-effective. The virtual DOM does this by only updating the
//        real DOM once it has calculated the best method to go about updating.
//
// 2a How is data flowed in React? 2b. Why is React architected this way?
//    a. Data in React moves in a unidirectional flow.
//    b. React is architechted in this wy to ensure that data flows in a clean
//       in a clean and concise fashion.
//
// 3. What is the purpose for lifting state up in React? Give an example of this
//      We lift up state in order to make the state of the parent component
//        a single source of truth that can then be passed unto the children component(s)
//
//      You would need to use this when trying to sync two sibling components states.
//        They both would have their own local states that they cannot share, but
//          once the state is lifted up to the closest ancestor state, it can be passed to both
//
//
// 4. Why would a startup be interested in applying React-Router to a project? Explain in detail.
//      A startup would be interested in applying react router to a project because it doesnt render
//        as much data. This could save startup companies with a relatively small budget some time and expenses.
//
//
// 5. Can browsers read JSX? Why?
//      No, browsers cannot read JSX. They can't do this because there is no inherent implementation for
//        browsers to read nor undestand it. It is comparable to the relationship contemporary English and
//          olde English.
//
// 6. What is the significance of keys in React?
//      The primary function of keys is to help React differentiate between elements.
//        This is especially relevant when 'diffing' between virtual DOM and real DOM
//
// 7. What is the difference between Props and State?
//      Props are used to pass data from one component to another, while state is a local bank for data
//        that can ONLY effect it's respective component.
//
// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant.
//
// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )
//
// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })
//      The code above is mapping thru the objects which are in a state of "[1,2,3]". It is then taking it in as a
//        parameter "n" and returning it + an integer 1.
//
//
// 9. Given the array of strings: names, return a new array with each name properly capitalized. Must use .map()

 const names =  [“James”, “Joseph”, “Diamond”, “Gillian”]

 function properNames(names) {
   return names.map(el => {
     return el.charAt(0).toUpperCase() + el.substring(1).toLowerCase();
   })
 }

 console.log(properNames(names));
//
// 10. Create an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Function smallWordsOnly(arr) {}
