const x = "hello"
console.log(x.substring(1)) //ello
console.log(x.charAt(0)) //h

function reverseString(text: string) {
    let reverseText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }
    return reverseText
}
console.log(reverseString(x))//olleh

function recursiveReverseString(text:string):string{
    if (text.length <= 0){
        return ""
    }
    return text.charAt(text.length - 1) + recursiveReverseString(text.slice(0,text.length-1))
}
console.log(recursiveReverseString('hello'))//olleh
console.log(recursiveReverseString('prayuth'))//htuyarp
