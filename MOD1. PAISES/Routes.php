<?php 

function Route($slug)
{
   switch ($slug) {

  case 'country' :
       return 'country';
      break;



  case 'station' :
       return 'station';
      break;
       	  case 'countries' :
       return 'countries';
      break;
      case 'genre' :
       return 'genre';
      break;	
      case 'genres' :
       return 'genres';
      break;	
      case 'single-station' :
       return 'single-station';
      break;	
      case 'include-your-radio' :
       return 'include-your-radio';
      break;	
      case 'help' :
       return 'help';
      break;	
      case 'privacy-policy' :
       return 'privacy-policy';
      break;	
      case 'dmca' :
       return 'dmca';
      break;
	  case 'favorites' :
       return 'favorites';
      break;
      default:
		return "estacion";
		break;
            case 'insertar' :
       return 'insertar';
           
      break;
       case 'estaciones' :
       return 'estaciones';
      break;
           case 'estacion' :
       return 'estacion';
      break;
           case 'Favorites' :
       return 'Favorites';
                 break;
       
       case '' :
       return 'main';
                 break;
       }
}


?>
