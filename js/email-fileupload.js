function loadImage() {
    const fi = document.getElementById("fileToUpload");

    // Check if any file is selected. 
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {
            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file > 2096) {
                alert("File too Big, please select a file less than 2mb");
                var oldInput = document.getElementById("fileToUpload");
                var newInput = document.createElement("input");
                newInput.type = "file"; 
                newInput.id = oldInput.id; 
                newInput.name = oldInput.name; 
                newInput.className = oldInput.className; 
                newInput.style.cssText = oldInput.style.cssText; 
                newInput.onchange = oldInput.onchange;            
                oldInput.parentNode.replaceChild(newInput, oldInput); 
            }
        }
    }

}