navbar = document.querySelector('.ace-responsive-menu');
navbarmenu = navbar.querySelectorAll('.nav-item');
navbarmenu[1].style.display = "none";

breadcrumbdash = document.querySelector('.breadcrumb, float-right');
breadcrumbmenudashright = breadcrumbdash.children[0];
breadcrumbmenudashright.style.display = "none";

dashboardsidebars = document.querySelector('.dashboard_sidebars');
childclas = dashboardsidebars.children[0];
childclass = childclas.children[1];

start = childclas.children[0];
start.remove();

preference = childclass.children[1];
roleto = childclass.children[2];
preference.remove();

dashbordnavlist = document.querySelector('.dashbord_nav_list');
const ul = dashbordnavlist.children[1];

if(ul.innerHTML.length == 75 || ul.innerHTML.length == 68){
	roleto.remove();
}

changelinklogobahaso = document.querySelector(".navbar_brand.float-left.dn-smd");
changelinklogobahaso.setAttribute("href", "https://learning.bahaso.com/?redirect=0");

mobilebrand = document.querySelector(".mobileBrand");
mobilebrand.setAttribute("href", "https://learning.bahaso.com/?redirect=0");
