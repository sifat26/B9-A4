
function password(obj) {
  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;

  if (
    obj.hasOwnProperty("name") &&
    obj.hasOwnProperty("birthYear") &&
    obj.hasOwnProperty("siteName")
  ) {
    if (birthYear.toString().length < 4) {
        return "invalid";
      
    } else {
      let s=siteName.charAt(0).toUpperCase() + siteName.slice(1);
        let pass = s + "#" + name + "@" + birthYear;
      return pass;
      
    }
  } else {
    return "invalid";
  }
}
console.log(password({ name: "toky", birthYear: 2000, siteName: "facebook" }));
