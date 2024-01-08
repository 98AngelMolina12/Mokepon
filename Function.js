//Main JS archive of the project

const logIn = valor => console.log(valor);//We are asigning "the console.log()" for only need "logIn()" to use it

const $ = selector => document.getElementById(selector);//Here we are asigning the value of the function "document.getElementById()" for only need write "$("")" to use it

const T = selectir => document.getElementsByClassName(selectir);//We can take elements by class

const seeAll = selectora => document.querySelectorAll(selectora);//We use this command in the console for a quicker DOM work

//This function is for generate random Numbers
function randomMonster(min,max) {

   return Math.floor(Math.random() * (max - min + 1) + min) ;

} 

//We are makin an asyncronus request using fetch to access for our backend part

function joinGame(){

   fetch("http://localhost:8080/join")
      .then(function(res){

         logIn(res);
         if(res.ok){

            res.text()
               .then(function(response){

                  logIn(response);

               })

         }

      })

}

//Global Vars


//HTML elements

      let selectionStructure;//Var for the template iterals of our selection menu options

      const selectionBox = $("div-selection-mokepon");//Const for the div that contain our menu options

      let petName = $("span-rename-mokepon");//Var that contain the span were we see our Mk name

      let enemyName = $("name-enemy");//Var that contain the span were we see our enemy Mk name

      let nameMkSpan = $("mokepon-name");//Span for rename our Mk with a personal name

      let finalResult = $("span-combat-result");//span to show the result of our combat

      let atkBox = $("attack-buttons");//Var that contain our div with the attack buttons

      const playerSectionMessage = $("life-score-Player");//Const with our visible attacks table

      const enemySectionMessage = $("life-score-enemy");//Const with the visible enemys attacks table

      const hideAttacks = $("game-functionality");//Div were we contain our elements for rename our Mks

      const hideSpanElements = $("span-elements");//Div were we contain our span elements

      const hideCombatTables = $("div-lifes-game");//Div were we have our score tables

      const hideDivSubTittles = $("div-tittle");//Div were we have our subtittle

      const hideSelectionButton = $("selection-button");//Div were we contain our Selection Mk button

      const hideSelectionDiv = $("div-selection-mokepon");//Div were we will put our elements of our selection

      const imageMkPlayerBox = $("imageMkPlayer");

      const imageMkEnemyBox = $("imageMkEnemy");

      const mkMapBox = $('mapContainer');//div with our map

      let mkMapSpan = $('mkMapSpan');//Var four our name in the map

      let mkClassColor;//This var is for change de message color of every attack that we use

      let mkClassColorEnemy;//Thi var is for change the message color of every attack of our enemy

      const mapBox = $('mapContainer');//Div that contains our canvas 

      const mokeponMap = $('mokeponMap');//Canvas of our map

      let mapDimension = mokeponMap.getContext("2d");

      const resetMoveButton = $('resetMoveButton');

      let mapBackground = new Image();
         mapBackground.src = './images/mokemap.png'


      /*Combat function elements */

         let atackStructure;//Var for the template iterals

         let i  = 0;//Iterator vars for our loops

         let mokepons = [];//Array for contain our Mks

         let enemyMokepons = []//Array for contain enemy's Mks

         let randomEnemy;//Var to get the random Number to set one of the 6 Mk

         let sequency = 5;//var with the turns sequency

         let mkClass = '';//var to contain the Class of all the attacks that we will use

         let mkClassEnemy = '';//Var to contain the class of the atacks of enemy
         
         let typeMk = [],typeMkEnemy = [];// Arrays for contain the type info of our mk 

         let turn = 1;//This is a dinamic var that we will reset in every button of our atacks

         let atkMokepon = [];//Array for abstract the information of the atack name of Every mk that we selected

         let elementalAttack;//Var for contain every attack that we clicked

         let elementalAttackEnemy;//Var for contain every random generate attack enemy

         let victoriesPlayer = 0 ;//Var for contain the number of our victories

         let victoriesEnemy = 0;//Var fo contain the enemy number of victories

         let advantagePlayer = 0;//Var for give more turns for our Mk

         let advantageEnemy = 0;//Var for give more turns for the enemy

         let mkMapImage = new Image();//Var for generate a image object for our mkMap rendering

         let enemyImage = new Image();//Var for generate an image object for our enemies map rendering

         let player = {};

         let mapEnemies = [];

         let speed = 3;

         let maxValue = 4;

         let speedEnemy = 1;

         let index = 0;


         let intervalsIdList = {

            repeaterLists: "",
            repeaterReverseLists: "",

            repeatersLists2: "",
            repeaterReverseLists2: "",

            repeatersLists3: "",
            repeaterReverseLists3: "",

            repeatersLists4: "",
            repeaterReverseLists4: "",

            repeatersLists5: "",
            repeatersListsReverse5: "",

            repeaterLists6: "",
            repeatersListsReverse6: "",

            repeatersLists7: "",
            repeaterReverseLists7: "",

            repeatersLists8: "",
            repeaterReverseLists8: "",

            repeatersLists9: "",
            repeaterReverseLists9: "",

            repeatersLists10: "",
            repeaterReverseLists10: "",

            repeatersLists11: "",
            repeaterReverseLists11: "",

            repeatersLists12: "",
            repeaterReverseLists12: "",

         };

         let enemiesPositions = {

            enemy1:[randomMonster(289,322 + 22),randomMonster(372,394 + 22)],
            enemy2:[randomMonster(476,498 + 22),randomMonster(578,600 + 22)],
            enemy3:[randomMonster(391,413 + 22),randomMonster(476,498 + 22)],
            enemy4:[randomMonster(77,99 + 22),randomMonster(303,325 + 22)],
            enemy5:[randomMonster(41,63 + 22),randomMonster(482,504 + 22)],
            enemy6:[randomMonster(594,616 + 22),randomMonster(487,509 + 22)],

            enemy7:[randomMonster(162,184 + 22),randomMonster(447,469 + 22)],
            enemy8:[randomMonster(482,504 + 22),randomMonster(225,247 + 22)],
            enemy9:[randomMonster(291,313 + 22),randomMonster(228,250 + 22)],
            enemy10:[randomMonster(412,434 + 22),randomMonster(301,323 + 22)],
            enemy11:[randomMonster(413,433 + 22),randomMonster(41,63 + 22)],
            enemy12:[randomMonster(178,200 + 22),randomMonster(66,88 + 22)],

         }
         
         let copiedEnemiesBox = [];
            copiedEnemiesBox.push(

               enemiesPositions.enemy7,
               enemiesPositions.enemy8,
               enemiesPositions.enemy9,
               enemiesPositions.enemy10,
               enemiesPositions.enemy11,
               enemiesPositions.enemy12
               
               );


/*This let us create mokepons creating objects using the constructor of our class, to make memory spaces 
were we can idex specific information for ever single mokepon that we are creating in our game*/
      class Mokepon {

         constructor(image,input,label,name,x,y,width,height){

            this.image =image;
            this.input = input;
            this.atacks = [];
            this.label = label;
            this.name = name;
            this.type = [];
            this.x = x;
            this.y = y;
            this.width = 85;
            this.height = 85;
   
         }

      }

/* The image have the size 250x350 */

/* Here we create 6 mokepons using our class and idexing information inside our new objects */

   let Raykiou = new Mokepon("./images/i03_raykiou.png",'Raykiou-input',"label-raykiou","Raykiou",0,0);

   let Joka = new Mokepon("./images/i01_joka.png",'Joka-input',"label-joka","Joka",0,0);
      
   let Crabster = new Mokepon("./images/i02_Crabster.png",'crabster-input',"label-crabster","Crabster",0,0);

   let Rocker = new Mokepon("./images/Rocker.png","Rocker-input","label-rocker","Rocker",0,0);

   let Truthler = new Mokepon("./images/Truthler.png","Truthler-input","label-truthler","Truthler",0,0);

   let Quetzal = new Mokepon("./images/Quetzal.png","Quetzal-input","label-quetzal","Quetzal",0,0);

   
   let enemyRaykiou = new Mokepon("./images/i03_raykiou.png",'Raykiou-input',"label-raykiou","Raykiou",enemiesPositions.enemy3[0],enemiesPositions.enemy3[1]);

   let enemyJoka = new Mokepon("./images/i01_joka.png",'Joka-input',"label-joka","Joka",enemiesPositions.enemy1[0],enemiesPositions.enemy1[1]);
      
   let enemyCrabster = new Mokepon("./images/i02_Crabster.png",'crabster-input',"label-crabster","Crabster",enemiesPositions.enemy2[0],enemiesPositions.enemy2[1]);

   let enemyRocker = new Mokepon("./images/Rocker.png","Rocker-input","label-rocker","Rocker",enemiesPositions.enemy6[0],enemiesPositions.enemy6[1]);

   let enemyTruthler = new Mokepon("./images/Truthler.png","Truthler-input","label-truthler","Truthler",enemiesPositions.enemy4[0],enemiesPositions.enemy4[1]);

   let enemyQuetzal = new Mokepon("./images/Quetzal.png","Quetzal-input","label-quetzal","Quetzal",enemiesPositions.enemy5[0],enemiesPositions.enemy5[1]);

   // logIn("Joka Coords 1");
   //    logIn(enemyJoka.x);
   //    logIn(enemyJoka.y);

   // logIn("Enemy Crabster 1");
   //    logIn(enemyCrabster.x);
   //    logIn(enemyCrabster.y);

   // logIn("Enemy Raykiou 1");
   //    logIn(enemyRaykiou.x);
   //    logIn(enemyRaykiou.y);

   // logIn("Enemy Truthler 1");
   //    logIn(enemyTruthler.x);
   //    logIn(enemyTruthler.y);

   // logIn("Enemy Quetzal 1");
   //    logIn(enemyQuetzal.x);
   //    logIn(enemyQuetzal.y);

   // logIn("Enemy Rocker 1")
   //    logIn(enemyRocker.x);
   //    logIn(enemyRocker.y);

   // logIn(" ");


