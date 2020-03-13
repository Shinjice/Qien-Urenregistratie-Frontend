






// BUDGET CONTROLLER
var budgetController = (function() {
            
    var Dag = function(id, datum, opdracht, overwerk, verlof, ziek, training, overig, notitieblad) {
        //this.type = type;
        this.id = id;
        this.datum = datum;
        this.opdracht = opdracht;
        this.overwerk = overwerk;
        this.verlof = verlof;
        this.ziek = ziek;
        this.training = training;
        this.overig = overig;
        this.notitieblad = notitieblad;
    };        

    var data = {
        allItems: {
            dag: [] 
        }
    };
    
    
    return {
        invoerDag: function(datum, opdracht, overwerk, verlof, ziek, training, overig, notitieblad){
            var newDag, ID, type;
            
            ID = 0;
            type = 'dag';                
                
            
            newDag = new Dag(ID, type, datum, opdracht, overwerk, verlof, ziek, training, overig, notitieblad);
            
            
            // Push it into our data structure
            data.allItems[type].push(newDag);
            
            // Return the new element
            return newDag
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
        inputDatum: '.add__type',
        inputOpdracht: '.add__opdracht',
        inputOverwerk: '.add__overwerk',
        inputVerlof: '.add__verlof',
        inputZiek: '.add__ziek',
        inputTraining: '.add__training',
        inputOverig: '.add__overig',
        inputNotitieblad: 'add_notitie'
    };
    
    return {
        getInput: function() {            
            return{          
                datum: document.querySelector(DOMstrings.inputDatum).value,
                opdracht: document.querySelector(DOMstrings.inputValue).value,
                overwerk: document.querySelector(DOMstrings.inputOverwerk).value,
                verlof: document.querySelector(DOMstrings.inputVerlof).value,
                ziek: document.querySelector(DOMstrings.inputZiek).value,
                training: document.querySelector(DOMstrings.inputTraining).value,
                verklaringOverig: document.querySelector(DOMstrings.inputOverig).value
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
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlInvoerDag);
    
        document.addEventListener('keypress', function(event) {
          
            if (event.keyCode === 13 || event.which === 13){
            ctrlInvoerDag();
            }
        });
    };
        
    var ctrlInvoerDag = function (){
        var input, newItem;
        
         // 1. Get the field input data
        input = UICtrl.getInput();
        console.log(input)
        
        // 2. Toevoegen van de dag aan de datum controller
        
        newDag = budgetCtrl.invoerDag(input.datum, input.opdracht, input.overwerk, input.verlof, input.ziek, input.training, input.overig, input.notitie);
       
    
    }
 
   return{
       init: function() {
            console.log('Application has started.')
            setupEventListeners();
       }
   }
 
}) (budgetController, UIController);


   controller.init();