Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#camera");

function Click_pic() {
    Webcam.snap(
        function (Cam_pic) {
            document.getElementById("result").innerHTML = '<img src="' + Cam_pic + '" id="cam">';
        }
    );
    speak()
}
console.log("ml5 version", ml5.version);
model = ml5.imageClassifier("", modelLoaded);

function modelLoaded() {
    console.log("model loaded succesfully");
}
prediction_1 = "";

function speak() {
    speak_data = "prediction 1 is " + prediction_1;
    speak_audio = new SpeechSynthesisUtterance(speak_data);
    window.speechSynthesis.speak(speak_audio);
}

function Predict_hand(err, result_array) {
    if (err) {
        console.error(err);
    } else {
        console.log(result_array);
        prediction_1 = result_array[0].label;
        
        document.getElementById("hand_name1").innerHTML = prediction_1;

        speak();
        if (prediction_1 == "Good job") {
            document.getElementById("hand_1").innerHTML = "&#128077";
        } else if (prediction_1 == "Bad job") {
            document.getElementById("hand_1").innerHTML = "&#128078";
        } else if (prediction_1 == "Peace") {
            document.getElementById("hand_1").innerHTML = "&#9996";
        }
    }
}