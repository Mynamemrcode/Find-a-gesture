Webcam.set({
    height: 250, 
    width:250,
    image_format:'png',
    png_quality:90
}); 

camforattach=document.getElementById("snapshot");
Webcam.attach(camforattach);

function ok() {
    Webcam.snap(function(data_uri) {
        document.getElementById("captured").innerHTML ='<img id="o" src="'+data_uri+'">'
    });

}
console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Jyi1coIyH/model.json', Loaded)

function Loaded() {
console.log("Loaded")
}

function od() {
    imageh = document.getElementById("o");
    classifier.classify(imageh, gotResult)
}

function gotResult(error, result) {
if (error) {
    console.log(error);
    
}
else { 
    console.log(result);
    document.getElementById("gesture-name").innerHTML = result[0].label;
    document.getElementById("gestur-name").innerHTML = result[1].label;
}
if (result[0].label == "Left") {
    document.getElementById("gesture-emo").innerHTML = "&#128072;";
}
if (result[0].label == "Right") {
    document.getElementById("gesture-emo").innerHTML = "&#128073;";
}
if (result[0].label == "Stop") {
    document.getElementById("gesture-emo").innerHTML = "&#9995;";
}
if (result[0].label == "Ok/Good") {
    document.getElementById("gesture-emo").innerHTML = "&#x1f44c;";
}
if (result[0].label == "Thumbs up/Like") {
    document.getElementById("gesture-emo").innerHTML = "&#128077;";
}

if (result[1].label == "Left") {
    document.getElementById("gesture-emo1").innerHTML = "&#128072;";
}
if (result[1].label == "Right") {
    document.getElementById("gesture-emo1").innerHTML = "&#128073;";
}
if (result[1].label == "Stop") {
    document.getElementById("gesture-emo1").innerHTML = "&#9995;";
}
if (result[1].label == "Ok/Good") {
    document.getElementById("gesture-emo1").innerHTML = "&#x1f44c;";
}
if (result[1].label == "Thumbs up/Like") {
    document.getElementById("gesture-emo1").innerHTML = "&#128077;";
}
}