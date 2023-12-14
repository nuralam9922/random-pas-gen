// copy button 
const password_showing_input = document.getElementById("password_showing_input");
let copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", function () {
     copyBtn.textContent = "Copyed";
     password_showing_input.style.color = "rgb(174, 174, 101)";
     password_showing_input.setSelectionRange(0, 99999); // For mobile devices

     // Copy the text inside the text field
     navigator.clipboard.writeText(password_showing_input.value);

});

// Random pasword logic 

// All valrables for genrate a password 
const alphabets = "abcdefghijklmnopqrstuvwxyz";
const capitalAlphabets = alphabets.toUpperCase();
const numbers = "01234567889";
const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// generator_Password function 
function generator_Password() {
     const p_Range = document.getElementById("p_Range");
     const capitalize_Input = document.getElementById("capitalize_Input");
     const number_Input = document.getElementById("number_Input");
     const special_Characters = document.getElementById("special_Characters");
     let password = "";
     password_showing_input.value = "";



     for (let index = 0; index < parseInt(p_Range.value); index++) {

          if (capitalize_Input.checked && number_Input.checked && special_Characters.checked) {
               password += alphabets[Math.floor(Math.random() * 26)];
               password += capitalAlphabets[Math.floor(Math.random() * 26)];
               password += numbers[Math.floor(Math.random() * 10)];
               password += specialCharacters[Math.floor(Math.random() * 26)];
          }


          if (capitalize_Input.checked && number_Input.checked) {
               password += alphabets[Math.floor(Math.random() * 26)];
               password += capitalAlphabets[Math.floor(Math.random() * 26)];
               password += numbers[Math.floor(Math.random() * 10)];

          }
          if ( number_Input.checked && special_Characters.checked) {
               password += alphabets[Math.floor(Math.random() * 26)];
               password += specialCharacters[Math.floor(Math.random() * 26)];
               password += numbers[Math.floor(Math.random() * 10)];

          }



          else if (capitalize_Input.checked) {
               password += capitalAlphabets[Math.floor(Math.random() * 26)] + alphabets[Math.floor(Math.random() * 26)];
          }
          else if (number_Input.checked) {
               password += numbers[Math.floor(Math.random() * 10)] + alphabets[Math.floor(Math.random() * 26)];
          }
          else if (special_Characters.checked) {
               password += specialCharacters[Math.floor(Math.random() * 26)] + alphabets[Math.floor(Math.random() * 26)];
          }
          else {
               password += alphabets[Math.floor(Math.random() * 26)];
          }
     }













     password_showing_input.value = password.substring(0, parseInt(p_Range.value));

};

generator_Password();

// function for range input i we incrize range then the value showing reale time in the input 
// fild right side
const p_Range = document.getElementById("p_Range");
const input_Range_Number = document.getElementById("input-range-number");
p_Range.addEventListener("input", () => {
     input_Range_Number.textContent = p_Range.value
})

// generate button function 
const generate_btn = document.getElementById("generate_btn")
generate_btn.onclick = function () {
     generator_Password();
};