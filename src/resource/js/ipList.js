import '../css/ipList.scss';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const bootstrapPaginator = require("./common/bootstrap-paginator.js")

function bindEvents(){
	var $doc = $(document);
	// $doc.on("click", "#sideNav > li", function(e){
	//     var $this = $(this);
	//     $this.addClass("active").siblings().removeClass("active");
	// })
	//全选反选
	$doc.on("click", ".batch", function(){
		if($(this).hasClass("cut")){
			$("input[name='checkbox']").removeAttr("checked");
			$(this).removeClass("cut")
		}else{
			$("input[name='checkbox']").attr("checked","true");
			$(this).addClass("cut")
		}
	})
	$('#pageLimit').bootstrapPaginator({    
		currentPage: 1,//当前页码
		totalPages: 10,//总页码
		size:"normal",
		bootstrapMajorVersion: 3,//bootstrap版本
		alignment:"right",
		numberOfPages:5,//一页显示几个按钮
		itemTexts: function(type, page, current){
			switch (type){ 
				case "first": return "首页";
				case "prev": return "上一页";
				case "next": return "下一页";
				case "last": return "末页";
				case "page": return page;
			}
		},
		onPageClicked: function(event, originalEvent, type, page){
			console.log(page)
			// $.ajax({
			// 	url: '',
			// 	type: 'post',
			// 	data: {page: page},
			// 	dataType: 'json',
			// 	success: function (data) {
			// 		tplData(data);//处理成功返回的数据
			// 	}
			// });
		}
	});
}






























function init(){
	bindEvents();
}
init();