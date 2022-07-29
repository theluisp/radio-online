<?php 
header('Content-type: application/json; charset=UTF-8');
ob_start();
require_once "system/autoload.php";  

function Category()
{
    $category = new Category;
	$category->Catsall();
}

function AllStations(){
    $station = new Stations;
    $station->allstations();
}

function StationByCatId(){
    $station = new Stations;
    $station->StationsByCatId();
}


function StnByCountryId(){
    $station = new Stations;
    $station->StationsByCountry();
}

function FeatureStn(){
    $station = new Stations;
    $station->featurestation();
}

function NewArrival(){
    $station = new Stations;
    $station->newarrival();
}
function SearchStn(){
    $station = new Stations;
    $station->searchstation();
}
function Login(){
    $user = new User;
    $user->loginuser();
}
function Register(){
    $user = new User;
    $user->registeruser();
}
function Countries(){
    $country = new Country;
    $country->countrylist();
}
function FavList(){
    $fav = new Favourite;
    $fav->ListFavourite();
}
function CheckFav(){
    $fav = new Favourite;
    $fav->Checkfavourite();
}
function AddFav(){
    $fav = new Favourite;
    $fav->AddtoFav();
}

?>
