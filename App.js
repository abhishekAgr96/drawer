/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, DrawerLayoutAndroid, Image, TouchableOpacity, Button, SectionList, FlatList } from 'react-native';



export default class App extends Component {
  constructor(props){
    super(props)
    this.Array_Items=require('./mail.json');
    this.state={
      selectedType:'primary',
      mailArray:[], 
     // cloneArray:[]
    }
    
    
    //  mailArray=(this.Array_Items.type==selectedType)?this.Array_Items.mail:''
  //  mailArray=this.Array_Items.mail;
  }
 
  DrawerLayoutRef;
  sectionData = [
    { title: 'heading 1', data: ['primary', 'social', 'promotional'] },
    { title: 'heading 2', data: ['sub2-1', 'sub2-2'] },
    { title: 'heading 3', data: ['sub3-1', 'sub3-2'] }
  ];

  render() {
    navigationView = (
      <View>
        <View style={{flexDirection:'row'}}>
          <Image style={{ width: 80, height: 80 }} source={require('./dp.png')}></Image>
          <Text style={styles.userName}>Abhishek Agrawal</Text>
        </View>
        <SectionList
         extraData={this.state}
          sections={this.sectionData}
          renderItem={({ item, index }) =>
            <TouchableOpacity onPress={()=>{
            this.setState({selectedType:item})
            this.Array_Items.forEach((forEachItem)=>{
              if((forEachItem.type==this.state.selectedType))
              this.setState({mailArray:forEachItem.mail})
              
            })
            alert("CLICKKK  "+JSON.stringify(this.state.mailArray));
          //  this.state.cloneArray=this.state.mailArray;
            // this.setState({mailArray})
            this.DrawerLayoutRef.closeDrawer()
            }}>
              {/* <Text>new Type :{this.state.selectedType}</Text> */}
                <Text key={index} style={styles.subHeading}>{item}</Text>
            </TouchableOpacity>
          }
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.heading}>{title}</Text>
          )}
        ></SectionList>
        <TouchableOpacity style={styles.logout}onPress={()=>{alert(' Successfully logged out')}}>
        <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        
      </View>

    )
    return (
      <DrawerLayoutAndroid
        ref={(ref) => (this.DrawerLayoutRef = ref)}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView }
      >
        <View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => { this.DrawerLayoutRef.openDrawer() }}>
              <Image style={{ width: 30, height: 30 }} source={require('./menu.png')}></Image>
            </TouchableOpacity>
            <Text style={{width:300,marginLeft:120,fontSize:20}}>{this.state.selectedType}</Text>
          </View>  

          {/* <Text>outside Drawer</Text> */}

                 
                   <FlatList
                    extraData={this.state}
                    data={ this.state.mailArray}  //this.state.mailArray   or   this.cloneArray
                    renderItem={({item})=>{
                      return(
                        // <Text>{item.date}</Text>
                        <View style={styles.mail }>
                       <View style={{flexDirection:'row'}}>
                         <Text style={styles.sender}>{item.from}</Text>
                         <Text style={styles.date}>{item.date}</Text>
                       </View>
                     
                      <Text>{item.subject}</Text>
                      <Text>{item.data}</Text>
                     
                      </View>
                      )
                    }}/>
                 
                   
          
          <TouchableOpacity onPress={()=>{alert('hii'+JSON.stringify(this.state.mailArray.reverse())), 
          cloneArray=this.state.mailArray.reverse()
         this.setState({mailArray: cloneArray})}}>  
          {/* this.setState({mailArray:mailArray.reverse()}) */}
                <Image style={styles.filter} source={require('./filter.png')}></Image>
          </TouchableOpacity>      
          </View>
      

      </DrawerLayoutAndroid>


    )
  }
}

const styles=StyleSheet.create({
  userName:{
    marginLeft: 20,
    marginTop: 25,
    fontSize:20,
  },
  logout:{
    position:'absolute',
    marginTop: 600,
  },
  logoutText:{
    fontSize:20,
    alignContent: 'center' ,
  },
  mail:{
    borderBottomWidth: .5,
  },
  sender:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop:5,
   
    width:300,
  },
  date:{
    width:100,
    marginTop:5,
  },
  filter:{
    // position:'absolute',
    height:50,
    width:50,
    // marginLeft: 200,
    // marginTop:300
    
  },
  haeding:{
    fontSize:30,
  },
  subHeading:{
    fontSize:15,
  }
})