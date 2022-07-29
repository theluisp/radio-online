<?php 

function Route($slug)
{
   switch ($slug) {  	
	case 'add-station':
		 return 'add-station';
	break;   	
	case 'add-genres':
		 return 'add-genres';
	break;   	
	case 'genres':
		 return 'genres';
	break;   	
    case 'countries':
		 return 'countries';
	break;   	
	case 'station':
		 return 'station';
	break;   	
	case 'edit-genre':
		 return 'editgenre';
	break; 	
	case 'edit-station':
		 return 'editstation';
	break;		
	case 'profile':
		 return 'profile';
	break;		
	case 'setting':
		 return 'setting';
	break;		
	case 'adssetting':
		 return 'adssetting';
	break;		
	case 'account':
		 return 'account';
	break;
    default:
		return "main";
		break;
   }
}


?>