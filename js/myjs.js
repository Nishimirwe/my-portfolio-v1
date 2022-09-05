const myAges = (born_year) =>
{
    const today_year = new Date().getFullYear();
    const ages = today_year-born_year;
    document.getElementById("ages").innerHTML= ages.toString();
}

myAges(1997);