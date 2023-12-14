
const searchSeparation = () => {
    const inputText = document.querySelector("#inputText").value;
    const inputTextTwo = document.querySelector("#inputText2").value;
    const before = document.querySelector("#davor").checked;
    const thereAfter = document.querySelector("#danach").checked;
    const resultFront = document.querySelector(".resultFront");
    const resultEnd = document.querySelector(".resultEnd");

    const index = inputText.indexOf(inputTextTwo);
    const searchTextIndex = inputText.indexOf(inputTextTwo);

    if (index >= 0) {
        let textBefore, textThereAfter;

        if (before) {
            textBefore = inputText.substring(0, index);
            textThereAfter = inputText.substring(index);
        } else if (thereAfter) {

            if (searchTextIndex >= 0) {
                textBefore = inputText.substring(0, searchTextIndex + inputTextTwo.length);
                textThereAfter = inputText.substring(searchTextIndex + inputTextTwo.length);
            }
        }
        resultFront.innerHTML = textBefore;
        resultEnd.innerHTML = textThereAfter;
    }
}

