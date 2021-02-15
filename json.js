$(document).ready(function() { //When the page loaded like everything on the page
    var theBooks=[
    {
        "bookName":"Les Misarables",
        "writer":"Victor Hugo",
        "price": 5, 
        "publish":10
    },
    {
        "bookName":"The Alchemist",
        "writer": "Paulo Coelho",
        "price" : 4,
        "publish":12
    },
    {
        "bookName":"Romeo and Juliet",
        "writer" : "William Shakespeare",
        "price" : 6,
        "publish":9
    }
];
var jsonBooksData=JSON.stringify(theBooks);
var booksData=JSON.parse(jsonBooksData);
//alert(booksData[1].bookName);
//alert(booksData[1].writer);
for (var i=0; i<booksData.length; i++){
    var tableRow="<tr>";
    tableRow +="<td>"+booksData[i].bookName+"</td>";
    tableRow +="<td>"+booksData[i].writer+"</td>";
    tableRow +="<td>"+booksData[i].price+"</td>";
    tableRow +="<td>"+booksData[i].publish+"</td>";
    tableRow+="</tr>";

    $("#bookList").append(tableRow);
}            

})
    