// WERKNEMER CONTROLLER

function werknemerNaw(obj) {
    this.werknemerfunctie = obj.werknemerfunctie;
    this.werknemertitel = obj.werknemertitel;
    this.vnaam = obj.vnaam;
    this.anaam = obj.anaam;
    this.geboortedatum = obj.geboortedatum;
    this.email = obj.email;
    this.telefoonnr = obj.telefoonnr;   
}
    //verzenden d.m.v. enter
    document.addEventListener('keypress', function(event) {
          
            if (event.keyCode === 13 || event.which === 13){
                
    var werknemerfunctie = document.getElementById('werknemerfunctie').value;
    var werknemertitel = document.getElementById('werknemertitel').value;
    var vnaam = document.getElementById('vnaam').value;
    var anaam = document.getElementById('anaam').value;
    var geboortedatum = document.getElementById('geboortedatum').value;
    var email = document.getElementById('email').value;
    var telefoonnr = document.getElementById('telefoonnr').value;
    var wndata = new werknemerNaw({
        werknemerfunctie: werknemerfunctie,
        werknemertitel: werknemertitel,
        vnaam: vnaam,
        anaam: anaam,
        geboortedatum: geboortedatum,
        email: email,
        telefoonnr: telefoonnr
    });
        
    }
    

  console.log(JSON.stringify(wndata));
});





// BUDGET CONTROLLER
var budgetController = (function() {
            
    var Werkdag = function(id, datum, waarde) {
        this.id = id;
        this.datum = datum;
        this.waarde = waarde;        
    };
        
        
    var data = {
        datumData: {
            werknemer1: [],
            werknemer2: []
            
        },
        totals: {
            datumTot: 0,
            werkTot: 0
        }
    };
        
    return {
        addItem: function(persNr, taak, uren){
            var newItem, ID;
            
            // Create new item based on 'werknemer1' or 'werknemer2' persNr
            newItem = new Werkdag(ID, taak, uren);
          
            
            // Push it into our data structure
            data.datumData[werknemer1].push(newItem)
            
            // Return the new element
            return newItem;
        },
        
        // Data Array test
        testing: function(){
            console.log(data);
        }
        
    };
    
})();   





// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputPersNr: 'add__persType',
        inputDatum: '.add__datumdag',
        inputWaarde: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput: function() {            
            return{      
                persNr: document.getElementById(DOMstrings.inputPersNr).value,
                datum: document.getElementById(DOMstrings.inputDatum).value,
                waarde: document.getElementById(DOMstrings.inputWaarde).value
                
         //       persNr: document.(DOMstrings.inputPersNr).value, // werknemer1 of werknemer2
         //       datum: document.querySelector(DOMstrings.inputDatum).value,
         //       waarde: document.querySelector(DOMstrings.inputWaarde).value
            };                      
        },
        
        getDOMstrings: function(){  //DOM public to other modules
            return DOMstrings;
        }
    };    
    
}) ();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function () {    
        var DOM = UICtrl.getDOMstrings(); //DOM will be reference in this module
                  
        document.addEventListener('keypress', function(event) {
          
            if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
            }
        });    
    };
        
    var ctrlAddItem = function (){
        var input, newItem;
        
      //  1. Get the field input data
        input = UICtrl.getInput();
        console.log(input)
        
      //  2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.persNr, input.datum, input.waarde);        
        
    
    }
 
   return{
       init: function() {
            console.log('Application has started.')
            setupEventListeners();
       }
   }
 
}) (budgetController, UIController);


   controller.init();