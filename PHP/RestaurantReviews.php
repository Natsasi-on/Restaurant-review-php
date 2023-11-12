<?php
$path = parse_ini_file("Lab.ini");
$myXMLPath = $path['xmlPath'];

if (isset($_GET['action']) && $_GET["action"] == "searchNames") {
    $restaurant_list_xml_data = simplexml_load_file($myXMLPath);

    foreach ($restaurant_list_xml_data->children() as $res) {
        $restaurantName[] = array('name' => strval($res->restaurant_name));
    }

    echo json_encode($restaurantName);
}


if (isset($_GET['action']) && $_GET["action"] == "searchRestaurant") {

    $restaurant_list_xml_data = simplexml_load_file($myXMLPath);
    $index = -1;
    foreach ($restaurant_list_xml_data as $myrestaurant) {
        $index += 1;
        if ($index == $_GET["restaurantId"]) {
            $myrestaurant['min'] = $myrestaurant->rating["min"];
            $myrestaurant['max'] = $myrestaurant->rating["max"];

            echo json_encode($myrestaurant);
        }
    }
}

if (isset($_POST['action']) && $_POST["action"] == "updateRestaurant") {
    $restaurant_list_xml_data = simplexml_load_file($myXMLPath);
    $index = -1;
    foreach ($restaurant_list_xml_data as $myrestaurant) {
        $index += 1;
        if ($index == $_POST["id"]) {
            $myrestaurant->address->street = $_POST["street"];
            $myrestaurant->address->city = $_POST["city"];
            $myrestaurant->address->province = $_POST["province"];
            $myrestaurant->address->postal_code = $_POST["zip"];
            $myrestaurant->summary = $_POST["summary"];
            $myrestaurant->rating = $_POST["rating"];

            $restaurant_list_xml_data->asXML($myXMLPath);
            echo json_encode($myrestaurant);
        }
    }
}



?>
