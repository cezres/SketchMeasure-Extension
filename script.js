// 1.0.1

function fontFamily(font) {
    var fontFamilyElement = document.getElementById("font-family")
    if (fontFamilyElement != null) {
        var fontFamily = fontFamilyElement.value.split("-")[1]
        fontFamilyElement.value = font + "-" + fontFamily
        return fontFamilyElement.value
    }
	else {
        return font
    }
}


// 
document.addEventListener("click", function() {

    var obj = document.getElementById("inspector")
        if (obj != null) {
            var inps = document.getElementsByTagName('input')

            var font = ""
            var color = ""

            for(var i = 0,inp; inp = inps[i++];) {
                // 字体
                if (inp.value == "17px") {
                    inp.value = fontFamily("T1")
                    font = inp.value
                }
                else if (inp.value == "16px") {
                    inp.value = fontFamily("T2")
                    font = inp.value
                }
                else if (inp.value == "14px") {
                    inp.value = fontFamily("T3")
                    font = inp.value
                }
                else if (inp.value == "12px") {
                    inp.value = fontFamily("T4")
                    font = inp.value
                }
                else if (inp.value == "11px") {
                    inp.value = fontFamily("T5")
                    font = inp.value
                }
                // 主色
                else if (inp.value == "#FF4338 100%") {
                    inp.value = "Main"
                    color = inp.value
                }
                // 辅色
                else if (inp.value == "#333333 100%") {
                    inp.value = "Auxiliary_A"
                    color = inp.value
                }
                else if (inp.value == "#666666 100%") {
                    inp.value = "Auxiliary_B"
                    color = inp.value
                }
                else if (inp.value == "#B0B0B0 100%") {
                    inp.value = "Auxiliary_C"
                    color = inp.value
                }
                else if (inp.value == "#E0E0E0 100%") {
                    inp.value = "Auxiliary_D"
                    color = inp.value
                }
                else if (inp.value == "#EEEEEE 100%") {
                    inp.value = "Auxiliary_E"
                    color = inp.value
                }
                else if (inp.value == "#F6F6F6 100%") {
                    inp.value = "Auxiliary_F"
                    color = inp.value
                }
                else if (inp.value == "#FFFFFF 100%") {
                    inp.value = "Auxiliary_G"
                    color = inp.value
                }
                // 强调色
                else if (inp.value == "#36D4B0 100%") {
                    inp.value = "Accent_A"
                    color = inp.value
                }
                else if (inp.value == "#43DDF5 100%") {
                    inp.value = "Accent_B"
                    color = inp.value
                }
                else if (inp.value == "#FB91C9 100%") {
                    inp.value = "Accent_C"
                    color = inp.value
                }
                else if (inp.value == "#FFB67C 100%") {
                    inp.value = "Accent_D"
                    color = inp.value
                }
                else if (inp.value == "#BA94FF 100%") {
                    inp.value = "Accent_E"
                    color = inp.value
                }


				
            }


			// textarea
            // code

			inps = document.getElementsByTagName('textarea')
            // font 
			for (var i = 0,inp; inp = inps[i++];) {
				if (inp.value.indexOf("UI") != -1) {
					if (font != "") {
                    	var index = inp.value.indexOf("font = ")
                    	if (index > 0) {
                        	var endIndex = inp.value.indexOf("];", index + 7)
                        	var str = inp.value.slice(index + 7, endIndex + 1)
                        	inp.value = inp.value.replace(str, font)
                    	}
                	}
                	// color
                	if (color != "") {
                    	var index = inp.value.indexOf("Color = ")
                    	if (index > 0) {
                        	var endIndex = inp.value.indexOf("];", index + 8)
                        	var str = inp.value.slice(index + 8, endIndex + 1)
                        	var newValue = inp.value.replace(str, color)
							inp.value = newValue
                    	}
                	}
				}
			}


        }

});
