export default class HomeCtrl {

    constructor(GamesService, $timeout , $window) {
        this.GamesService=GamesService;
        this.$timeout=$timeout;
        this.$window=$window;

        this.topGames='';
        this.giftGames='';
        this.favoriteGames='';
        this.trendingGames='';
        this.newGames='';

        this.getGiftGames();
        this.getFavorites();
        this.getNewGames();
        this.getTrending();
        this.getTopGames();
    }

     getTopGames(){
       showLoader('#homeCarousel .item');
       this.GamesService.getTopGames()
           .then((data)=>{
             this.topGames=data.data;
             hideLoader('#homeCarousel ')
           });
     }
     getGiftGames(){
       showLoader('#getGift .games_row');
       this.GamesService.getGiftGames()
           .then((data)=>{
             this.giftGames=data.data;
             hideLoader('#getGift');
           })
     }
     getFavorites(){
       showLoader('#favorites .games_row');
       this.GamesService.getFavoriteGames()
           .then((data)=> {
             this.favoriteGames=data.data;
             this.removeSpacings();
             hideLoader('#favorites')
           });
     }
     getTrending(){
       showLoader('#trending .games_row');
       this.GamesService.getTrendingGames()
           .then((data)=> {
             this.trendingGames = data.data;
             hideLoader('#trending')
           });
     }
     getNewGames(){
       showLoader('#whatNew .games_row');
       this.GamesService.getNewGames()
           .then((data)=>{
             this.newGames=data.data;
             hideLoader('#whatNew')
           });
     }
     removeSpacings(){
        this.$timeout(function(){
            let gameTypes = $('.transformOne');
            $.each(gameTypes, function(key, value){
              value.innerHTML=value.innerHTML.replace(/ +/g, "")
            })
          }, 200)
     }
}

HomeCtrl.$inject = ['GamesService', '$timeout', '$window'];