/* In the properties of our class we have some arrays, so we are using the "push()" Loop to idex new objects with the information of our mokepons atacks */
   mokepons.push(Raykiou,Joka,Crabster,Quetzal,Rocker,Truthler);

   enemyMokepons = [...mokepons];

   mapEnemies.push(enemyRaykiou,enemyCrabster,enemyJoka,enemyQuetzal,enemyRocker,enemyTruthler);
      //logIn(mapEnemies);

//Here we create the Raykiou atacks and properties
      Raykiou.atacks.push(

         {atkName:"Flare",id:'flare',class:'fire',color:'Fire'},
         {atkName:"Ionic Roar",id:'ionicRoar' ,class:'thunder',color:'Thunder'},
         {atkName:"Incinerate",id:'incinerate',class:'fire',color:'Fire'},
         {atkName:"Fire Punch",id:'fire-punch',class:'fire',color:'Fire'},
         {atkName:"Rock Spikes",id:'rock-spikes',class:'earth',color:'Earth'},
         
      );

   Raykiou.type.push('fire','thunder');//We push the types in the Raykiou type propertie


//Here we create the Joka atacks and properties
      Joka.atacks.push(

         {atkName:"Water Stream",id:'waterStream' ,class:'water',color:'Water'},
         {atkName:"Spring",id:'spring' ,class:'water',color:'Water'},
         {atkName:"Vine",id:'vine' ,class:'earth',color:'Earth'},
         {atkName:"Avalanche",id:'avalanche' ,class:'earth',color:'Earth'},
         {atkName:"EarthQuake",id:'earthQuake' ,class:'earth',color:'Earth'},

      );
   Joka.type.push('earth','water');//We push the types in the Joka type propertie


//Here we create the Crabsters atacks and properties
      Crabster.atacks.push(

         {atkName:"Ice Spikes",id:'iceSpikes',class:'ice',color:'Ice'},
         {atkName:"Blizzard",id:'blizzard',class:'ice',color:'Ice'},
         {atkName:"Frost",id:'frost',class:'ice',color:'Ice'},
         {atkName:"Fire Punch",id:'fire-punch',class:'fire',color:'Fire'},
         {atkName:"Steel Claw",id:'steelClaw',class:'steel',color:'Steel'},
         
      );

   Crabster.type.push('ice','steel');//We push the types in the Crabster type propertie


//Here we create the Truthler atacks and properties
      Truthler.atacks.push(


         {atkName:"Bolt",id:'bolt',class:'thunder',color:'Thunder'},
         {atkName:"Rain of Spikes",id:'rainOfSpikes',class:'steel',color:'Steel'},
         {atkName:"Fire Shoot",id:'fireShoot',class:'fire',color:'Fire'},
         {atkName:"Blitz",id:'blitz',class:'thunder',color:'Thunder'},
         {atkName:"Iron Whip",id:'ironWhip',class:'steel',color:'Steel'}

      );

   Truthler.type.push('thunder','steel');//We push the types in the Truthler type propertie


//Here we create the Quetzal atacks and properties
      Quetzal.atacks.push(


         {atkName:"Tornado",id:'tornado',class:'air',color:'Air'},
         {atkName:"Water Stream",id:'waterStream',class:'water',color:'Water'},
         {atkName:"Storm",id:'storm',class:'water',color:'Water'},
         {atkName:"Hurricane",id:'hurricane',class:'air',color:'Air'},
         {atkName:"Breath",id:'breath',class:'air',color:'Air'}

      );

   Quetzal.type.push('air','water');//We push the types in the Quetzal type propertie

//Here we create the Rocker atacks and properties
      Rocker.atacks.push(


   {atkName:"Fracture",id:'fracture',class:'earth',color:'Earth'},
   {atkName:"Metal Smash",id:'metalSmash',class:'steel',color:'Steel'},
   {atkName:"Titanium Kick",id:'titaniumKick',class:'steel',color:'Steel'},
   {atkName:"Rock Shoter",id:'rockShooter',class:'earth',color:'Earth'},
   {atkName:"Meteor",id:'meteor',class:'earth',color:'Earth'}

);

   Rocker.type.push('earth','steel');//We push the types in the Rocker type propertie


   //This is for when our page load we start the game  
      window = addEventListener('load',startGame);


      function hideAttackElements(){

         //HIDE ELEMENTS

      /*We will acceed for the "style" 
      propertie for hide the elements that 
      we don't need at the start of the game"*/
   
      hideAttacks.style.display = "none";//Here we show our div attacks

      hideSpanElements.style.display = "none";
      
      atkBox.style.display = "none";

      hideCombatTables.style.display = "none";

      playerSectionMessage.style.display = "none";

      enemySectionMessage.style.display = "none";

      mkMapBox.style.display = 'none';

   // mapBox.style.display = "none";

      }

   hideAttackElements();


   function typeSetter(Mk1,MkEnemy1,Mk2,MkEnemy2){

      /* fire,water,earth,steel,thunder,air,ice */
   
      /* Statement for every time that our First Type got an advantage */
         if(Mk1 == 'fire' && MkEnemy1 == 'ice'|| Mk1 == 'fire' && MkEnemy1 == 'thunder' || Mk1 == 'fire' && MkEnemy1 == 'steel'||
   
         /*Situations were Ice win */
         Mk1 == 'ice' && MkEnemy1 == 'water' || Mk1 == 'ice' && MkEnemy1 == 'earth' || Mk1 == 'ice' && MkEnemy1 == 'air'||
   
         /* Situations were Earth win */
         Mk1 == 'earth' && MkEnemy1 == 'fire' || Mk1 == 'earth' && MkEnemy1 == 'thunder' || Mk1 == 'earth' && MkEnemy1 == 'steel'||
   
         /*Situations were Rayo win */
         Mk1 == 'thunder' && MkEnemy1 == 'ice' || Mk1 == 'thunder' && MkEnemy1 == 'steel' || Mk1 == 'thunder' && MkEnemy1 == 'air' || 
         
         Mk1 == 'water' && MkEnemy1 == 'fire' || Mk1 == 'water' && MkEnemy1 == 'earth' || Mk1 == 'water' && MkEnemy1 == 'thunder' || 
   
         /* Situations were Metal win */
         Mk1 == 'steel' && MkEnemy1 == 'ice' || Mk1 == 'steel' && MkEnemy1 == 'water' || Mk1 == 'steel' && MkEnemy1 == 'air' || 
   
         /* Situations were Air win */
         Mk1 == 'air' && MkEnemy1 == 'fire' || Mk1 == 'air' && MkEnemy1 == 'water' || Mk1 == 'air' && MkEnemy1 == 'earth'){
   
               advantagePlayer++;
                  logIn(advantagePlayer);
   
               } else {
   
                  advantageEnemy++;
                     logIn(advantageEnemy);
   
               }
   
            /*Statement for every time that our Second Type got an advantage */
               if( Mk2 == 'fire' && MkEnemy2 == 'ice'|| Mk2 == 'fire' && MkEnemy2 == 'thunder' || Mk2 == 'fire' && MkEnemy2 == 'steel'||
   
               /*Situations were Ice win */
               Mk2 == 'ice' && MkEnemy2 == 'water' || Mk2 == 'ice' && MkEnemy2 == 'earth' || Mk2 == 'ice' && MkEnemy2 == 'air'||
         
               /* Situations were Earth win */
               Mk2 == 'earth' && MkEnemy2 == 'fire' || Mk2 == 'earth' && MkEnemy2 == 'thunder' || Mk2 == 'earth' && MkEnemy2 == 'steel'||
         
               /*Situations were Rayo win */
               Mk2 == 'thunder' && MkEnemy2 == 'ice' || Mk2 == 'thunder' && MkEnemy2 == 'steel' || Mk2 == 'thunder' && MkEnemy2 == 'air' || 
               
               Mk2 == 'water' && MkEnemy2 == 'fire' || Mk2 == 'water' && MkEnemy2 == 'earth' || Mk2 == 'water' && MkEnemy2 == 'thunder' || 
         
               /* Situations were Metal win */
               Mk2 == 'steel' && MkEnemy2 == 'ice' || Mk2 == 'steel' && MkEnemy2 == 'water' || Mk2 == 'steel' && MkEnemy2 == 'air' || 
         
               /* Situations were Air win */
               Mk2 == 'air' && MkEnemy2 == 'fire' || Mk2 == 'air' && MkEnemy2 == 'water' || Mk1 == 'air' && MkEnemy2 == 'earth' ){
   
                  advantagePlayer++;
                     logIn(advantagePlayer);
   
                  } else{
   
                     advantageEnemy++;
                        logIn(advantageEnemy);
   
                  }
   
   }

   

