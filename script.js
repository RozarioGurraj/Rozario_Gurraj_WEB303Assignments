/*
    Assignment 05
*/

$(document).ready(function () {
   
 class ContentItem{
    Anime_ID;
    Anime_Name;
    Anime_Desicription;
    Anime_Category;

constructor(Anime_ID, Anime_Name, Anime_Desicription, Anime_Category){
        this.Anime_ID = Anime_ID;
        this.Anime_Name = Anime_Name;
        this.Anime_Desicription = Anime_Desicription;
        this.Anime_Category = Anime_Category;
        }

updateContentItem(Anime_ID, Anime_Name, Anime_Desicription, Anime_Category){
        if(this.Anime_ID == Anime_ID && Anime_Name && Anime_Desicription && Anime_Category){
            this.Anime_ID = Anime_ID;
            this.Anime_Name = Anime_Name;
            this.Anime_Desicription = Anime_Desicription;
            this.Anime_Category = Anime_Category;
            }

        }
        toString(){
        return $('#content-item-list').append(`<div class="content-item-wrapper">
        <div Anime_ID="content-item-${this.Anime_ID}">
        <h4 class="Anime_Name">${this.Anime_Name}</h4>
        <p class="Anime_Desicription">${this.Anime_Desicription}</p>
        <div class="Anime_Category">${this.Anime_Category}</div>
        </div>
         </div>`);
        }
    }
    
    let content = [
    {
        "Anime_ID": 0,
        "Anime_Name": "Dargon Ball Super",
        "Anime_Desicription": "Dragon Ball Super is a Japanese manga series written by Akira Toriyama and illustrated by Toyotarou. A sequel to Toriyama's original Dragon Ball manga",
        "Anime_Category": "Sci-fi"
    },
    {
        "Anime_ID": 1,
        "Anime_Name": "Haikyu!!",
        "Anime_Desicription": "Haikyu!! is a Japanese manga series written and illustrated by Haruichi Furudate. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2012 to July 2020, with its chapters collected in 45 tankōbon volumes.",
        "Anime_Category": "Sports"
    },
    {
        "Anime_ID": 2,
        "Anime_Name": "One Piece",
        "Anime_Desicription": "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 103 tankōbon volumes as of August 2022.",
        "Anime_Category": "Fantasy, Action manga, Comedy"
    },
     {
        "Anime_ID": 3,
        "Anime_Name": "Naruto",
        "Anime_Desicription": "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
        "Anime_Category": "Nika Power HolderFantasy, Action manga"
    },
    {
        "Anime_ID": 4,
        "Anime_Name": "Demon Slayer",
        "Anime_Desicription": "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister, Nezuko, turned into a demon.",
        "Anime_Category": "Adventure fiction, Dark fantasy, Martial Arts"
    }
    ];
    $.each(content, function(key, val){
      $('#content-item-list').append(`<div class="content-item-wrapper" style="border:1px solid black; margin:0px 0px 15px 0px;padding: 15px 0px 18px 17px; ">
     <div Anime_ID="content-item-${this.Anime_ID}">
     <h4 class="Anime_Name">${this.Anime_Name}</h4>
     <p class="Anime_Desicription">${this.Anime_Desicription}</p>
     <div class="Anime_Category">${this.Anime_Category}</div>
    </div>
    </div>`);
    });
   $('h2').empty().text("My Fav Anime");

});


