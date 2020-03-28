import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity,FlatList} from 'react-native';
import {HeaderIcon, Add} from '../components/icons';
import { connect } from 'react-redux';

class Home extends Component {

  colors = ['#ba68c8','#64b5f6','#388e3c']

  itemListPageOpen = (index,backgroundColor) => {
    this.props.navigation.navigate('ItemPage',{
      id : index,
      Color: backgroundColor
    });
  }

  render() {
    return (
      <View>
        <View style={styles.headerIcon}>
          <HeaderIcon />
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 50}}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: 'grey',
              height: 1,
              flex: 1,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              alignSelf: 'center',
              paddingHorizontal: 70,
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 34, fontWeight: 'bold'}}>Tasks</Text>
            <Text style={{fontSize: 34}}> Lists</Text>
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              height: 1,
              flex: 1,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={styles.addButtonView}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => this.props.navigation.navigate('AddingItems')}>
            <Add />
          </TouchableOpacity>
        </View>
        <Text style={styles.addListText}>Add List</Text>
        <FlatList
        style={{paddingVertical: 35,paddingHorizontal: 3}}
          data={this.props.pages}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item,index}) => (
            <TouchableOpacity onPress={() => this.itemListPageOpen(index, this.colors[index%this.colors.length])}>
              <View style={{padding: 8}}>
              <View style={{
                    backgroundColor: this.colors[index%this.colors.length],
                    height: 200,
                    width: 150, 
                    borderRadius: 8,
                    justifyContent:'center',
                    alignItems:'center'
              }}>
              <Text style={styles.flatlistText}>{item.title}</Text>
              </View>
            </View>
           </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerIcon: {
    padding: 30,
    paddingBottom: 50,
  },
  addButtonView: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  addButton: {
    borderWidth: 1,
    height: 50,
    width: 50,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addListText: {
    alignSelf: 'center',
  },
  flatlistText: {
    fontSize: 25,
    color: 'white',
  },
});

const mapStateToProps = state => {
  return{
    pages : state.mainReducer.pages,
    counter : state.mainReducer.counter
  };
}

export default connect(
  mapStateToProps
)(Home);