function startGame(){

/*README:Here we are populating information inside our html objects aplying "forEach" method to abstract every element inside our array that have our mokepons that are represented with objects, including their properties,and we are making a nested function inside the parameter of our "forEach" method, that generate a HTML structure that have the of our parameter, that have every propertie of every element inside our array, and it put by the default iterative execute of "forEach" inside our var "selectionBox" that represents the div that have to contain our visible HTML elements of our mokepons  */

joinGame();

mokepons.forEach((mokepon) => {


   /*We can abstract HTML code pieces inside our js vars and objects, and we can index information of js inside our html directly  */
      selectionStructure = `
      
      <input type ="radio" name ="pets" id =${mokepon.input} class ="button-selection-mokepon" />
            <label id = ${mokepon.label} class ="label-mokepon" for = ${mokepon.input}> 

               <img src= ${mokepon.image} class = "image-label-mokepon">
               <p class = "name-label-mokepon">${mokepon.name}</p>

            </label>
            
            `;

            selectionBox.innerHTML += selectionStructure
   })

   /*Here we abstract the input of our mk to check if someone is checked or isn't */
   let Fire = $(Raykiou.input);
   
   let Ice = $(Crabster.input);
      
   let Earth = $(Joka.input);

   let Quetza= $(Quetzal.input);

   let Truth = $(Truthler.input);

   let Rock = $(Rocker.input);


   /* This function works with the "player" var for take the entire object for use the specific information of our selected Mk for render ir in the map and work with his colitions */
      function mkMapPlayerSelection(){

         if(Fire.checked){

            player = {...Raykiou};

         }

         if(Ice.checked){

            player = {...Crabster};

         }

         if(Earth.checked){

            player = {...Joka};

         }

         if(Quetza.checked){

            player = {...Quetzal};

         }

         if(Rock.checked){

            player = {...Rocker};

         }

         if(Truthler.checked){

            player = {...Truthler};

         }

         player.x++;
         player.y++;
         
         mkMapImage.src = player.image;//We define the mk image like resource of our image
   }

   

   //Function for change the display of our battle HTML elements and show it
   function gameRendering(){

      //HIDE ELEMENTS
         selectionBox.style.display = "none";
      
         hideDivSubTittles.style.display = "none";
      
         hideSelectionButton.style.display = "none";
      
         hideSelectionDiv.style.display = 'none';
      
      
      //SHOW ELEMENTS
      
         hideAttacks.style.display = 'flex';//Here we show our div attacks
      
         hideSpanElements.style.display = 'flex';//flex
      
         atkBox.style.display = "flex";//flex
      
      
      
      /* Here we are set our css properties to center in screen our new atacks*/
      
         hideCombatTables.style.display = "grid";//grid
      
         playerSectionMessage.style.display = 'block';//block
      
         enemySectionMessage.style.display = 'block';//block
      
      }

      
      //Here we change the displays of our HTML elements for show our map
      function mapRendering(){

         mokeponMap.width = 720;
         mokeponMap.height = 720;

         //HIDE ELEMENTS
         selectionBox.style.display = "none";
      
         hideDivSubTittles.style.display = "none";
      
         hideSelectionButton.style.display = "none";
      
         hideSelectionDiv.style.display = 'none';

         mkMapBox.style.display = 'flex';


         mkMapPlayerSelection();//We call the function of our mk
         mkMapRendering();
         mapEnemiesRendering();

         
      }
      
      function checkMkColisions(){


         if(player.x === 645){

            speed = 0;
            player.x = player.x - 4;

         } else {

            speed = maxValue;

         } 

         if (player.y === 645){

            speed = 0;
            player.y = player.y - 4;

         } else {

            speed = maxValue;

         }


         
         if(player.y < 0){

            speed = 0;
            player.y = player.y + 4;

         } else if(player.y > 0){

            speed = maxValue;

         }



         if(player.x < 0){

            speed = 0;
            player.x = player.x + 4;

         } else if(player.x > 0){

            speed = maxValue;

         }     

         let downPlayer = player.y + player.width;
         let upPlayer = player.y;
         let rightPlayer = player.x + player.width;
         let leftPlayer = player.x;
         

         for (let index = 0; index < mapEnemies.length; index++) {
         
            if(

               downPlayer < mapEnemies[index].y + 43||
               upPlayer > mapEnemies[index].y + mapEnemies[index].height - 43||
               rightPlayer < mapEnemies[index].x + 43 ||
               leftPlayer > mapEnemies[index].x + mapEnemies[index].width - 43

            ){
            } else{

               alert("Colisions");

            }

         }

         

         for (let index = 0; index < copiedEnemiesBox.length; index++) {
            
            if(

               downPlayer < copiedEnemiesBox[index][1] + 43||
               upPlayer > copiedEnemiesBox[index][1] + mapEnemies[0].height - 43||
               rightPlayer < copiedEnemiesBox[index][0] + 43 ||
               leftPlayer > copiedEnemiesBox[index][0] + mapEnemies[0].width - 43


            ){

            }else{

               alert("colisions")

            }

         }

      }


      function enemyColisions(){

            
         let downPlayer = player.y + player.width;
         let upPlayer = player.y;
         let rightPlayer = player.x + player.width;
         let leftPlayer = player.x;
         

         for (let index = 0; index < mapEnemies.length; index++) {
         
            if(

               mapEnemies[index].y + 43  < downPlayer||
               mapEnemies[index].y + mapEnemies[index].height - 43  > upPlayer||
               rightPlayer < mapEnemies[index].x + 43 ||
               mapEnemies[index].x + mapEnemies[index].width - 43 > leftPlayer

            ){
            } else{

               alert("Colisions");

            }

         }

         

         for (let index = 0; index < copiedEnemiesBox.length; index++) {
            
            if(

               copiedEnemiesBox[index][1] + 43 < downPlayer  ||
               copiedEnemiesBox[index][1] + mapEnemies[0].height - 43 > upPlayer ||
               copiedEnemiesBox[index][0] + 43 <  rightPlayer||
               copiedEnemiesBox[index][0] + mapEnemies[0].width - 43 > leftPlayer


            ){

            }else{

               alert("colisions")

            }

      }

   }   

      function mapEnemySetter1(){

         enemyImage.src = Crabster.image;

            mapDimension.drawImage(enemyImage,enemiesPositions.enemy7[0], enemiesPositions.enemy7[1], mapEnemies[5].width, mapEnemies[5].height);

   
      }
   
      function mapEnemySetter2(){
   
         enemyImage.src = Truthler.image;

            mapDimension.drawImage(enemyImage, enemiesPositions.enemy8[0], enemiesPositions.enemy8[1], mapEnemies[0].width, mapEnemies[0].height);
   
      }
   
      
      function mapEnemySetter3(){
   
         enemyImage.src = Joka.image;

            mapDimension.drawImage(enemyImage, enemiesPositions.enemy9[0], enemiesPositions.enemy9[1], mapEnemies[4].width, mapEnemies[4].height);
   
      }
   
      function mapEnemySetter4(){
   
         enemyImage.src = Raykiou.image;
      
            mapDimension.drawImage(enemyImage,enemiesPositions.enemy10[0] ,enemiesPositions.enemy10[1] , mapEnemies[3].width, mapEnemies[3].height);

      
      }
   
      function mapEnemySetter5(){
   
         enemyImage.src = Quetzal.image;
         
            mapDimension.drawImage(enemyImage,enemiesPositions.enemy11[0], enemiesPositions.enemy11[1], mapEnemies[2].width, mapEnemies[2].height);
   
      }
   
      function mapEnemySetter6(){
   
         enemyImage.src = Rocker.image;
            
            mapDimension.drawImage(enemyImage, enemiesPositions.enemy12[0], enemiesPositions.enemy12[1], mapEnemies[1].width, mapEnemies[1].height);

      }

      function mapEnemySetter7(){

         enemyImage.src = enemyRocker.image;

            mapDimension.drawImage(enemyImage, enemyRocker.x, enemyRocker.y, enemyRocker.width, enemyRocker.height);

      }

      function mapEnemySetter8(){

         enemyImage.src = enemyCrabster.image;

               mapDimension.drawImage(enemyImage, enemyCrabster.x, enemyCrabster.y, enemyCrabster.width, enemyCrabster.height);

      }

      function mapEnemySetter9(){

         enemyImage.src = enemyRaykiou.image;

            mapDimension.drawImage(enemyImage, enemyRaykiou.x, enemyRaykiou.y, enemyRaykiou.width, enemyRaykiou.height);

      }

      function mapEnemySetter10(){

         enemyImage.src = enemyQuetzal.image;

            mapDimension.drawImage(enemyImage, enemyQuetzal.x, enemyQuetzal.y, enemyQuetzal.width, enemyQuetzal.height);

      }

      function mapEnemySetter11(){

         enemyImage.src = enemyJoka.image;
            
            mapDimension.drawImage(enemyImage, enemyJoka.x, enemyJoka.y, enemyJoka.width, enemyJoka.height);

      }

      function mapEnemySetter12(){

         enemyImage.src = enemyTruthler.image;

               mapDimension.drawImage(enemyImage, enemyTruthler.x,enemyTruthler.y, enemyTruthler.width, enemyTruthler.height);

      }


      function mapEnemiesRendering(){

         mapEnemySetter1();

         mapEnemySetter2();

         mapEnemySetter3();

         mapEnemySetter4();

         mapEnemySetter5();

         mapEnemySetter6();

         mapEnemySetter7();

         mapEnemySetter8();

         mapEnemySetter9();

         mapEnemySetter10();

         mapEnemySetter11();

         mapEnemySetter12();

      }


      //We this we make a automatic movement of our enemies


      function mkMapRendering(){
      
         mkMapSpan.innerHTML = player.name;

            checkMkColisions();

      }


      function moveUp(valueY){

         valueY = speed;

         player.y = player.y - valueY;

         checkMkColisions();

      }


      function moveDown(valueY){

            valueY = speed;

            player.y = player.y + valueY;

            checkMkColisions();
   
      }


      function moveLeft(valueX){

         valueX = speed;

         player.x = player.x - valueX;

         checkMkColisions();

      }

      function moveRight(valueX){

            valueX = speed;

            player.x = player.x + valueX;

            checkMkColisions();
   
      }


      function moveEnemies1(){

         /* enemy Raykiou 1 */
               intervalsIdList.repeatersLists = setInterval(() => {
               
               mapEnemies[0].x = mapEnemies[0].x + 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists);

               requestAnimationFrame(moveEnemiesReverse1);

            }, 3200);
            

      };


      function moveEnemiesReverse1(){
      
         //Mk1
            intervalsIdList.repeaterReverseLists = setInterval(() => {

               mapEnemies[0].x = mapEnemies[0].x - 2;
   
            }, 50);
            
         
         setTimeout(() => {

            clearInterval(intervalsIdList.repeaterReverseLists);
               
            requestAnimationFrame(moveEnemies1);

         }, 3200);

         
         
      } 
   

      function moveEnemies2(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists2 = setInterval(() => {
               
               mapEnemies[1].x = mapEnemies[1].x - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists2);

               requestAnimationFrame(moveEnemiesReverse2);

            }, 8500);

      }

      function moveEnemiesReverse2(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists2 = setInterval(() => {
               
               mapEnemies[1].x = mapEnemies[1].x + 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists2);

               requestAnimationFrame(moveEnemies2);

            }, 8500);

      }


      function moveEnemies3(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists3 = setInterval(() => {
               
               mapEnemies[2].y = mapEnemies[2].y - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists3);

               requestAnimationFrame(moveEnemiesReverse3);

            }, 2600);

      }

      function moveEnemiesReverse3(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists3 = setInterval(() => {
               
               mapEnemies[2].y = mapEnemies[2].y + 2;

            }, 50);


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists3);

               requestAnimationFrame(moveEnemies3);

            }, 2600);

      }


      function moveEnemies4(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists4 = setInterval(() => {
               
               mapEnemies[3].y = mapEnemies[3].y + 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists4);

               requestAnimationFrame(moveEnemiesReverse4);

            }, 3400);

      }

      function moveEnemiesReverse4(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists4 = setInterval(() => {
               
               mapEnemies[3].y = mapEnemies[3].y - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists4);

               requestAnimationFrame(moveEnemies4);

            }, 3400);

      }


      function moveEnemies5(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists5 = setInterval(() => {
               
               mapEnemies[4].y = mapEnemies[4].y - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists5);

               requestAnimationFrame(moveEnemiesReverse5);

            }, 2900);

      }

      function moveEnemiesReverse5(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists5 = setInterval(() => {
               
               mapEnemies[4].y = mapEnemies[4].y + 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists5);

               requestAnimationFrame(moveEnemies5);

            }, 2900);

      }
      

      function moveEnemies6(){

         /* enemy Raykiou 1 */
            repeaterLists6 = setInterval(() => {
               
               mapEnemies[5].x = mapEnemies[5].x + 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(repeaterLists6);

               requestAnimationFrame(moveEnemiesReverse6);

            }, 2700);

      }

      function moveEnemiesReverse6(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersListsReverse6 = setInterval(() => {
               
               mapEnemies[5].x = mapEnemies[5].x - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersListsReverse6);

               requestAnimationFrame(moveEnemies6);

            }, 2700);

      }


      function moveEnemies7(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists7 = setInterval(() => {
               
               enemiesPositions.enemy7[0] = enemiesPositions.enemy7[0] - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists7);

               requestAnimationFrame(moveEnemiesReverse7);

            }, 2900);

      }

      function moveEnemiesReverse7(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists7 = setInterval(() => {
               
               enemiesPositions.enemy7[0] = enemiesPositions.enemy7[0] + 2;

            }, 50);


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists7);

               requestAnimationFrame(moveEnemies7);

            }, 2900);

      }


      function moveEnemies8(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists8 = setInterval(() => {
               
               enemiesPositions.enemy8[1] = enemiesPositions.enemy8[1] + 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists8);

               requestAnimationFrame(moveEnemiesReverse8);

            }, 3100);

      }

      function moveEnemiesReverse8(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeaterReverseLists8 = setInterval(() => {
               
               enemiesPositions.enemy8[1] = enemiesPositions.enemy8[1] - 2;

            }, 50);


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeaterReverseLists8);

               requestAnimationFrame(moveEnemies8);

            }, 3100);

      }


      function moveEnemies9(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists9 = setInterval(() => {
               
               enemiesPositions.enemy9[0] = enemiesPositions.enemy9[0] - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists9);

               requestAnimationFrame(moveEnemiesReverse9);

            }, 2900);

      }

      function moveEnemiesReverse9(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists9 = setInterval(() => {
               
               enemiesPositions.enemy9[0] = enemiesPositions.enemy9[0] + 2;

            }, 50);


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists9);

               requestAnimationFrame(moveEnemies9);

            }, 2900);

      }


      function moveEnemies10(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists10 = setInterval(() => {
               
               enemiesPositions.enemy10[1] = enemiesPositions.enemy10[1] - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists10);

               requestAnimationFrame(moveEnemiesReverse10);

            }, 3900);

      }

      function moveEnemiesReverse10(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists10 = setInterval(() => {
               
               enemiesPositions.enemy10[1] =  enemiesPositions.enemy10[1] + 2;

            }, 50);


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists10);

               requestAnimationFrame(moveEnemies10);

            }, 3900);

      }


      function moveEnemies11(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists11 = setInterval(() => {
               
               enemiesPositions.enemy11[0] = enemiesPositions.enemy11[0] - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists11);

               requestAnimationFrame(moveEnemiesReverse11);

            }, 3200);

      }

      function moveEnemiesReverse11(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists11 = setInterval(() => {
               
               enemiesPositions.enemy11[0] = enemiesPositions.enemy11[0] + 2;

            }, 50);


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists11);

               requestAnimationFrame(moveEnemies11);

            }, 3200);

      }


      function moveEnemies12(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists12 = setInterval(() => {
               
               enemiesPositions.enemy12[0] = enemiesPositions.enemy12[0] - 2;

            }, 50);
            


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists12);

               requestAnimationFrame(moveEnemiesReverse12);

            }, 3100);

      }

      function moveEnemiesReverse12(){

         /* enemy Raykiou 1 */
            intervalsIdList.repeatersLists12 = setInterval(() => {
               
               enemiesPositions.enemy12[0] = enemiesPositions.enemy12[0] + 2;

            }, 50);


            setTimeout(() => {
               
               clearInterval(intervalsIdList.repeatersLists12);

               requestAnimationFrame(moveEnemies12);

            }, 3100);

      }

