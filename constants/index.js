// we will be using this dummy data,
// don't worry, you can find this data in the git repo 
// you can find the git repo link in the description ;)
import theme, { COLORS, SIZES, FONTS } from './theme'

import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Signup from "../screens/Signup";

export {
    Login,
    Welcome,
    Signup
}


export { theme, COLORS, SIZES, FONTS }


export const art = [
  {
    id: 1,
    name: 'Boy on Motorbike',
    nameA: 'Ernest Zacharevic',
    location: require('../assets/art/1l.png'),
    type: 'mural',
    address: '12, Lbh Ah Quee, George Town, 10300 George Town, Pulau Pinang',
    stars: '4.6',
    image: require('../assets/art/1.jpg'),
    desc: 'Boy on a Bike is a mural on the wall along Ah Quee Street, in George Town, Penang. The painting is the work of Lithuanian-born artist Ernest Zacharevic, who was commission by the Penang Island Municipal Council (MPPP) in conjunction with the 2012 George Town Festival.'+
    '"Boy on a Bike" is painted on the sidedoor of a shophouse. It shows a boy hanging out on his motorcycle as he watches the pedestrian traffic passing by along the street. The mural is immediately to the right of another Zacharevic piece, "Little Boy with Pet Dinosaur".'
  },
  
  {
    id: 2,
    name: 'Brother & Sister on a Swing',
    nameA: 'Louis Gan',
    location: require('../assets/art/2l.png'),
    type: 'mural',
    address: '63, Gat Lebuh Chulia, George Town, 10200 George Town, Pulau Pinang',
    stars: '4.5',
    image: require('../assets/art/2.jpg'),
    desc: 'Brother and Sister on a Swing" is a mural by young local deaf-mute artist Louis Gan. Brother and Sister on a Swing depicts two young children, a boy and a girl, standing on a swing. It celebrates the intimacy of sibling relationships, just as Louis has with his brother. The subjects are the children of the proprietor of the printing firm, SBS Paper Products'+
    ' Having learned about Louis from news articles of him appearing in The Star and Kwong Wah, he invited Louis to paint the mural depicting the children. The printing firm had already installed a swing set and even created a street sign called "Step by Step Lane" on the otherwise nameless back alley.'
  },
  
  {
    id: 5,
    name: 'Budget Hotels',
    nameA: 'Reggie Lee',
    location: require('../assets/art/5l.png'),
    type: 'Steel Rod Sculpture',
    address: '320, Chulia St, Georgetown, 10200 George Town, Penang',
    stars: '4.7',
    image: require('../assets/art/5.jpg'),
    desc: 'The "Budget Hotels" Sculpture is a steel-rod sculpture on a wall along Love Lane, at the junction with Chulia Street, in the inner city of George Town, Penang. It celebrates the many budget hotels that line both Love Lane and Chulia Street.'+
    'The "Budget Hotels" Sculpture is based on a caricature by cartoonist Reggie Lee. It is part of the last batch of steel-rod sculptures installed by the Penang Island Municipal Council (MPPP) under the Marking George Town project.'  },
  
  ]

  export const mural = [
    {
      id: 1,
      name: 'Boy on Motorbike',
      nameA: 'Ernest Zacharevic',
      location: require('../assets/art/1l.png'),
      type: 'mural',
      address: '12, Lbh Ah Quee, George Town, 10300 George Town, Pulau Pinang',
      stars: '4.6',
      image: require('../assets/art/1.jpg'),
      desc: 'Boy on a Bike is a mural on the wall along Ah Quee Street, in George Town, Penang. The painting is the work of Lithuanian-born artist Ernest Zacharevic, who was commission by the Penang Island Municipal Council (MPPP) in conjunction with the 2012 George Town Festival.'+
      '"Boy on a Bike" is painted on the sidedoor of a shophouse. It shows a boy hanging out on his motorcycle as he watches the pedestrian traffic passing by along the street. The mural is immediately to the right of another Zacharevic piece, "Little Boy with Pet Dinosaur".'
    },
    
    {
      id: 2,
      name: 'Brother & Sister on a Swing',
      nameA: 'Louis Gan',
      location: require('../assets/art/2l.png'),
      type: 'mural',
      address: '63, Gat Lebuh Chulia, George Town, 10200 George Town, Pulau Pinang',
      stars: '4.5',
      image: require('../assets/art/2.jpg'),
      desc: 'Brother and Sister on a Swing" is a mural by young local deaf-mute artist Louis Gan. Brother and Sister on a Swing depicts two young children, a boy and a girl, standing on a swing. It celebrates the intimacy of sibling relationships, just as Louis has with his brother. The subjects are the children of the proprietor of the printing firm, SBS Paper Products'+
      ' Having learned about Louis from news articles of him appearing in The Star and Kwong Wah, he invited Louis to paint the mural depicting the children. The printing firm had already installed a swing set and even created a street sign called "Step by Step Lane" on the otherwise nameless back alley.'
    },
    
    {
      id: 3,
      name: 'Boy on Chair',
      nameA: 'Ernest Zacharevic',
      location: require('../assets/art/3l.png'),
      type: 'mural',
      address: '14, Cannon St, Georgetown, 10300 George Town, Penang',
      stars: '4.0',
      image: require('../assets/art/3.jpg'),
      desc: 'Boy on chair depicts a little boy reaching for a hole in the wall. He appears to be standing on a chair and inching himself as high as he could reach. The painting was created by Ernest Zacharevic in conjunction with the 2012 George Town Festival. Since its completion, it has grown increasing number of visitors coming to take photos with it.'  },
  ]
      export const steel = [    
    {
      id: 4,
      name: 'Jimmy Choo',
      nameA: 'Baba Chuah',
      location: require('../assets/art/4l.png'),
      type: 'Steel Rod Sculpture',
      address: 'No. 52, Lebuh Leith, George Town, 10200 George Town, Pulau Pinang',
      stars: '3.5',
      image: require('../assets/art/4.jpg'),
      desc: 'Jimmy Choo (GPS: 5.42065, 100.33416) is a steel-rod sculpture celebrating perhaps the most famous living Penangite, the eponymous shoe designer. Although intended for Muntri Street, it is in fact on a wall facing Leith Street, a short distance from the junction with Muntri Street. The steel-rod sculpture is based on the caricature of local cartoonist Baba Chuah, and is one of those put up by Sculpture at Work.'+
    'The reason for placing the sculpture here has to do with the Hong Kong Shoe Store at 177 Munstri Street. This is the workshop in which Jimmy Choo began his apprenticeship in shoe making. But more than that, for a short spell Choo is said to have also operated a roadside cobbler on the five-foot way along Leith Street, in front of the premises that is today GalaHouse.' },
    
    {
      id: 5,
      name: 'Budget Hotels',
      nameA: 'Reggie Lee',
      location: require('../assets/art/5l.png'),
      type: 'Steel Rod Sculpture',
      address: '320, Chulia St, Georgetown, 10200 George Town, Penang',
      stars: '4.7',
      image: require('../assets/art/5.jpg'),
      desc: 'The "Budget Hotels" Sculpture is a steel-rod sculpture on a wall along Love Lane, at the junction with Chulia Street, in the inner city of George Town, Penang. It celebrates the many budget hotels that line both Love Lane and Chulia Street.'+
      'The "Budget Hotels" Sculpture is based on a caricature by cartoonist Reggie Lee. It is part of the last batch of steel-rod sculptures installed by the Penang Island Municipal Council (MPPP) under the Marking George Town project.'  },
    
    {
      id: 6,
      name: 'Mr Five Foot Way',
      nameA: 'Tang Mun Kian',
      location: require('../assets/art/6l.png'),
      type: 'Steel Rod Sculpture',
      address: '105, Jalan Hutton, George Town, 10050 George Town, Pulau Pinang',
      stars: '4.7',
      image: require('../assets/art/6.jpg'),
      desc: 'Mr Five Foot Way is one of the few steel-rod sculptures located outside the core zone of the George Town World Heritage Site. It is installed at the junction of Transfer Road with Hutton Lane. Based on a caricature by Tang Mun Kian, it is one of two sculptures for Marking George Town that is based on the five foot way, the other being "Narrowest Five Foot Way".'+
      ' The "Mr Five Foot Way" Sculpture celebrates the many itinerant traders and vendors who set up small businesses on the five foot way, or Goh3 Ka3 Ki3 in Hokkien. Many of these arrived penniless from South China, particularly in the 1880s. The few lucky ones rose from rags to riches, perhaps the most famous of which include Yeap Chor Ee and later on Loh Boon Siew.'  },
    ]
    
      export const gallery = [  
    {
        id: 7,
        name: 'Unique Penang Art Gallery',
        nameA: '',
      location: require('../assets/art/7l.png'),
      type: 'gallery/museum',
      address: '62, Love Ln, Georgetown, 10200 George Town, Penang',
        stars: '3.5',
        image: require('../assets/art/7.jpg'),
        desc: 'A cute artsy gallery of which selling variety of art piece, handmade craft, some clothes and also postcards. '  },
      
      {
        id: 8,
        name: 'Hin Bus Depot',
        nameA: '',
      location: require('../assets/art/8l.png'),
      type: 'gallery/museum',
      address: '31a Jalan Gurdwara, George Town, Penang Island 10300 Malaysia',
        stars: '4.7',
        image: require('../assets/art/8.jpg'),
        desc: 'Hin Bus Depot is an art and events space located in George Town, Penang. Established in 2014, the space is run by a small creative collective that curates the contents of the space, which includes exhibitions & street art by local and international artists, parties, music gigs, theatre plays, festivals, fashion events, brand launch and a whole lot more.'+
        ' The space started off with only an exhibition space and an outdoor stage, and now expanded with 6 food and beverage outlets, another gallery, 4 artist studios and a few others that will be joining the ‘Hin family’ soon. Hin Bus Depot supports and showcases progressive and upcoming artists, artworks, events and art forms.'  },
      
    {
        id: 9,
        name: 'ARTOPIA',
        nameA: '',
      location: require('../assets/art/9l.png'),
        type: 'gallery/museum',
        address: 'Kampung Pokok Manggis, 11000 Balik Pulau, Penang',
        stars: '4.7',
        image: require('../assets/art/9.jpeg'),
        desc: 'Away from the street art pieces in George Town and Butterworth, Balik Pulau International Art Village is where it’s at for a bit of artistic vibe in a village. You dont have to be an art lover to appreciate this place, the rustic surrounding is good enough for those seeking a dose of creativity!'  },
    ]

    export const favorite = [
      {
        id: 1,
        name: 'Boy on Motorbike',
        nameA: 'Ernest Zacharevic',
        location: require('../assets/art/1l.png'),
        type: 'mural',
        address: '12, Lbh Ah Quee, George Town, 10300 George Town, Pulau Pinang',
        stars: '4.6',
        image: require('../assets/art/1.jpg'),
        desc: 'Boy on a Bike is a mural on the wall along Ah Quee Street, in George Town, Penang. The painting is the work of Lithuanian-born artist Ernest Zacharevic, who was commission by the Penang Island Municipal Council (MPPP) in conjunction with the 2012 George Town Festival.'+
        '"Boy on a Bike" is painted on the sidedoor of a shophouse. It shows a boy hanging out on his motorcycle as he watches the pedestrian traffic passing by along the street. The mural is immediately to the right of another Zacharevic piece, "Little Boy with Pet Dinosaur".'
      },
      
      {
        id: 2,
        name: 'Brother & Sister on a Swing',
        nameA: 'Louis Gan',
        location: require('../assets/art/2l.png'),
        type: 'mural',
        address: '63, Gat Lebuh Chulia, George Town, 10200 George Town, Pulau Pinang',
        stars: '4.5',
        image: require('../assets/art/2.jpg'),
        desc: 'Brother and Sister on a Swing" is a mural by young local deaf-mute artist Louis Gan. Brother and Sister on a Swing depicts two young children, a boy and a girl, standing on a swing. It celebrates the intimacy of sibling relationships, just as Louis has with his brother. The subjects are the children of the proprietor of the printing firm, SBS Paper Products'+
        ' Having learned about Louis from news articles of him appearing in The Star and Kwong Wah, he invited Louis to paint the mural depicting the children. The printing firm had already installed a swing set and even created a street sign called "Step by Step Lane" on the otherwise nameless back alley.'
      },
      
      {
        id: 6,
      name: 'Mr Five Foot Way',
      nameA: 'Tang Mun Kian',
      location: require('../assets/art/6l.png'),
      type: 'Steel Rod Sculpture',
      address: '105, Jalan Hutton, George Town, 10050 George Town, Pulau Pinang',
      stars: '4.7',
      image: require('../assets/art/6.jpg'),
      desc: 'Mr Five Foot Way is one of the few steel-rod sculptures located outside the core zone of the George Town World Heritage Site. It is installed at the junction of Transfer Road with Hutton Lane. Based on a caricature by Tang Mun Kian, it is one of two sculptures for Marking George Town that is based on the five foot way, the other being "Narrowest Five Foot Way".'+
      ' The "Mr Five Foot Way" Sculpture celebrates the many itinerant traders and vendors who set up small businesses on the five foot way, or Goh3 Ka3 Ki3 in Hokkien. Many of these arrived penniless from South China, particularly in the 1880s. The few lucky ones rose from rags to riches, perhaps the most famous of which include Yeap Chor Ee and later on Loh Boon Siew.'  },
    
      {
        id: 7,
        name: 'Unique Penang Art Gallery',
        nameA: '',
      location: require('../assets/art/7l.png'),
      type: 'gallery/museum',
      address: '62, Love Ln, Georgetown, 10200 George Town, Penang',
        stars: '3.5',
        image: require('../assets/art/7.jpg'),
        desc: 'A cute artsy gallery of which selling variety of art piece, handmade craft, some clothes and also postcards. '  },
      
      ]