// Basic log
console.log("Website loaded successfully!");

// Run when page loads
document.addEventListener("DOMContentLoaded", function () {

    // Create Title
    const title = document.createElement("h1");
    title.innerText = "🚦 Smart Traffic Control System";
    document.body.appendChild(title);

    // Create Paragraph
    const para = document.createElement("p");
    para.innerText = "This system helps in reducing traffic congestion and preventing accidents.";
    document.body.appendChild(para);

    // Create Button 1
    const btn1 = document.createElement("button");
    btn1.innerText = "Check Traffic Status";
    btn1.style.margin = "10px";

    btn1.onclick = function () {
        alert("🚗 Heavy Traffic Detected! Use alternate route.");
    };

    document.body.appendChild(btn1);

    // Create Button 2
    const btn2 = document.createElement("button");
    btn2.innerText = "Clear Traffic";
    btn2.style.margin = "10px";

    btn2.onclick = function () {
        alert("✅ Traffic is now smooth!");
    };

    document.body.appendChild(btn2);

    // Dynamic Status Text
    const status = document.createElement("h3");
    status.innerText = "Traffic Status: Normal";
    document.body.appendChild(status);

    // Change Status Button
    const btn3 = document.createElement("button");
    btn3.innerText = "Update Status";
    btn3.style.margin = "10px";

    btn3.onclick = function () {
        status.innerText = "Traffic Status: Heavy 🚨";
    };

    document.body.appendChild(btn3);

});