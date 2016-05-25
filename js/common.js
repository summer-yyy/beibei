function addHtml(url,targetId){
	$.ajax({
			type:"get",
			url:url,
			async:false,
			success:function(msg){
				$(targetId).html(msg);
			}
		});
}
