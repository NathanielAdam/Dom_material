//all of our JS code will go here
// document.getElementById('nameInput').addEventListener('keyup', (event) => {
//     if (event.target.value === '') {
//         document.getElementsByTagName('p')[1].innerText = `No name has been entered`;
//     } else {
//         document.getElementsByTagName('p')[1].innerText = `Everyone Please welcome ${event.target.value} to the stage.`;
//     }
// })

// console.log(document.getElementsByClassName('sampleParagraph'));
// console.log(document.getElementsByTagName('p'))
// console.log(document.querySelectorAll('p.sampleParagraph'))
// console.log(document.getElementById('testParagraph').innerHTML)

// document.getElementById('testParagraph').style.color = 'blue';

// document.getElementsByClassName('sampleClass')[0].style.color = 'orange';

// for (element of document.querySelectorAll(`p.testParagraph`)) {
// }

// for (element of document.getElementsByTagName('p')) {
//     element.style.color = 'blue';
//     console.log(element);
// }
// for( i=0; i<document.getElementsByTagName('p').length; i++){
//     document.getElementsByTagName('p')[i].style.color ="green";
// }




document.getElementById('clickThisButton').addEventListener('click', (e) => 
{
    for( i=0; i<document.getElementsByTagName('p').length; i++){
        document.getElementsByTagName('p')[i].style.color ="green";
}
}
);

document.getElementsByTagName('p')

for (const element of document.getElementsByTagName('p')) {
    element.addEventListener('mouseover', function(e) {
        this.style.color = "red"
    })
    element.addEventListener('click', function(r){
        if(this.style.textAlign ="left"){this.style.textAlign ="center"}}

    element.addEventListener('click', function() {
        if(this.style.textAlign = "center"){
            this.style.textAlign = "left"
        }
    })
    )
}
