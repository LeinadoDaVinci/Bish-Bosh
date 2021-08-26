
function Counter()
{
    document.getElementById("ID-tal").innerHTML = tal.value;
    document.getElementById("ID-bish").innerHTML = bish.value;
    document.getElementById("ID-bosh").innerHTML = bosh.value;
}

function inputgen(){
    var cellList = document.getElementById("bish-bosh-gen"); //Unordered List
    cellList.innerHTML = ""; //Clean upon Input
    
    for (let i = 1; i <= document.getElementById("tal").value; i++) {
        var cell = document.createElement("li"); // ListItems
        
        if (i % document.getElementById("bish").value == 0 && i % document.getElementById("bosh").value == 0) {
            cell.innerHTML ="Bish-Bosh";
            cell.style.color = "limegreen";
            cell.style.padding = "5px"
            cellList.appendChild(cell);
        }
        else if (i % document.getElementById("bish").value == 0) {
            cell.innerHTML = "Bish";
            cell.style.color = "red";
            cell.style.padding = "5px"
            cellList.appendChild(cell);
        }
        else if (i % document.getElementById("bosh").value == 0) {
            
            cell.innerHTML = "Bosh";
            cell.style.color = "blue";
            cell.style.padding = "5px"
            cellList.appendChild(cell);
        }
        else {
            cell.innerHTML = i;
            cell.style.color = "white";
            cell.style.padding = "5px"
            cellList.appendChild(cell);
        } 
    }
}