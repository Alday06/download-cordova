
document.addEventListener("deviceready", onDeviceReady, false)

function onDeviceReady() {
    
    var fileTransfer = new FileTransfer()
    // var uri = encodeURI('https://firebasestorage.googleapis.com/v0/b/example-firestore-f62e4.appspot.com/o/files%2Faquaman.png?alt=media&token=6555166d-9d29-4d6a-a44d-40f6e4a31350')
    // var uri = encodeURI('https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png')
    // var uri = encodeURI('https://blogsaverroes.juntadeandalucia.es/plataformaeiv/files/2016/09/manual-javascript.pdf')
    var uri = encodeURI('https://naturashop.com.mx/wp-content/uploads/2019/12/BOLSA-DE-100-GR-3-300x300.png')

    
    var fileURL = ''
    
    if(device.platform == 'Android'){
        fileURL =  cordova.file.externalApplicationStorageDirectory
    }else if(device.platform == 'iOS'){
        fileURL = cordova.file.dataDirectory
    }
    
    
    fileTransfer.download(
        uri,
        // cordova.file.externalApplicationStorageDirectory+'firebase-logo.png',
        fileURL+'Cafe.png',
        function (entry) {
            alert("Descarga completa...")
            var img = document.createElement('img')
            img.src = entry.toURL()
            document.body.appendChild(img)
        },
        function (error) {
            alert("download error source " + error.source)
            alert("download error target " + error.target)
            alert("upload error code" + error.code)
        }
    )

}

var uri = encodeURI('https://firebasestorage.googleapis.com/v0/b/example-firestore-f62e4.appspot.com/o/files%2Faquaman.png?alt=media&token=6555166d-9d29-4d6a-a44d-40f6e4a31350')
console.log('https://firebasestorage.googleapis.com/v0/b/example-firestore-f62e4.appspot.com/o/files%2Faquaman.png?alt=media&token=6555166d-9d29-4d6a-a44d-40f6e4a31350')
console.log(uri)
// Instalaciones:
    // cordova plugin add cordova-plugin-device -> Verifica la plataforma (Android o iOS)
    // cordova plugin add cordova-plugin-file -> Para guardar las descargas en una ruta
    // cordova plugin add cordova-plugin-file-transfer -> Permite la descarga y carga de archivos

// Fuentes
    // http://cortesfernando.blogspot.com/2015/06/apache-cordova-descarga-visualizacionPDF.html
    // https://www.youtube.com/watch?v=V1LcXKJxckk&frags=pl%2Cwn

//  /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
// /storage/emulated/0/path/to/file 