function animationsCaller(){

      moveEnemies1();
      moveEnemies2();
      moveEnemies3();
      moveEnemies4();
      moveEnemies5();
      moveEnemies6();
      moveEnemies7();
      moveEnemies8();
      moveEnemies9();
      moveEnemies10();
      moveEnemies11();
      moveEnemies12();

}

      // moveEnemies();
      
         function keyPress(event){

            switch(event.key){

            // w a s d move keys
            case 'w':
                  moveUp();
            break;

            case 's':
               moveDown();
            break;

            case 'a':
               moveLeft();
            break;

            case 'd':
               moveRight();
            break;

               default:

               mkMapRendering();
               
               break;

            }
            
      }

      window.addEventListener('keydown',keyPress);
         
      setInterval(() => {
         
         mapDimension.clearRect(player.x,player.y,player.width,player.height);

         for ( index = 0; index < mapEnemies.length; index++) {
         
            mapDimension.clearRect(mapEnemies[index].x,mapEnemies[index].y,mapEnemies[index].width,mapEnemies[index].height)
            
         }
         
         mapDimension.drawImage(mapBackground,0,0,mokeponMap.width,mokeponMap.height);

         mapDimension.drawImage(mkMapImage,player.x,player.y,player.width,player.height);

         mapEnemiesRendering();


      }, 30);

      animationsCaller();

   
   //SELECTION BOTTOMS
      $('Select').onclick = () =>{

      /* Raykiou if statement */
      if(Fire.checked){

         /*Here we are inyecting the name of the pokemon that we selected in our html */
            petName.innerHTML = Raykiou.name;//We Index our Mk info in the HTML span
      
            /*Here we are inyecting the name of the pokemon that we selected in our html */
               nameMkSpan.innerHTML = Raykiou.name;//We Index our Mk info in the HTML span

               imageMkPlayerBox.innerHTML =`<img src = "${Raykiou.image}">`;//We are the image of our Mk Putting inside our element

         /*here we are generating the enemie */
            createEnemies();

            typeSetter(Raykiou.type[0],enemyMokepons[randomEnemy].type[0],Raykiou.type[1],enemyMokepons[randomEnemy].type[1]);//

         /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
            do{
               atackStructure = `<button id = ${Raykiou.atacks[i].id} class = ${Raykiou.atacks[i].class} > ${Raykiou.atacks[i].atkName} </button>  ` 

         atkBox.innerHTML += atackStructure;

         i++;
            }

         while(i != Raykiou.atacks.length)

         i = 0;//We reset our iterator

/*Loop to idex the information that make works our buttons */
   do{

      atkMokepon.push(Raykiou.atacks[i].atkName);

         i++;


   }while( i != Raykiou.atacks.length)

                                                                           /*Raykiou buttons */

                     //First attack button "Llamarada"
                  $('flare').onclick = () =>{elementalAttack = atkMokepon[0]; mkClass = 'fire';playerSectionMessage.innerHTML += `<p class = "${Raykiou.atacks[0].color}">${elementalAttack}</p>`; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('flare').disabled = true; $('flare').style.backgroundColor = "#9e1212"} 
                  ; combat()};

                     //Second attack button "Rugido Ionico"
                  $('ionicRoar').onclick = () =>{elementalAttack = atkMokepon[1];playerSectionMessage.innerHTML += `<p class = "${Raykiou.atacks[1].color}">${elementalAttack}</p>`; mkClass = 'thunder'; 
                  logIn(mkClass); attackEnemy();  ; sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('ionicRoar').disabled = true; $('ionicRoar').style.backgroundColor = "#888124" } ; combat()};

                     //Third attack button "Incinerar"
                  $('incinerate').onclick = () =>{elementalAttack = atkMokepon[2];playerSectionMessage.innerHTML += `<p class = "${Raykiou.atacks[2].color}">${elementalAttack}</p>`; mkClass= 'fire'; 
                  logIn(mkClass.innerText); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){ advantagePlayer--; }else{ $('incinerate').disabled = true; $('incinerate').style.backgroundColor = "#9e1212" };
                  combat()};

                     //Fourth attack button "Puño de Fire"
                  $('fire-punch').onclick = () =>{elementalAttack = atkMokepon[3];playerSectionMessage.innerHTML += `<p class = "${Raykiou.atacks[3].color}">${elementalAttack}</p>`; mkClass = 'fire'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('fire-punch').disabled = true; $('fire-punch').style.backgroundColor = "#9e1212" } ; combat()};

                     //Fifth  attack button "Roca Afilada"
                  $('rock-spikes').onclick = () =>{elementalAttack = atkMokepon[4];playerSectionMessage.innerHTML += `<p class = "${Raykiou.atacks[4].color}">${elementalAttack}</p>`; mkClass = 'earth'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('rock-spikes').disabled = true;  $('rock-spikes').style.backgroundColor = "#0b861c"} ; combat()};
                     
      }


      /* Crabster if statement */
            if(Ice.checked){
                     
                  petName.innerHTML = Crabster.name;//We Index our Mk info in the HTML span

                  nameMkSpan.innerHTML= Crabster.name;//We Index our Mk info in the HTML span

                  imageMkPlayerBox.innerHTML =`<img src = "${Crabster.image}">`;//We are the image of our Mk Putting inside our element

                  createEnemies();//We generate our enemy

                  typeSetter(Crabster.type[0],enemyMokepons[randomEnemy].type[0],Crabster.type[1],enemyMokepons[randomEnemy].type[1]);

                  /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
                     do{
                        atackStructure = `<button id = ${Crabster.atacks[i].id} class = ${Crabster.atacks[i].class}> ${Crabster.atacks[i].atkName} </button>  `  

                  atkBox.innerHTML += atackStructure

                  i++;
               }
                  while(i != Crabster.atacks.length)

                  i = 0;//We reset our iterator


               /*Loop to idex the information that make works our buttons */
                     do{

                        atkMokepon.push(Crabster.atacks[i].atkName);

                        i++;

                     }while( i != Crabster.atacks.length)

                                                                         /*Crabster atacks buttons */
                        //First atack button "Picos de Ice"
                     $('iceSpikes').onclick = () =>{elementalAttack = atkMokepon[0];playerSectionMessage.innerHTML += `<p class = "${Crabster.atacks[0].color}">${elementalAttack}</p>`; 
                     mkClass = 'ice';logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{$('iceSpikes').disabled = true; $('iceSpikes').style.backgroundColor = "#1c509c"}; combat()};

                        //Second atack button "Ventisca"
                     $('blizzard').onclick = () =>{elementalAttack = atkMokepon[1];playerSectionMessage.innerHTML += `<p class = "${Crabster.atacks[1].color}">${elementalAttack}</p>`; mkClass = 'ice'
                     ; logIn(mkClass); attackEnemy() ; sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{$('blizzard').disabled = true; $('blizzard').style.backgroundColor = "#1c509c"}; combat()};

                        //Third atack button "Helada"
                     $('frost').onclick = () =>{elementalAttack = atkMokepon[2];playerSectionMessage.innerHTML += `<p class = "${Crabster.atacks[2].color}">${elementalAttack}</p>`; mkClass = 'ice';
                     logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{$('frost').disabled = true; $('frost').style.backgroundColor = "#1c509c"} ; combat()};

                        //Fourth atack button "Puño de Fire"
                     $('fire-punch').onclick = () =>{elementalAttack = atkMokepon[3];playerSectionMessage.innerHTML += `<p class = "${Crabster.atacks[3].color}">${elementalAttack}</p>`; mkClass = 'fire'; 
                     logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{$('fire-punch').disabled = true; $('fire-punch').style.backgroundColor = "#9e1212" } ; combat()};

                        //Fifth atack button "Garra de Acero"
                     $('steelClaw').onclick = () =>{elementalAttack = atkMokepon[4];playerSectionMessage.innerHTML += `<p class = "${Crabster.atacks[4].color}">${elementalAttack}</p>`; mkClass = 'steel'; 
                     logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least") ; 
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{$('steelClaw').disabled = true; $('steelClaw').style.backgroundColor = "#4d504e" } ; combat()};

                  }


         /* Joka if statement */
            if(Earth.checked){

               petName.innerHTML = Joka.name;//We Index our Mk info in the HTML span
      
               nameMkSpan.innerHTML = Joka.name;//We Index our Mk info in the HTML span

               imageMkPlayerBox.innerHTML =`<img src = "${Joka.image}">`;//We are the image of our Mk Putting inside our element

               createEnemies();//We generate the Enemie

               typeSetter(Joka.type[0],enemyMokepons[randomEnemy].type[0],Joka.type[1],enemyMokepons[randomEnemy].type[1]);

               /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
               do{
                  atackStructure = `<button id = ${Joka.atacks[i].id} class = ${Joka.atacks[i].class}> ${Joka.atacks[i].atkName} </button>  `  

            atkBox.innerHTML += atackStructure

            i++;
         }
            while(i != Joka.atacks.length)

            i = 0;//We reset our iterator

      do{

         atkMokepon.push(Joka.atacks[i].atkName);
         
         i++;

      }while( i != Joka.atacks.length)


                                                                        /*Joka atacks buttons */

                     //first attack button "Water Stream"
                  $('waterStream').onclick = () =>{elementalAttack = atkMokepon[0]; playerSectionMessage.innerHTML += `<p class = "${Joka.atacks[0].color}">${elementalAttack}</p>`; mkClass = 'water'; 
                  logIn(mkClass.innerText); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('waterStream').disabled = true; $('waterStream').style.backgroundColor = "#0f1a5c"; } ;
                  combat()};

                     //second attack button "Manantial"
                  $('spring').onclick = () =>{elementalAttack = atkMokepon[1]; playerSectionMessage.innerHTML += `<p class = "${Joka.atacks[1].color}">${elementalAttack}</p>` ; mkClass = 'water'; 
                  logIn(mkClass.innerText);  attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2) {advantagePlayer--;}else{ $('spring').disabled = true; $('spring').style.backgroundColor = "#0f1a5c"; } ; combat()};

                     //third attack button "enredadera"
                  $('vine').onclick = () =>{elementalAttack = atkMokepon[2]; playerSectionMessage.innerHTML += `<p class = "${Joka.atacks[2].color}">${elementalAttack}</p>` ; mkClass = 'earth'; 
                  logIn(mkClass.innerText); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{$('vine').disabled = true; $('vine').style.backgroundColor = "#0b861c"; } ; 
                  combat()};

                     //fourth attack "Avalancha"
                  $('avalanche').onclick = () =>{elementalAttack = atkMokepon[3];playerSectionMessage.innerHTML += `<p class = "${Joka.atacks[3].color}">${elementalAttack}</p>`; mkClass = 'earth'; 
                  logIn(mkClass.innerText); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('avalanche').disabled = true; $('avalanche').style.backgroundColor = "#0b861c";} ; combat()};

                     //fith attack "Terremoto"
                  $('earthQuake').onclick = () =>{elementalAttack = atkMokepon[4];playerSectionMessage.innerHTML += `<p class = "${Joka.atacks[4].color}">${elementalAttack}</p>`; mkClass = 'earth'; 
                  logIn(mkClass.innerText);  attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('earthQuake').disabled = true; $('earthQuake').style.backgroundColor = "#0b861c"; } ; combat()};

            } 

      /*Truthler if statement*/
         if(Truth.checked){
   
            petName.innerHTML = Truthler.name;//We Index our Mk info in the HTML span
            
            nameMkSpan.innerHTML = Truthler.name;//We Index our Mk info in the HTML span

            imageMkPlayerBox.innerHTML =`<img src = "${Truthler.image}">`;//We are the image of our Mk Putting inside our element

            createEnemies();//We generate the Enemie

            typeSetter(Truthler.type[0],enemyMokepons[randomEnemy].type[0],Truthler.type[1],enemyMokepons[randomEnemy].type[1]);

            /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
                  do{
                     atackStructure = `<button id = ${Truthler.atacks[i].id} class = ${Truthler.atacks[i].class} > ${Truthler.atacks[i].atkName} </button>  ` 

               atkBox.innerHTML += atackStructure;

               i++;
                  }

               while(i != Truthler.atacks.length)

         i = 0;//We reset our iterator

   /*Loop to idex the information that make works our buttons */
      do{

         atkMokepon.push(Truthler.atacks[i].atkName);

            i++;


      }while( i != Truthler.atacks.length)

                                                                                    /*Truthler buttons */

                        //First attack "Bolt"
                     $('bolt').onclick = () =>{elementalAttack = atkMokepon[0];playerSectionMessage.innerHTML += `<p class = "${Truthler.atacks[0].color}">${elementalAttack}</p>`; mkClass = 'thunder'; 
                     logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('bolt').disabled = true; $('bolt').style.backgroundColor = "#888124"; } ; combat()};

                        //Second attack "Rain of Spikes"
                     $('rainOfSpikes').onclick = () =>{elementalAttack = atkMokepon[1];playerSectionMessage.innerHTML += `<p class = "${Truthler.atacks[1].color}">${elementalAttack}</p>`; mkClass = 'steel'; 
                     logIn(mkClass); attackEnemy();  ; sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('rainOfSpikes').disabled = true; $('rainOfSpikes').style.backgroundColor = "#4d504e"; } ;
                     combat()};

                        //Third attack "Fire Shoot"
                     $('fireShoot').onclick = () =>{elementalAttack = atkMokepon[2]; mkClassColor = "Fire";playerSectionMessage.innerHTML += `<p class = "${Truthler.atacks[2].color}">${elementalAttack}</p>`; 
                     mkClass= 'fire'; logIn(mkClass.innerText); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");  
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('fireShoot').disabled = true; $('fireShoot').style.backgroundColor = "#9e1212"; } ;
                     combat()};

                        //Fourth attack "Blitz"
                     $('blitz').onclick = () =>{elementalAttack = atkMokepon[3];playerSectionMessage.innerHTML += `<p class = "${Truthler.atacks[3].color}">${elementalAttack}</p>`; mkClass = 'thunder'; 
                     logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");  
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('blitz').disabled = true; $('blitz').style.backgroundColor = "#888124"; } ; combat()};

                        //Fifth attack "Iron Whip"
                     $('ironWhip').onclick = () =>{elementalAttack = atkMokepon[4];playerSectionMessage.innerHTML += `<p class = "${Truthler.atacks[4].color}">${elementalAttack}</p>`; mkClass = 'steel'; 
                     logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are " + sequency +" turns at least");   
                     if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('ironWhip').disabled = true; $('ironWhip').style.backgroundColor = "#4d504e"; } ; combat()};
            
         }

   /* Rocker if statement */
      if(Rock.checked){

         petName.innerHTML = Rocker.name;//We Index our Mk info in the HTML span
         
         nameMkSpan.innerHTML = Rocker.name;//We Index our Mk info in the HTML span

         imageMkPlayerBox.innerHTML =`<img src = "${Rocker.image}">`;//We are the image of our Mk Putting inside our element

         createEnemies();

         typeSetter(Rocker.type[0],enemyMokepons[randomEnemy].type[0],Rocker.type[1],enemyMokepons[randomEnemy].type[1]);

         /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
         do{
            atackStructure = `<button id = ${Rocker.atacks[i].id} class = ${Rocker.atacks[i].class} > ${Rocker.atacks[i].atkName} </button>  ` 

      atkBox.innerHTML += atackStructure;

      i++;
         }

      while(i != Rocker.atacks.length)

      i = 0;//We reset our iterator

/*Loop to idex the information that make works our buttons */
   do{

      atkMokepon.push(Rocker.atacks[i].atkName);

         i++;

   }while( i != Rocker.atacks.length)


                                                                                                      /*Rocker buttons */

                     //First atack "Fracture"
                  $('fracture').onclick = () =>{elementalAttack = atkMokepon[0];playerSectionMessage.innerHTML += `<p class = "${Rocker.atacks[0].color}">${elementalAttack}</p>`; mkClass = 'earth'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");  
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('fracture').disabled = true; $('fracture').style.backgroundColor = "#0b861c"; } ; combat()}

                     //Second attack "Metal Smash"
                  $('metalSmash').onclick = () =>{elementalAttack = atkMokepon[1];playerSectionMessage.innerHTML += `<p class = "${Rocker.atacks[1].color}">${elementalAttack}</p>`; mkClass = 'steel'; 
                  logIn(mkClass); attackEnemy() ; sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); $('metalSmash').style.backgroundColor = "#4d504e"; if(advantagePlayer == 1 || advantagePlayer == 2)
                  {advantagePlayer--;}else{$('metalSmash').disabled = true} ; combat()};

                     //Third attack "Titanium Kick"
                  $('titaniumKick').onclick = () =>{elementalAttack = atkMokepon[2];playerSectionMessage.innerHTML += `<p class = "${Rocker.atacks[2].color}">${elementalAttack}</p>`; mkClass= 'steel'; 
                  logIn(mkClass.innerText); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");  
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('titaniumKick').disabled = true; $('titaniumKick').style.backgroundColor = "#4d504e"; } ;
                  combat()};

                     //Fourth attack "Rock Shooter"
                  $('rockShooter').onclick = () =>{elementalAttack = atkMokepon[3];playerSectionMessage.innerHTML += `<p class = "${Rocker.atacks[3].color}">${elementalAttack}</p>`; mkClass = 'earth'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('rockShooter').disabled = true;  $('rockShooter').style.backgroundColor = "#0b861c"; } ;
                  combat()};

                     //Fifth attack "Meteor"
                  $('meteor').onclick = () =>{elementalAttack = atkMokepon[4];playerSectionMessage.innerHTML += `<p class = "${Rocker.atacks[4].color}">${elementalAttack}</p>`; mkClass = 'earth'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('meteor').disabled = true;  $('meteor').style.backgroundColor = "#0b861c"; } ; combat()};


      }

      /* Quetzal if statement */
            if(Quetza.checked){

               petName.innerHTML = Quetzal.name;//We Index our Mk info in the HTML span
               
               nameMkSpan.innerHTML = Quetzal.name;//We Index our Mk info in the HTML span

               imageMkPlayerBox.innerHTML =`<img src = "${Quetzal.image}">`;//We are the image of our Mk Putting inside our element

               createEnemies();

               typeSetter(Quetzal.type[0],enemyMokepons[randomEnemy].type[0],Quetzal.type[1],enemyMokepons[randomEnemy].type[1]);

               /* Here we are aplying a loop that generate atacks for every if statement for our mokepons */
               do{
                  atackStructure = `<button id = ${Quetzal.atacks[i].id} class = ${Quetzal.atacks[i].class} > ${Quetzal.atacks[i].atkName} </button>  ` 

            atkBox.innerHTML += atackStructure;

            i++;
               }

            while(i != Quetzal.atacks.length)

      i = 0;//We reset our iterator

/*Loop to idex the information that make works our buttons */
   do{

      atkMokepon.push(Quetzal.atacks[i].atkName);

         i++;


   }while( i != Quetzal.atacks.length)

                                                                                  /*Quetzal buttons */

                     //First attack "Tornado"
                  $('tornado').onclick = () =>{elementalAttack = atkMokepon[0];playerSectionMessage.innerHTML += `<p class = "${Quetzal.atacks[0].color}">${elementalAttack}</p>`; mkClass = 'air'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least"); 
                  if(advantagePlayer == 1 || advantagePlayer == 2) {advantagePlayer--;}else{ $('tornado').disabled = true; $('tornado').style.backgroundColor = "#187a59"; } ; combat();};

                     //Second attack "Water Stream"
                  $('waterStream').onclick = () =>{elementalAttack = atkMokepon[1];playerSectionMessage.innerHTML += `<p class = "${Quetzal.atacks[1].color}">${elementalAttack}</p>`; mkClass = 'water'; 
                  logIn(mkClass); attackEnemy();  ; sequencspeedY-- ; logIn("There are "+sequency+" turns at least");
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('waterStream').disabled = true;  $('waterStream').style.backgroundColor = "#0f1a5c"; } ;
                  combat()};

                     //Third attack "Storm"
                  $('storm').onclick = () =>{elementalAttack = atkMokepon[2];playerSectionMessage.innerHTML += `<p class = "${Quetzal.atacks[2].color}">${elementalAttack}</p>`; mkClass= 'water'; 
                  logIn(mkClass.innerText); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('storm').disabled = true; $('storm').style.backgroundColor = "#0f1a5c"; } ; combat()}

                     //Fourth attack "Hurricane"
                  $('hurricane').onclick = () =>{elementalAttack = atkMokepon[3];playerSectionMessage.innerHTML += `<p class = "${Quetzal.atacks[3].color}">${elementalAttack}</p>`; mkClass = 'air'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");  
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{ $('hurricane').disabled = true; $('hurricane').style.backgroundColor = "#187a59"; } ; combat()};

                     //Fifth attacks "Breath"
                  $('breath').onclick = () =>{elementalAttack = atkMokepon[4];playerSectionMessage.innerHTML += `<p class = "${Quetzal.atacks[4].color}">${elementalAttack}</p>`; mkClass = 'air'; 
                  logIn(mkClass); attackEnemy(); sequencspeedY-- ; logIn("There are "+sequency+" turns at least");  
                  if(advantagePlayer == 1 || advantagePlayer == 2){advantagePlayer--;}else{$('breath').disabled = true; $('breath').style.backgroundColor = "#187a59"; } ; combat()};

      }

      // gameRendering();//We call the function

      mapRendering();

}


