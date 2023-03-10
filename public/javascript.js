//     var enterButton = document.querySelector('#enterButton');
//     var againButton = document.querySelector('#againButton');
//     var output = document.getElementById('outputText');
//     var  num = document.querySelector(".num");
//
//     /*********************** the random number ***********************/
//
//     var randomNumber = Math.ceil(Math.random()*200);
//
//     function checkNumber(){
// /*********************** when user guesses the right number  ***********************/
//
//         var input = document.getElementById('userInput').value;
//     if(input === randomNumber){
//     output.innerHTML="You guessed right "+ ", "+ " it was "+ randomNumber;
//     output.style.color="green";
// }
//
// /*********************** When user guesses the wrong number  ***********************/
//
//
//
//
//
//     else if(input>randomNumber && input<200){
//     output.innerHTML="You guessed too high";
// }
//     else if(input<randomNumber && input>0){
//     output.innerHTML="You guessed too low";
//
// }
//
//     else{
//         let a = 0;
//         enterButton.addEventListener("click", ()=>{
//             a++;
//             a = (a < 10) ? "0" + a : a;
//             num.innerText = a;
//         });
// }
//
// }
//     enterButton.addEventListener('click', checkNumber);
//     againButton.addEventListener('click', function(){
//     location.reload();
// })


function myFunction() {
    /* the value */
    var the_value = document.querySelector('#inlineRadio8')


    /* my guess */
    var my_guess0 = document.querySelector('#inlineRadio0')
    var my_guess1 = document.querySelector('#inlineRadio1')
    var my_guess2 = document.querySelector('#inlineRadio2')
    var my_guess3 = document.querySelector('#inlineRadio3')
    var my_guess4 = document.querySelector('#inlineRadio4')
    var my_guess5 = document.querySelector('#inlineRadio5')


    if (my_guess0 === the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("True");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);


    } else if (my_guess0 !== the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("False");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess1 == the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("True");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess1 !== the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("False");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess2 == the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("True");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess2 !== the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("False");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess3 == the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("True");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess3 !== the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("False");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess4 == the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("True");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess4 !== the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("False");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess5 == the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("True");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    } else if (my_guess5 !== the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("False");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    }

}



function number() {
    /* the value */
    var the_value = document.getElementById('inlineRadio8') /* value  = 0 */


    /* my guess */
    var my_guess0 = document.querySelector('#inlineRadio0').defaultValue = "0" /* value  = 0 */
    var my_guess1 = document.querySelector('#inlineRadio1').defaultValue = "1"
    var my_guess2 = document.querySelector('#inlineRadio2').defaultValue = "2"
    var my_guess3 = document.querySelector('#inlineRadio3').defaultValue = "3"
    var my_guess4 = document.querySelector('#inlineRadio4').defaultValue = "4"
    var my_guess5 = document.querySelector('#inlineRadio5').defaultValue = "5"

    if (my_guess0 == the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("True");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);


    } else if (my_guess0 != the_value) {
        const node = document.createElement("li");
        const textnode = document.createTextNode("False");
        node.appendChild(textnode);
        document.getElementById("result").appendChild(node);
    }
    // else if (my_guess1 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    // else if (my_guess1 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    //
    //
    // else if (my_guess1 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    // else if (my_guess1 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    //
    //
    // else if (my_guess2 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    // else if (my_guess2 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    //
    //
    // else if (my_guess3 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    // else if (my_guess3 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    //
    //
    // else if (my_guess4 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    // else if (my_guess4 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    //
    //
    // else if (my_guess5 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
    // else if (my_guess5 != the_value) {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode("False");
    //     node.appendChild(textnode);
    //     document.getElementById("result").appendChild(node);
    // }
}
