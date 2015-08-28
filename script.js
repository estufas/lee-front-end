$(document).ready(function(){
var UserComment = function(comment) {
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
   var userComment = $("#comment").val();
   if (!(userComment)) {

     console.log("its empty")
     return;
   };
   console.log(userComment);
   submission.push(new UserComment(userComment));
   console.dir(submission);
   renderCommets(submission.length - 1);
 });

var renderCommets = function(x) {
  // for (var i = 0; i < submission.length; i++) {
    console.log(submission[x].comments);
    var string = '<p>' + submission[x].comments + '</p>';
  $("#submissions").append(string);
// }
};

});