let renameButton = $("Rename-mokepon");
   renameButton.onclick = () => {

      let petName = $("mokepon-name");

      let renameInput = $("rename-button");

      let renameDataInput = renameInput.value;

      petName.innerHTML = renameDataInput;

      $('game-functionality').style.display = "none";

   }

let btnNotCallMk = $('No-Rename-Mokepon');
   btnNotCallMk.onclick = () => {

   $('game-functionality').style.display = "none";


   }
   

 /* Here we are reloading our page when we click the button */
   $("new-game").onclick = () => {

      location.reload();

}

};


function createEnemies(){

   /*condition to generate a enemy */

let enemyName = $("name-enemy");

randomEnemy = randomMonster(0,enemyMokepons.length - 1 ); 
   enemyName.innerText = enemyMokepons[randomEnemy].name;//We Index our Mk info in the HTML span

   imageMkEnemyBox.innerHTML =`<img src = "${enemyMokepons[randomEnemy].image}">`;

}

/*Homework: we could give types from every mokepon,and give a specific adventage taking every type*/ 


/* Here we generate randoms atacks four enemy */
function attackEnemy(){

   /* We are defining a random number from our iterator */
      i= randomMonster(0,enemyMokepons[randomEnemy].atacks.length-1)

      /* We take one attack of the 15 atacks we have */
         elementalAttackEnemy = enemyMokepons[randomEnemy].atacks[i];

      /* We are puttting inside our var the color of our enemy's attack message */
         mkClassEnemy = elementalAttackEnemy.class;
            logIn(mkClassEnemy);

      /* We are putting enemy's message inside our HTML */
         enemySectionMessage.innerHTML += `<p class = "${elementalAttackEnemy.color}">${elementalAttackEnemy.atkName}</p>`;

       /*We are put the number were we have the enemy's attack  form remove it later */
         let index = enemyMokepons[randomEnemy].atacks.indexOf(enemyMokepons[randomEnemy].atacks[i]); ;
            logIn(index);

            if(advantageEnemy == 1){
               
               advantageEnemy--; 
            
            }else if(advantageEnemy == 2){ 
               
               advantageEnemy--; 
               
            } else if(advantageEnemy == 0){
               
               /* Here we delete the attack that we use for */
            enemyMokepons[randomEnemy].atacks.splice(index,1);
               logIn(enemyMokepons[randomEnemy].atacks);}

}


