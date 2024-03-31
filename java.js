function HamburgerDropdownToggle() {
  var x = document.getElementById("hamburgerID");
  if (x.className === "hamburgerDropdownDisabled") 
  {
      x.className = "hamburgerDropdownEnabled";
  } 
  else 
  {
      x.className = "hamburgerDropdownDisabled";
  }
}