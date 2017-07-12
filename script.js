function fontFamily(font) {
    var fontFamilyElement = document.getElementById("font-family")
    if (fontFamilyElement != null) {
        var fontFamily = fontFamilyElement.value.split("-")[1]
        return font + "-" + fontFamily
    }
	else {
        return font
    }
}


document.addEventListener("click", function() {

    var obj = document.getElementById("inspector")
        if (obj != null) {
            var inps = document.getElementsByTagName('input')

            for(var i = 0,inp; inp = inps[i++];) {
                // 字体
                if (inp.value == "17px") {
                    inp.value = fontFamily("T1")
                }
                else if (inp.value == "16px") {
                    inp.value = fontFamily("T2")
                }
                else if (inp.value == "14px") {
                    inp.value = fontFamily("T3")
                }
                else if (inp.value == "12px") {
                    inp.value = fontFamily("T4")
                }
                else if (inp.value == "11px") {
                    inp.value = fontFamily("T5")
                }
                // 主色
                else if (inp.value == "#FF4338 100%") {
                    inp.value = "Main"
                }
                // 辅色
                else if (inp.value == "#333333 100%") {
                    inp.value = "Auxiliary_A"
                }
                else if (inp.value == "#666666 100%") {
                    inp.value = "Auxiliary_B"
                }
                else if (inp.value == "#B0B0B0 100%") {
                    inp.value = "Auxiliary_C"
                }
                else if (inp.value == "#E0E0E0 100%") {
                    inp.value = "Auxiliary_D"
                }
                else if (inp.value == "#EEEEEE 100%") {
                    inp.value = "Auxiliary_E"
                }
                else if (inp.value == "#F6F6F6 100%") {
                    inp.value = "Auxiliary_F"
                }
                else if (inp.value == "#FFFFFF 100%") {
                    inp.value = "Auxiliary_G"
                }
                // 强调色
                else if (inp.value == "#36D4B0 100%") {
                    inp.value = "Accent_A"
                }
                else if (inp.value == "#43DDF5 100%") {
                    inp.value = "Accent_B"
                }
                else if (inp.value == "#FB91C9 100%") {
                    inp.value = "Accent_C"
                }
                else if (inp.value == "#FFB67C 100%") {
                    inp.value = "Accent_D"
                }
                else if (inp.value == "#BA94FF 100%") {
                    inp.value = "Accent_E"
                }
            }
        }

});




