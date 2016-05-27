
//动态加载头部
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
;$(function(){
	$("#side-nav .totop").click(function(){
		$("html,body").scrollTop(0);
	})

});
