function loadGroceries(){
    $.ajax({
        url: "data/groceryProducts.json",
        success: function(result){
            console.log(result);
            $("#grocery_search").autocomplete({
                source:result

            });
        }
    }

    );
}

$(document).ready(function(){
    loadGroceries();

});

function myFunction() {
    var x = document.getElementById("left");
    if (x.className === "left-nav") {
      x.className += " responsive";
    } else {
      x.className = "left-nav";
    }
}

