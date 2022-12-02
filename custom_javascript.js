// for register
elementresetpassword = document.getElementById("id_setpassword");

elementpassword = document.getElementById("fitem_id_password");
if (elementpassword != null) {
   inputpassword = elementpassword.querySelector("input");
}

elementpasswordtwo = document.getElementById("fitem_id_password2");
if (elementpasswordtwo != null) {
   inputpasswordconfirm = elementpasswordtwo.querySelector("input");
}

// for register showmodal login
elementpasswordlogin = document.getElementById("login");
if (elementpasswordlogin != null) {
	divpasswordlogin = elementpasswordlogin.querySelectorAll("div");
	inputpasswordlogin = divpasswordlogin[1].querySelector("input");
}

const addeliconeye = document.createElement("i");
const addeliconeyelogin = document.createElement("i");
const addeliconeyereset = document.createElement("i");
const addeliconeyeconfirm = document.createElement("i");
const addeliconeyewrong = document.createElement("i");
const addeliconeyeinvalid = document.createElement("i");
//const nodetext = document.createTextNode("");
//addeliconeye.appendChild(nodetext);
addeliconeye.classList.add("show-password-register");
addeliconeyelogin.classList.add("show-password-login");
addeliconeyereset.classList.add("show-password-reset");
addeliconeyeconfirm.classList.add("show-password-confirm");
addeliconeyewrong.classList.add("show-password-wrong");
addeliconeyeinvalid.classList.add("show-password-invalid");

// for register
if (elementpassword != null && elementresetpassword == null) {
   const eltwo = elementpassword.children[1];
   eltwo.appendChild(addeliconeye);
}

// for register showmodal login
if (elementpasswordlogin != null) {
	const eltwologin = elementpasswordlogin.children[1];
	eltwologin.appendChild(addeliconeyelogin);
}

// for reset password
if (elementresetpassword != null) {
   const eltwo = elementpassword.children[1];
   const elthree = elementpasswordtwo.children[1];
   eltwo.appendChild(addeliconeyereset);
   elthree.appendChild(addeliconeyeconfirm);
}

// for page login index
elementpasswordloginindex = document.querySelector(".login_form.inner_page");
if(elementpasswordloginindex != null){
	elementformloginindex = elementpasswordloginindex.children[2];
  	if(elementformloginindex.getAttribute("id") === "login"){
      elementpasswordloginindex.children[3].remove();
      elementpasswordloginindex.children[3].remove();
      elementdivloginindex = elementformloginindex.querySelectorAll("div");
      elementinputloginindex = elementdivloginindex[2].querySelector("input");
      elementdivloginindex[2].appendChild(addeliconeyewrong);
    }else{
      if(elementformloginindex.getAttribute("action") === null){
          elementpasswordloginindex.children[4].remove();
          elementpasswordloginindex.children[4].remove();
          elementformloginindex = elementpasswordloginindex.children[3];
          elementdivloginindex = elementformloginindex.querySelectorAll("div");
          elementinputloginindex = elementdivloginindex[2].querySelector("input");
          elementdivloginindex[2].appendChild(addeliconeyeinvalid);
      }
    }
}

$('.show-password-register').click(function() {
  if (inputpassword.type === "password") {
    inputpassword.type = "text";
    addeliconeye.classList.remove("show-password-register");
    addeliconeye.classList.add("hide-password-register");
  } else {
    inputpassword.type = "password";
    addeliconeye.classList.remove("hide-password-register");
    addeliconeye.classList.add("show-password-register");
  }
});

$('.show-password-login').click(function() {
  if (inputpasswordlogin.type === "password") {
    inputpasswordlogin.type = "text";
    addeliconeyelogin.classList.remove("show-password-login");
    addeliconeyelogin.classList.add("hide-password-login");
  } else {
    inputpasswordlogin.type = "password";
    addeliconeyelogin.classList.remove("hide-password-login");
    addeliconeyelogin.classList.add("show-password-login");
  }
});

$('.show-password-reset').click(function() {
  if (inputpassword.type === "password") {
    inputpassword.type = "text";
    addeliconeyereset.classList.remove("show-password-reset");
    addeliconeyereset.classList.add("hide-password-reset");
  } else {
    inputpassword.type = "password";
    addeliconeyereset.classList.remove("hide-password-reset");
    addeliconeyereset.classList.add("show-password-reset");
  }
});

$('.show-password-confirm').click(function() {
  if (inputpasswordconfirm.type === "password") {
    inputpasswordconfirm.type = "text";
    addeliconeyeconfirm.classList.remove("show-password-confirm");
    addeliconeyeconfirm.classList.add("hide-password-confirm");
  } else {
    inputpasswordconfirm.type = "password";
    addeliconeyeconfirm.classList.remove("hide-password-confirm");
    addeliconeyeconfirm.classList.add("show-password-confirm");
  }
});

$('.show-password-wrong').click(function() {
  if (elementinputloginindex.type === "password") {
    elementinputloginindex.type = "text";
    addeliconeyewrong.classList.remove("show-password-wrong");
    addeliconeyewrong.classList.add("hide-password-wrong");
  } else {
    elementinputloginindex.type = "password";
    addeliconeyewrong.classList.remove("hide-password-wrong");
    addeliconeyewrong.classList.add("show-password-wrong");
  }
});

$('.show-password-invalid').click(function() {
  if (elementinputloginindex.type === "password") {
    elementinputloginindex.type = "text";
    addeliconeyeinvalid.classList.remove("show-password-invalid");
    addeliconeyeinvalid.classList.add("hide-password-invalid");
  } else {
    elementinputloginindex.type = "password";
    addeliconeyeinvalid.classList.remove("hide-password-invalid");
    addeliconeyeinvalid.classList.add("show-password-invalid");
  }
});

var cerbuttongview = document.querySelector(".singlebutton");
if( cerbuttongview != null ) {
  var cermoveform = cerbuttongview.children[0];
  var cerattract = cermoveform.getAttribute("action");
  var cerstract = cerattract.substring(8);
  var cersplit = cerstract.split("/");

  if(cersplit[2] === "customcert"){
      cermoveform.setAttribute("target", "_blank");
  }
}

remdashboard = document.querySelector(".ace-responsive-menu.nav.more-nav.navbar-nav");
remdashboard.children[1].remove();

changelinklogobahaso = document.querySelector(".logo-widget");
changelinkhreflogobahaso = changelinklogobahaso.children[0];
changelinkhreflogobahaso.setAttribute("href", "https://learning.bahaso.com/?redirect=0");

changelinkmobilelogobahaso = document.querySelector(".main_logo_home2");
changelinkhrefmobilelogobahaso = changelinkmobilelogobahaso.children[0];
changelinkhrefmobilelogobahaso.setAttribute("href", "https://learning.bahaso.com/?redirect=0");

mobilebrand = document.querySelector(".mobileBrand");
mobilebrand.setAttribute("href", "https://learning.bahaso.com/?redirect=0");


remmobdasboardopen = document.getElementById("mm-6");
remmobdasboard = remmobdasboardopen.children[1];
remmobli =remmobdasboard.children[0];
remmobhref = remmobli.children[0];
if(remmobhref.getAttribute("href") === "https://learning.bahaso.com/my/"){
	remmobhref.remove();
}

