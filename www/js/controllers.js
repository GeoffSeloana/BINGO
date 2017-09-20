angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state) {

//Avis
  document.getElementById("avis").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/avis.jpg";
      document.getElementById("partnerDetails").innerHTML =" Get up to <b>15% </b> <br/>Cash Rewards on all car rentals booked through the exclusive link. <br/> <a href=http:\///www.avispartners.co.za/ABSA-Rewards/>Avis Car Rental</a>";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

     document.getElementById("Tiger-Wheel-and-Tyre").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Tiger-Wheel-and-Tyre.jpg";
      document.getElementById("partnerDetails").innerHTML ="1.5% on all purchases under R500.<br/> 2.5% on all purchases between R501 and R1500. <br/> 3.5% on all purchases greater than R1501.<br/> Maximum of R150 Cash Rewards allocated per transaction.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

     document.getElementById("Media24").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Media24.jpg";
      document.getElementById("partnerDetails").innerHTML ="Get 20% Discount when purchasing selected titles: Huisgenoot, You, Drum, Landbouweekblad ,etc";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

     document.getElementById("Bidvest_CarRental").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Bidvest_CarRental.jpg";
      document.getElementById("partnerDetails").innerHTML ="Bookings must be paid for with an Absa card to qualify for the 8% Cash Rewards."

    }   

     document.getElementById("goldwagen").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/goldwagen-logo.jpg";
      document.getElementById("partnerDetails").innerHTML ="Absa Rewards customers will earn as much as 5% cash back at Goldwagen outlets countrywide.<br/> Transactions greater than R250 less than R1 000 earn 2.5%.<br/> Transactions greater than R1 001 but less than R2 000, earn 3.5%.<br/> Transactions greater than R2 001, earn 5% (capped at R3 000). <br/> Maximum of R150 Cash Rewards per accrual period.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }  

      document.getElementById("Showmax").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Showmax.jpg";
      document.getElementById("partnerDetails").innerHTML ="Earn 5% Cash Rewards every month on ShowMax subscriptions.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("Dis-Chem").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Dis-Chem.jpg";
      document.getElementById("partnerDetails").innerHTML ="Absa Rewards members who are also members of the Dis-Chem Benefit Programme will earn 0.5% <br/> Dis-Chem Benefit Points when paying for their purchase using an Absa Debit, Cheque or Credit card.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("NuMetro").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/NuMetro.jpg";
      document.getElementById("partnerDetails").innerHTML ="Receive a 50% discount on movie tickets at Nu Metro cinemas nationwide.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("Matrix").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Matrix.jpg";
      document.getElementById("partnerDetails").innerHTML =" Get 37% Discount off MX3 subscription";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("Anat").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Anat.jpg";
      document.getElementById("partnerDetails").innerHTML ="Get 5% Cash Rewards on purchases.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("Cashbuild").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Cashbuild.jpg";
      document.getElementById("partnerDetails").innerHTML ="Get 2.5% Cash Rewards on purchases.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("Thekidzone").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/Thekidzone.jpg";
      document.getElementById("partnerDetails").innerHTML ="Get 10% Cash Back on ALL online purchases made at The Kid Zone";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("the_baby_zone").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/the_baby_zone.jpg";
      document.getElementById("partnerDetails").innerHTML ="Get 10% Cash Rewards on all online purchases made with your Absa Card.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("NetFlorist").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/NetFlorist.jpg";
      document.getElementById("partnerDetails").innerHTML ="Get 5% Cash Rewards on purchases from NetFlorist, NetGifts, NetPerfume and NetJewel.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("CaCell").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/CaCell.jpg";
      document.getElementById("partnerDetails").innerHTML ="Get 3% Cash Rewards on all online transactions.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }   

      document.getElementById("RunWalkForLife").onclick = function patrner()
    {
     console.log("Clicked");
      document.getElementById("partnerLogo").src ="img/RunWalkForLife.jpg";
      document.getElementById("partnerDetails").innerHTML ="10% Discount on all new and renewed membership fees.";
     //$state.go('map');
     //validation code to see State field is mandatory.  
    }    

    //

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
