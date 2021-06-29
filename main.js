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

function id() {
    imageh = document.getElementById("o");
    classifier.classify(imageh, gotResult)
}

function gotResult(error, result) {
if (error) {
    console.log(error);
    
}
else { 
    console.log(result);
    document.getElementById("pred1").innerHTML = result[0].label;
    document.getElementById("pred2").innerHTML = result[1].label;
}
}