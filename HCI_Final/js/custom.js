function myFunction() {
    alert("Thanks for shopping with us! Your item has been added to the cart");
}


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


