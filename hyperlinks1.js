var URL=require("url");
var HTTP = require('http');
var process = function(request,response){

        var lookingfor = URL.parse(request.url,true).pathname;

        if(lookingfor=="/"){
            test1(response);
            response.write("<H1>Home</H1>");
            response.write("<p style='text-align:left'>");
            test(response);
            response.write("<HTML>");
            response.end();
        }
        if(lookingfor=="/qaconsulting"){
            test1(response);
            response.write("<H1>QA Consulting</H1>");
            response.write("<p style='text-align:left'>");
            test(response);
            response.write("<HTML>");
            response.end();
        }
        if(lookingfor=="/aboutme"){
            test1(response);
            response.write("<B>Welcome to</B><BR>");
            response.write("<H1>About ME</H1>");
            response.write("<p style='text-align:left'>");
            test(response);
            response.write("<HTML>");
            response.end();
        }
        if(lookingfor=="/nationwide"){
            test1(response);
            response.write("<B>Welcome to</B><BR>");
            response.write("<H1>Nationwide</H1>");
            test(response);
            response.write("<HTML>");
            response.end();
        }

}

function test1(response){
    response.writeHead(200,{'content-type':'text/HTML'});
    response.write("<HTML>");
    response.write("<center>");
    response.write("<B>Welcome to</B><BR>");

}
function test(response){
    response.write("<p style='text-align:left'>");
    response.write("<A href='http://localhost:2052/'>Home</A>");
    response.write("<br>");
    response.write("<A href='http://localhost:2052/qaconsulting'>QA Consulting</A>");
    response.write("<br>");
    response.write("<A href='http://localhost:2052/aboutme'>About Me</A>");
    response.write("<br>");
    response.write("<A href='http://localhost:2052/nationwide'>Nationwide</A>");
}

var server = HTTP.createServer(process);
server.listen(2052);