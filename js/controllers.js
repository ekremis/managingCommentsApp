/* app controllers */
var commentControllers = angular.module('commentControllers', []);

/* comment controller */ 
commentControllers.controller('commentCtrl', function ($scope) {		
					
					// json object to keep users' comments						 
					$scope.comments = 
					[
					  {
					    "image": "alex.png",
					    "name": "Alex Mortinger",
					    "comment": "Sample text Lorem Ipsum",
					    "publishedOn": "14:40",
					    "timelocked" : true
					  },
					  {
					    "image": "jennifer.png",
					    "name": "Jennifer Soh",
					    "comment": "Sample text Lorem Ipsum",
					    "publishedOn": "14:43",
					    "timelocked" : true
					  }
					];

					 // json object to keep new comment
					 $scope.newComment = {
					    "image": "alex.png",	// leave default jennifer
					    "name": "Alex Mortinger",		// leave default jennifer
					    "comment": "",
					    "publishedOn": "",
					    "timelocked" : false };

					 // add new comment in comments
					 $scope.addComment = function() {

					 	 // calculate that new message was published
						 var d = new Date();
						 var year = d.getFullYear();
						 var month = ("0" + (d.getMonth() + 1)).slice(-2);
						 var day = ("0" + d.getDate()).slice(-2);
						 var hours = ("0" + d.getHours()).slice(-2);
						 var minutes = ("0" + d.getMinutes()).slice(-2);
						 var seconds = ("0" + d.getSeconds()).slice(-2);
						 var milliseconds = d.getMilliseconds();
						 var publishDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

						 // Show only Hours and Minutes
						 $scope.newComment.publishedOn = hours + ':' + minutes;

						 // Temporary object to be saved in comments 
						 var tempNewComment = { 
					    "image": $scope.newComment.image,
					    "name": $scope.newComment.name,
					    "comment": $scope.newComment.comment,
					    "publishedOn": $scope.newComment.publishedOn,
					    "timelocked" : false };

					    // Save to comments
						 $scope.comments.push(tempNewComment);

						 var commentIndex = $scope.comments.length-1;

						 // Reset newComment object
						 $scope.newComment.comment = "";
						 $scope.newComment.publishedOn = "";

						 // Lock comment field after time interval
						 setTimeout(function() { 
						 	var commentIndexTemp = commentIndex;
						 	$scope.comments[commentIndexTemp].timelocked = true;
						 	document.getElementById("comment" + commentIndexTemp).readOnly = true; 
						 }, 5000); // wait for 5 seconds before field gets locked
						 $scope.$apply();
						 }

						// Reset filter form
						$scope.reset = function() { $scope.search=''; };														 													    

						}); 




