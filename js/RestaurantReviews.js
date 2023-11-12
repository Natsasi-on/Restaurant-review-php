$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "PHP/RestaurantReviews.php?action=searchNames",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                $('#drpRestaurant').append($('<option>', { value: index, text: value.name }));
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {
            debugger;
        }
    });

    $('#drpRestaurant').change(() => {
        var selectedRestaurant = $("#drpRestaurant option:selected").val();
        getRestaurantInfo(selectedRestaurant);
        console.log("selectrest" + selectedRestaurant);
    });


    $('#btnSave').click(() => {
        updatedRestaurant();
    });

});

function getRestaurantInfo(restaurant_id) {

    if (restaurant_id == "-1") {
        $("#lblConfirmation").text("");
        $("#txtStreetAddress").val("");
        $("#txtCity").val("");
        $("#txtProvinceState").val("");
        $("#txtPostalZipCode").val("");
        $("#txtSummary").val("");
        $("#drpRating").empty();
        for (let index = 1; index <= 5; index++) {
            $('#drpRating').append($('<option>', { value: index, text: index }));
        }
        return;
    }

    let dataSent = {
        restaurantId: restaurant_id,
        action: "searchRestaurant"
    };


    $.ajax({
        type: "GET",
        url: "PHP/RestaurantReviews.php?",
        dataType: "json",
        data: dataSent,
        success: function (resData) {
            $("#lblConfirmation").text("");
            $("#txtStreetAddress").val(resData.address.street);
            $("#txtCity").val(resData.address.city);
            $("#txtProvinceState").val(resData.address.province);
            $("#txtPostalZipCode").val(resData.address.postal_code);
            $("#txtSummary").val(resData.summary);
            $("#drpRating").empty();
            for (let drpRange = resData['@attributes']['min']; drpRange <= resData['@attributes']['max']; drpRange++)
                if (drpRange == resData.rating) {
                    $('#drpRating').append($('<option>', {
                        value: drpRange,
                        text: drpRange,
                        selected: true
                    }));
                } else {
                    $('#drpRating').append($('<option>', {
                        value: drpRange, text: drpRange,
                    }));
                }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            debugger;
        }
    });
}

function updatedRestaurant() {
    let dataEdited = {
        action: "updateRestaurant",
        id: $("#drpRestaurant option:selected").val(),
        street: $("#txtStreetAddress").val(),
        city: $("#txtCity").val(),
        province: $("#txtProvinceState").val(),
        zip: $("#txtPostalZipCode").val(),
        summary: $("#txtSummary").val(),
        rating: $("#drpRating option:selected").val()
    };

    $.ajax({
        type: "POST",
        url: "PHP/RestaurantReviews.php?",
        dataType: "json",
        data: dataEdited,
        success: function (resData) {
            $("#lblConfirmation").text("Updated Sucessfully!");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#lblConfirmation").text("Failed to update");
        }
    });
}
