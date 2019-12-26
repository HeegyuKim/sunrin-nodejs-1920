express = require("express")
app = express();
app.get("/", function(req, res) {
	res.send("<b>Hello</b>")
})
app.use('/public', express.static(__dirname + "/public"))
app.listen(3000, function(){
	console.log("서버가 시작됬습니다.")
})

// 프로젝트 -> 속성 -> 실행 URL에서 주소 찾기