/* Here we set the elements of our program for combat, and how with this we can manipulate our css, html an js in our page */
function combat(){

   //We abstract in vars the info about our Mk inputs selection buttons
      let Fire = $(Raykiou.input);
   
      let Ice = $(Crabster.input);
      
      let Earth = $(Joka.input);

      let Truth = $(Truthler.input);

      let Rock = $(Rocker.input);

      let Quetza = $(Quetzal.input);


   /*Vicory Situations*/
      if(
      
         /*Situations were Fire win */
         mkClass == 'fire' && mkClassEnemy == 'ice'|| mkClass == 'fire' && mkClassEnemy == 'thunder' || mkClass == 'fire' && mkClassEnemy == 'steel'||

         /*Situations were Ice win */
         mkClass == 'ice' && mkClassEnemy == 'water' || mkClass == 'ice' && mkClassEnemy == 'earth' || mkClass == 'ice' && mkClassEnemy == 'air'||

         /* Situations were Earth win */
         mkClass == 'earth' && mkClassEnemy == 'fire' || mkClass == 'earth' && mkClassEnemy == 'thunder' || mkClass == 'earth' && mkClassEnemy == 'steel'||

         /*Situations were Rayo win */
         mkClass == 'thunder' && mkClassEnemy == 'ice' || mkClass == 'thunder' && mkClassEnemy == 'steel' || mkClass == 'thunder' && mkClassEnemy == 'air' || 
         
         mkClass == 'water' && mkClassEnemy == 'fire' || mkClass == 'water' && mkClassEnemy == 'earth' || mkClass == 'water' && mkClassEnemy == 'thunder' || 

         /* Situations were Metal win */
         mkClass == 'steel' && mkClassEnemy == 'ice' || mkClass == 'steel' && mkClassEnemy == 'water' || mkClass == 'steel' && mkClassEnemy == 'air' || 

         /* Situations were Air win */
         mkClass == 'air' && mkClassEnemy == 'fire' || mkClass == 'air' && mkClassEnemy == 'water' || mkClass == 'air' && mkClassEnemy == 'earth'
      
         )
         
         {

         victoriesPlayer++;//We got a Victory

         $("victories-Span-Player").innerHTML = victoriesPlayer;

         finalResult.innerHTML ="YOU WIN";
         
         logIn(mkClass,mkClassEnemy);
         logIn(victoriesPlayer,victoriesEnemy);

      } else if(elementalAttack == elementalAttackEnemy){

         finalResult.innerHTML = "DRAW";//We got a draw

         logIn(mkClass,mkClassEnemy);
         logIn(victoriesPlayer,victoriesEnemy);
      
         } else if(mkClass == mkClassEnemy){

            finalResult.innerHTML = "DRAW";

         logIn(mkClass,mkClassEnemy);
         logIn(victoriesPlayer,victoriesEnemy);

         } else {

      victoriesEnemspeedY++;

      finalResult.innerHTML = "YOU LOOSE";//We got a loose

      $('victories-Span-enemy').innerHTML = victoriesEnemy;

         logIn(mkClass,mkClassEnemy);
         logIn(victoriesPlayer,victoriesEnemy);

      }



   /*Crabster statement  */
      if(Fire.checked){

      /* Stop game if we won statement */
            if(sequency == 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";

               /* We will disable the buttons of Raykiou */
                  $('flare').disabled = true;
                  $('ionicRoar').disabled = true;
                  $('incinerate').disabled = true;
                  $('fire-punch').disabled = true;
                  $('rock-spikes').disabled = true;

            } 
      
      /* Stop game if we lose statement */
            if(sequency == 0 && victoriesPlayer < victoriesEnemy ){

               finalResult.innerHTML = "DEFEAT";

               /* We will disable the buttons of Raykiou */
                  $('flare').disabled = true;
                  $('ionicRoar').disabled = true;
                  $('incinerate').disabled = true;
                  $('fire-punch').disabled = true;
                  $('rock-spikes').disabled = true;

            } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";

               /* We will disable the buttons of Raykiou */
                  $('flare').disabled = true;
                  $('ionicRoar').disabled = true;
                  $('incinerate').disabled = true;
                  $('fire-punch').disabled = true;
                  $('rock-spikes').disabled = true;

            }
   
   /* Crabster statement */
      if(Ice.checked){

         /* Stop game if we won statement */
            if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";

               /* We will disable the buttons of Crabster */
                  $('iceSpikes').disabled = true;
                  $('blizzard').disabled = true;
                  $('frost').disabled = true;
                  $('fire-punch').disabled = true;
                  $('steelClaw').disabled = true;
                  
            } 
            
      /* Stop game if we lose statement */
            if(sequency === 0 && victoriesPlayer < victoriesEnemy ){

               finalResult.innerHTML = "DEFEAT";

               /* We will disable the buttons of Crabster */
                  $('iceSpikes').disabled = true;
                  $('blizzard').disabled = true;
                  $('frost').disabled = true;
                  $('fire-punch').disabled = true;
                  $('steelClaw').disabled = true;

            } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy){

               finalResult.innerHTML = "DRAW";

               /* We will disable the buttons of Crabster */
                  $('iceSpikes').disabled = true;
                  $('blizzard').disabled = true;
                  $('frost').disabled = true;
                  $('fire-punch').disabled = true;
                  $('steelClaw').disabled = true;

            }
   

   /* Joka statement */
      if(Earth.checked){

         /* Stop game if we won statement */
            if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";

               /* We will disable the buttons of Joka */
                  $('waterStream').disabled = true;
                  $('spring').disabled = true;
                  $('vine').disabled = true;
                  $('avalanche').disabled = true;
                  $('earthQuake').disabled = true;

            } 
      
      /* Stop game if we lose statement */
            if(sequency === 0 && victoriesPlayer < victoriesEnemy){

               finalResult.innerHTML = "DEFEAT";

               /* We will disable the buttons of Joka */
                  $('waterStream').disabled = true;
                  $('spring').disabled = true;
                  $('vine').disabled = true;
                  $('avalanche').disabled = true;
                  $('earthQuake').disabled = true;

            } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";

               /* We will disable the buttons of Joka */
                  $('waterStream').disabled = true;
                  $('spring').disabled = true;
                  $('vine').disabled = true;
                  $('avalanche').disabled = true;
                  $('earthQuake').disabled = true;

            }


   /* Truthler statement */
      if(Truth.checked){

      /* Stop game if we won statement */
            if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";

               /* We will disable the buttons of Joka */
                  $('bolt').disabled = true;
                  $('rainOfSpikes').disabled = true;
                  $('fireShoot').disabled = true;
                  $('blitz').disabled = true;
                  $('ironWhip').disabled = true;

            } 
      
      /* Stop game if we lose statement */
            if(sequency === 0 && victoriesPlayer < victoriesEnemy){

               finalResult.innerHTML = "DEFEAT";

               /* We will disable the buttons of Joka */
                  $('bolt').disabled = true;
                  $('rainOfSpikes').disabled = true;
                  $('fireShoot').disabled = true;
                  $('blitz').disabled = true;
                  $('ironWhip').disabled = true;


            } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";

               /* We will disable the buttons of Joka */
                  $('bolt').disabled = true;
                  $('rainOfSpikes').disabled = true;
                  $('fireShoot').disabled = true;
                  $('blitz').disabled = true;
                  $('ironWhip').disabled = true;

            }


   /* Quetzal statement */
      if(Quetza.checked){

         /* Stop game if we won statement */
            if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";

               
               /* We will disable the buttons of Joka */
                  $('tornado').disabled = true;
                  $('waterStream').disabled = true;
                  $('storm').disabled = true;
                  $('hurricane').disabled = true;
                  $('breath').disabled = true;

            } 
      
      /* Stop game if we lose statement */
         if(sequency === 0 && victoriesPlayer < victoriesEnemy){

            finalResult.innerHTML = "DEFEAT";

             /* We will disable the buttons of Joka */
               $('tornado').disabled = true;
               $('waterStream').disabled = true;
               $('storm').disabled = true;
               $('hurricane').disabled = true;
               $('breath').disabled = true;

         } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

            finalResult.innerHTML = "DRAW";

             /* We will disable the buttons of Joka */
               $('tornado').disabled = true;
               $('waterStream').disabled = true;
               $('storm').disabled = true;
               $('hurricane').disabled = true;
               $('breath').disabled = true;

            }


   /* Rocker Statement */
      if(Rock.checked){

         /* Stop game if we won statement */
            if(sequency === 0 && victoriesEnemy < victoriesPlayer ){

               finalResult.innerHTML = "VICTORY";

               /* We will disable the buttons of Joka */
                  $('fracture').disabled = true;
                  $('metalSmash').disabled = true;
                  $('titaniumKick').disabled = true;
                  $('rockShooter').disabled = true;
                  $('meteor').disabled = true;

            } 
      
      /* Stop game if we lose statement */
            if(sequency === 0 && victoriesPlayer < victoriesEnemy){

               finalResult.innerHTML = "DEFEAT";

            } } else if(sequency === 0 && victoriesPlayer == victoriesEnemy ){

               finalResult.innerHTML = "DRAW";

            }


//condition to check if the user's mokepon are name or isn't

}




/*EVENTOS PARA addEventListener

blur = Cuando el elemento pierde el foco.

click = El usuario hace clic sobre el elemento.

dblclick = El usuario hace doble clic sobre el elemento.

focus = El elemento win el foco.

keydown = El usuario presiona una tecla.

keypress = El usuario presiona una tecla y la mantiene pulsada.

keyup = El usuario libera la tecla.


load = El documento termina su carga.

mousedown = El usuario presiona el botón del ratón en un elemento.

mousemove = El usuario mueve el puntero del ratón sobre un elemento.

mouseout = El usuario mueve el puntero fuera de un elemento.

mouseover = El usuario mantiene el puntero sobre un elemento

mouseup = El usuario libera el botón pulsado del ratón sobre un elemento.

Canvas image ideas https://webdesign.tutsplus.com/21-ridiculously-impressive-html5-canvas-experiments--net-14210a

*/

