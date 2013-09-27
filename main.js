$(document).ready(function(){

var data = [];



// This section stores user input.

var getInfo = function(){
	var quoteObject = {};
	quoteObject.author = $("#author-input").val();
	quoteObject.quote = $("#quote-input").val();
	data.push(quoteObject);
	// This clears fields after input.
	$("#author-input").val("");
    $("#quote-input").val("");
};

// Displays the last item in the array.

var displayOutput = function(){
	
	var i = (data.length - 1);
	var deleteOutput = $("<div class='view-quotes'><p>"+(i+1)+ "---"+data[i].author + " <br>" + data[i].quote  + 
		"</p> <button type='button' class='delete-button'>Delete</button></div>");
	//adds to another item to the output string
	
	$(".display-quotes").append(deleteOutput);
	
	//removes an item when delete is clicked
	$(".delete-button").click(function(){
  	$(this).parent().remove();
    
  		
	});


};

var pullAuthor = function(){
	var searchAuthor = $("#search-name").val();
	for (var i=0;i<data.length;i++){
		if (data[i].author === searchAuthor) {
			var pulledAuthor = $("<div class='view-quotes'><p>" + searchAuthor + " says ---"+data[i].quote + " <br>" + 
			"</p></div>");
			$(".queryfield").append(pulledAuthor);
		}
	}
};

// This button adds the data.
$("#add-button").click(function(){
	getInfo();
	displayOutput();
	

});

// This button calls the author list.
$(".author-button").click(function(){
	pullAuthor();
});




// End of the jquery document
});

/*

// Use jQuery to create a new DOM element.
var messageEl = $("<p>You have {0} documents.</p>".supplant([numDocs]));

// Add the DOM element to the page.
$("body").append(messageEl);

*/