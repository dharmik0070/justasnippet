function myFunction() {
    var copyText = "https://dharmik0070.github.io/justasnippet/";
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = copyText;
    dummy.select();
    document.execCommand("copy");
    alert("Copied!! Do Paste to share");
    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
    document.getElementById("Copy_btn").innerHTML = "Copied!!!";
    document.getElementById("Copy_btn").className = "btn btn-success";
}