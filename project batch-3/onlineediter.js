function runCode() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    const outputFrame = document.getElementById("output").contentWindow.document;
    
    outputFrame.open();
    outputFrame.write(htmlCode + cssCode);
    outputFrame.close();
}