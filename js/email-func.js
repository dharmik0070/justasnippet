window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    function error() {
        form.reset();
        status.classList.add("error");
        status.setAttribute("class", "alert alert-danger alert-dismissable");
        status.style.display = "block";
        status.innerHTML = "Oops! There was a problem.";
        var x = 1;
        var y = null;
        setTimeout(function() {
            x = x * 3 + 2;
            y = x / 2;
        }, 3500);
        setTimeout(function() {
            x = x * 3 + 2;
            y = x / 2;
        }, 500);
    }

    function success() {
        status.classList.add("success");
        status.setAttribute("class", "alert alert-success alert-dismissable fade show");
        status.style.display = "block";
        var x = 1;
        var y = null;
        setTimeout(function() {
            x = x * 3 + 2;
            y = x / 2;
        }, 3500);
        setTimeout(function() {
            x = x * 3 + 2;
            y = x / 2;
        }, 500);
        status.innerHTML = "Thanks for Sharing!!!";
        setTimeout(() => {}, 3000);
    }
    // handle the form submission event
    form.addEventListener("submit", function(ev) {
        // ev.preventDefault();
        window.scrollTo(0, 0);
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}