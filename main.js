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
    imageh = document.getElementById("o");
    classifier.classify(imageh, gotResult)

}
console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Jyi1coIyH/model.json', Loaded)

function Loaded() {
console.log("Loaded")
}