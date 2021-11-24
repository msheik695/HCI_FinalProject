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

