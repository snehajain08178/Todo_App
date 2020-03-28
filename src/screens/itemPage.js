import React, { Component } from 'react';
import {Text, StyleSheet,View,FlatList, Button} from 'react-native';
import {connect} from 'react-redux';
import {Edit,CheckBox,ActivecheckBox} from './../components/icons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {makingChangesToPages} from './../redux/actions/action';


class ItemPage extends Component {
     state = {
         checkedItems: this.props.pages[this.props.route.params.id].checkedItems,
         title: this.props.pages.title,
     }
 
  settingCheckedItems = (index) => {
      if(this.state.checkedItems[index]=='true'){
        let editableComparatorIndexes = [...this.state.checkedItems];
        editableComparatorIndexes[index] = 'false'; 
        this.setState({
            checkedItems : editableComparatorIndexes
        })
      }
      else{
        let editableComparatorIndexes = [...this.state.checkedItems];
        editableComparatorIndexes[index] = 'true'; 
        this.setState({
            checkedItems : editableComparatorIndexes
        })
      }
  }

  savingItemsToRedux = () => {
      const tempPages = []
      let tempCheckedItems =[] 
      let tempList =[]
      let tempTitle = ''
      for(let i=0;i<this.props.pages.length;i++)
      {
          if(i==this.props.route.params.id){
            tempCheckedItems = this.state.checkedItems
            tempList = this.props.pages[i].list
            tempTitle = this.props.pages[i].title
            tempPages.push({checkedItems : tempCheckedItems , list: tempList , title: tempTitle})
          }
          else{
              tempPages.push(this.props.pages[i])
          }
      }
      console.log(this.props.pages[1])
      this.props.makingChangesToPages(tempPages)
        this.props.navigation.navigate('Home')
  }

    render(){
        
        return (
            <View style={{backgroundColor: this.props.route.params.Color,flex:1}}>
                
                <View style={styles.titleContainer}>
                    <View style={{flex: 6}} >
                        <Text style={styles.title}>{this.props.pages[this.props.route.params.id].title}</Text>
                    </View>
                </View>
        
                <View
          style={{
            marginLeft: 60,
            borderBottomColor: '#ab000d',
            borderBottomWidth: 2,
          }}
        />
        <FlatList
        style={{paddingTop: 40}}
        data={this.props.pages[this.props.route.params.id].list}
        keyExtractor={(item,index) => index.toString()}
        renderItem = {({item,index}) => (
            
            <View style={{paddingTop: 20, paddingHorizontal: 40}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{paddingTop: 16}}onPress={() => {
                    this.settingCheckedItems(index)    
                    }}>
                    {this.state.checkedItems[index]=='false' ? 
                    (<CheckBox />) : (<ActivecheckBox />)}
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 20,textDecorationLine: this.state.checkedItems[index]=='true'? 'line-through': 'none' ,color: this.state.checkedItems[index]=='true'? '#ab000d': 'white',fontSize: 30}}>{item}</Text>
                </View>
            </View>
           
        )}
        />
        <TouchableOpacity onPress={() => this.savingItemsToRedux()} style={{paddingBottom: 30,paddingTop: 30}}>
            <Text style={{color:'white',fontSize: 30,borderColor: '#ab000d',borderWidth:2,padding: 10,marginRight: 30,alignSelf: 'flex-end'}}>Save</Text>
        </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:  'red'
    },
    titleContainer: {
        paddingVertical: 20,
        flexDirection: 'row',
        paddingLeft: 30,
    },
    title: {
        color:'white',
        fontSize: 35,
        alignSelf: 'flex-end',
        paddingRight: 30
    },
    iconContainer: {
        paddingVertical: 16,
        flex: 1
    },
})

const mapStateToProps = state => {
    return {
        pages: state.mainReducer.pages,
        counter: state.mainReducer.counter
    }
}

const mapDispatchToProps = {
    makingChangesToPages,
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemPage);