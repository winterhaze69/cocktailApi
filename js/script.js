alreadySearched = localStorage.getItem("searched")

searched = []
if (alreadySearched) {
  searched.push(alreadySearched)
   }


    for (var titi in searched) {
      tutu = searched[0].split(",")
      click = searched[1]

     for (var hoho in tutu) {

    peakOho = document.createElement('option')
     peakOho.innerHTML = tutu[hoho]
     peakOho.value = tutu[hoho]
     document.querySelector("select").appendChild(peakOho)
     }
    }


//
//
// clickerNow = localStorage.getItem("cookieHit")
//   if (clickerNow != 0) {
//     var hit = clickerNow
//   }else {
//     var hit = 0
//   }
// //stocker en local
//
// //afficher une info stockée en localStorage
//
// document.querySelector(".cookIt").addEventListener("click", () => {
//   hit ++
//   localStorage.setItem("cookieHit", hit)
//   console.log(localStorage.getItem("cookieHit"));
//
// })

let randoms = []

  for (var i = 0; i < 5; i++) {

  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      if(response.ok) {
    response.json()
      .then((data) => {

      let peakture = document.createElement('img')
      let peakname = document.createElement('p')
       peakOption = document.createElement('option')

      peakOption.innerHTML = data.drinks[0].strDrink
      peakOption.value = data.drinks[0].strDrink
      peakture.src = data.drinks[0].strDrinkThumb
      peakname.innerHTML = data.drinks[0].strDrink

      document.querySelector("select").appendChild(peakOption)
      document.querySelector(".container").appendChild(peakname)
      document.querySelector(".container").appendChild(peakture)
      })
    }else {
      console.log('Mauvaise réponse du réseau');
    }
    })
    .catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});
  }


  document.querySelector("#btn").addEventListener("click", () => {


 // for (var titi in searched) {
 //   tutu = searched[0].split(",")
 //   click = searched[1]
 //
 //  for (var hoho in tutu) {
 //
 // peakOho = document.createElement('option')
 //  peakOho.innerHTML = tutu[hoho]
 //  peakOho.value = tutu[hoho]
 //  document.querySelector("select").appendChild(peakOho)
 //  }
 // }

    let cocktail = document.querySelector('input').value;

    if (typeof searched != "string") {
    upToDate = localStorage.getItem("searched", searched)
      if (searched.includes(cocktail)) {

      }else {
        searched.push(cocktail)
        localStorage.setItem("searched", searched)

      }
    }

    // console.log(storage);


fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
.then((response) => {
response.json()
 .then((data) => {


//data.drinks[0].strDrinkThumb == image
//data.drinks[0].strDrink == name
//data.drinks[0].strAlcoholic == isAlcohol
//data.drinks[0].strInstructions == how to do
//data.drinks[0].strIngredient1 == d apres toi? va de 1 a 15
  // console.log("une "+data.drinks[0].strDrink+"! "+ "avec extra "+ data.drinks[0].strIngredient1+ "!" );

  let drinkName = data.drinks[0].strDrink;

  document.querySelector('.name').innerHTML = drinkName;
  document.querySelector('.prepa').innerHTML = data.drinks[0].strInstructions;
  document.querySelector('.isAlc').innerHTML = data.drinks[0].strAlcoholic;
  document.querySelector('.ingr1').innerHTML = data.drinks[0].strIngredient1;
  document.querySelector('.ingr2').innerHTML = data.drinks[0].strIngredient2;
  if (!data.drinks[0].strIngredient2) {
    var dodo = document.querySelector('.dada2')
     dodo.classList.add("hide");
     document.querySelector('.ingr2').classList.add('hide')
  }else {
    document.querySelector('.dada2').classList.remove('hide')
    document.querySelector('.ingr2').classList.remove('hide')
    document.querySelector('.ingr2').innerHTML = data.drinks[0].strIngredient2;
  }
  if (!data.drinks[0].strIngredient3) {
    var dodo = document.querySelector('.dada1')
     dodo.classList.add("hide");
     document.querySelector('.ingr3').classList.add('hide')
  }else {
    document.querySelector('.dada1').classList.remove('hide')
    document.querySelector('.ingr3').classList.remove('hide')
    document.querySelector('.ingr3').innerHTML = data.drinks[0].strIngredient3;
  }

  if (!data.drinks[0].strIngredient4) {
    var dodo = document.querySelector('.dada')
     dodo.classList.add("hide");
     document.querySelector('.ingr4').classList.add('hide')
  }else {
    document.querySelector('.dada').classList.remove('hide')
    document.querySelector('.ingr4').classList.remove('hide')
    document.querySelector('.ingr4').innerHTML = data.drinks[0].strIngredient4;
  }
  if (typeof data.drinks[0].strIngredient5 != "string") {
    var dodo = document.querySelector('.caca')
     dodo.classList.add("hide");
    document.querySelector('.ingr5').classList.add('hide')
  }else {
    document.querySelector('.caca').classList.remove('hide')
    document.querySelector('.ingr5').classList.remove('hide')
    document.querySelector('.ingr5').innerHTML = data.drinks[0].strIngredient5;
  }
  if (typeof data.drinks[0].strIngredient6 != "string") {
    var dodo = document.querySelector('.caca1')
     dodo.classList.add("hide");
    document.querySelector('.ingr6').classList.add('hide')
  }else {
      document.querySelector('.caca1').classList.remove('hide')
    document.querySelector('.ingr6').classList.remove('hide')
    document.querySelector('.ingr6').innerHTML = data.drinks[0].strIngredient6;
  }
  if (typeof data.drinks[0].strIngredient7 != "string") {
    var dodo = document.querySelector('.caca2')
     dodo.classList.add("hide");
    document.querySelector('.ingr7').classList.add('hide')
  }else {
      document.querySelector('.caca2').classList.remove('hide')
    document.querySelector('.ingr7').classList.remove('hide')
    document.querySelector('.ingr7').innerHTML = data.drinks[0].strIngredient7;
  }
  document.querySelector('.img').src = data.drinks[0].strDrinkThumb;
  // "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient1+".png";


  let pik = document.createElement('img');
  let pik2 = document.createElement('img');
  let pik3 = document.createElement('img');
  let pik4 = document.createElement('img');
  let pik5 = document.createElement('img');
  let pik6 = document.createElement('img');
  let pik7 = document.createElement('img');
  pik.className += "small";
  pik2.className += "small";
  pik3.className += "small";
  pik4.className += "small";
  pik5.className += "small";
  pik6.className += "small";
  pik7.className += "small";
  pik.src = "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient1+".png";
  pik2.src = "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient2+".png";
  pik3.src = "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient3+".png";
  pik4.src = "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient4+".png";
  pik5.src = "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient5+".png";
  pik6.src = "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient6+".png";
  pik7.src = "https://www.thecocktaildb.com/images/ingredients/"+data.drinks[0].strIngredient7+".png";

  if (typeof data.drinks[0].strIngredient1 != 'object') {
    document.querySelector(".seeIt1").innerHTML = ''
    document.querySelector(".seeIt1").appendChild(pik)
  }else {
    document.querySelector(".seeIt1").innerHTML = ''
  }
  if (typeof data.drinks[0].strIngredient2 != 'object') {
     document.querySelector(".seeIt2").innerHTML = ''
    document.querySelector(".seeIt2").appendChild(pik2)
  }else {
    document.querySelector(".seeIt2").innerHTML = ''
  }
  if (typeof data.drinks[0].strIngredient3 != 'object') {
     document.querySelector(".seeIt3").innerHTML = ''
    document.querySelector(".seeIt3").appendChild(pik3)
  }else {
    document.querySelector(".seeIt3").innerHTML = ''
  }
      if (typeof data.drinks[0].strIngredient4 != 'object') {
       document.querySelector(".seeIt4").innerHTML = ''
        document.querySelector(".seeIt4").appendChild(pik4)
      }else {
        document.querySelector(".seeIt4").innerHTML = ''
      }
      if (typeof data.drinks[0].strIngredient5 != 'object') {
         document.querySelector(".seeIt5").innerHTML = ''
        document.querySelector(".seeIt5").appendChild(pik5)
      }else {
        document.querySelector(".seeIt5").innerHTML = ''
      }
      if (typeof data.drinks[0].strIngredient6 != 'object') {
         document.querySelector(".seeIt6").innerHTML = ''
        document.querySelector(".seeIt6").appendChild(pik6)
      }else {
        document.querySelector(".seeIt6").innerHTML = ''
      }
      if (typeof data.drinks[0].strIngredient7 != 'object') {
         document.querySelector(".seeIt7").innerHTML = ''
        document.querySelector(".seeIt7").appendChild(pik7)
      }else {
        document.querySelector(".seeIt7").innerHTML = ''
      }
          // document.querySelector(".seeIt").appendChild(pik5)
          //   document.querySelector(".seeIt").appendChild(pik6)
          //     document.querySelector(".seeIt").appendChild(pik7)

})

.catch(function(error) {
  toto = searched.pop()
  console.log(searched);
  localStorage.setItem("searched", searched)
  alert("t'es bourré Joe, ce cocktail ("+ cocktail +") n'éxiste pas!!" );
});
})
});
