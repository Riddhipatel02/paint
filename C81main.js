canvas=document.getElementById("my_canvas");
CCtxt=canvas.getContext("2d");

CCtxt.beginPath();
CCtxt.strokeStyle="grey";
CCtxt.lineWidth=1;
CCtxt.rect(150,143,430,200);
CCtxt.stroke();

CCtxt.beginPath();
CCtxt.strokeStyle="blue";
CCtxt.lineWidth=4;
CCtxt.arc(250,210,40,0,2*Math.PI);
CCtxt.stroke();

CCtxt.beginPath();
CCtxt.strokeStyle="black";
CCtxt.lineWidth=4;
CCtxt.arc(350,210,40,0,2*Math.PI);
CCtxt.stroke();

CCtxt.beginPath();
CCtxt.strokeStyle="red";
CCtxt.lineWidth=4;
CCtxt.arc(450,210,40,0,2*Math.PI);
CCtxt.stroke();

CCtxt.beginPath();
CCtxt.strokeStyle="orange";
CCtxt.lineWidth=4;
CCtxt.arc(300,250,40,0,2*Math.PI);
CCtxt.stroke();

CCtxt.beginPath();
CCtxt.strokeStyle="green";
CCtxt.lineWidth=4;
CCtxt.arc(400,250,40,0,2*Math.PI);
CCtxt.stroke();