function emailChart() {
  var ctx = $( "#email-chart").get( 0 ).getContext( "2d" );

  return new Chart( ctx ).Bar( {
    labels : [ "Eblast cost (in $)" ],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        data : [14000]
      },
      {
        fillColor : "rgba(64,153,255,0.5)",
        strokeColor : "rgba(64,153,255,1)",
        data : [1500]
      }
    ]
  }, {
    scaleOverride : false,
    scaleSteps : 7,
    scaleStepWidth : 2000,
    scaleStartValue : 0,
    animationSteps : 120
  } );
}
