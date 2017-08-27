let obj = {
	value : "JavaScript",
	printValue : function() {
		console.log("Message:", this.value); // this จะชี้ไปยังออบเจ็กต์ obj
	},
	handle : function() {
		console.log("Press a button");
	},
	init : function() {
		let element = document.querySelector("#b1"); // ปุ่ม "Try it"
		element.addEventListener("click", function(event) {
			this.handle(); // this จะชี้ไปยังออบเจ็กต์ element
		}, false);
	}
} // สิ้นสุดออบเจ็กต์ obj
obj.printValue(); // บรรทัด b -- แสดงคำว่า "Message: JavaScript"
					// ออกมาทางหน้าคอนโซล
obj.init();