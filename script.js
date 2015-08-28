$(document).ready(function(){
var UserComment = function(user, comment) {
  this.user = user;
  this.comments = [];

  if(comment) {
    this.addComments(comment);
  }
};

UserComment.prototype.addComments = function(comment) {
  this.comments.push(comment);
}

var submission = [];

$("#usrform").on('submit', function(e){
   e.preventDefault();
   var userName = $("#usrname").val();
   var userComment = $("#comment").val();
   if (!(userName && userComment)) {

     console.log("its empty")
     return;
   };
   console.log(userComment,userName);
   submission.push(new UserComment(userName, userComment));
   console.dir(submission);
   renderCommets(submission.length - 1);
 });

var renderCommets = function(x) {
  // for (var i = 0; i < submission.length; i++) {
    console.log(submission[x].user);
    var string = '<p>' + submission[x].user + '</p>';
    var string2 = '<p>' + submission[x].comments + '</p>';
  $("#submissions").append(string, string2);
// }
};

});
