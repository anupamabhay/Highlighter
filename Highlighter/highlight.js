//Grab the text, textbox and the button
const text = document.getElementById('dummyText');
const wordCount = document.getElementById('wordCount');
const highlightBtn = document.getElementById('highlightBtn');
//Function that returns the input value
const getCount = () => wordCount.value;
//Event listener on button click for highlighting the words
highlightBtn.addEventListener("click", function(e){
    let count = getCount();
    console.log(count);
    hightLightText(count);
    clearText();
});
//Function that highlights the words
const hightLightText = (count) => {
    const checkWords = word => {
        if(word.length >= count){
            return "<span class=highlight>"+ word + "</span>";
        }
        return word;
    }
    text.innerHTML = text.innerText
                    .trim()
                    .split(' ')
                    .map(checkWords)
                    .join(' ');
}
//function that clears the textbox after highlighting
const clearText = () => {
     const textInput = document.getElementById('wordCount');
     textInput.value="";
}