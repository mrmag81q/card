function thun(){
    var num=70000042;
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("get").innerHTML=num_parts;
}