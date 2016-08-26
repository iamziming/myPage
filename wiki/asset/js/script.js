$(document).ready(function(){
	$("#search").click(function(){
		var input = $("#input").val();
		var wikiapi = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&callback=?";
		
		$.ajax({
			type: "GET",
			url: wikiapi,
			async: false,
			dataType: "json",
			success: function(data){
				$("#list").html("");
				for(var i = 0; i < data[1].length; i++){
					$("#list").append('<li><div class="collapsible-header"><a href=' + data[3][i]+ ' target="blank"> ' + data[1][i] + '</a></div><div class="collapsible-body"><p>' + data[2][i] + '</p></div></li>');
				}
			},
			error: function(){
				alert("Error");
			},
		  });
	});
});