Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imagem" src="'+data_uri+'">'
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wi3CMQX0Q/model.json",modelLoad)
function modelLoad(){
    console.log("modelo_carregado")
}
function check(){
    img=document.getElementById("imagem")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
if(error){
    console.error(error)
}else{
    document.getElementById("resultObjectName").innerHTML=results[0].label
    document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(2)
}
}