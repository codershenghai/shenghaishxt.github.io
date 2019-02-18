const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "稻香",
        artist: '周杰伦',
        url: 'http://dl.stream.qqmusic.qq.com/M500003aAYrm3GE0Ac.mp3?vkey=DB7A605D1222B6AF3BFB2140533AFB01A55FC1683DC31F3A42398C6E916A90945CA3902ED07FF2ABCD0FA0DDFAD308C4BD94BB6116262D14&guid=5150825362&fromtag=1',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://dl.stream.qqmusic.qq.com/M500002hXDfk0LX9KO.mp3?vkey=E331D94CF6A9E191A4A789B1819835F7D4EB454C3827335F066918EB6CE1947AB1AA95FC03C7DD8E95EA551EA8A7300DB5FB7F6CE76B3751&guid=5150825362&fromtag=1',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      }
    ]
});