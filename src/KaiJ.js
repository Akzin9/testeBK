var InpEnig1 = document.getElementById('AnsEnig1Inp')
var divenig1 = document.getElementById('Enig1')
var DivRespEn1 = document.getElementById('DivRespostaEn1')
var musicFinal = document.getElementById('music')

function Enig1Resp() {
    var InpEnig1M = InpEnig1.value.toUpperCase()
    if(InpEnig1M == "GOJO"||InpEnig1M == "GOJO SATORU"||InpEnig1M == "SATORU GOJO"||InpEnig1M == "SATORU") {
        musicFinal.play()
        musicFinal.volume = (0.1)
        DivRespEn1.style.display = "initial"
 } else {
    
 }
}