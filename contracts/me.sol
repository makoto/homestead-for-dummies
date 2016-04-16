contract Me {
  string public  first;
  string public  last;
  string public  twitter;
  string public  nick;
  address public myAddress;
  uint public    dateJoined;

  function Me(){
    first = 'Ken';
    last = 'Kappler';
    twitter = '@kapplerken';
    nick ='BlueChain';
    myAddress = msg.sender;
    dateJoined = block.timestamp;
  }
}
