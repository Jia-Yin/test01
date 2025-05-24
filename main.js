var rfid;


boardReady({board: 'Smart', device: 'w5rJe', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rfid = getRFID(board);
  document.getElementById('demo-area-01-show').innerHTML = 'Start';
  rfid.read();
  rfid.on("enter",function(_uid){
    rfid._uid = _uid;
    document.getElementById('demo-area-01-show').innerHTML = rfid._uid;
  });
});
