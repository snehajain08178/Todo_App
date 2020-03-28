import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {HeaderIcon, Check} from './../components/icons';
import ProgressCircle from 'react-native-progress-circle';
import {Add} from './../components/icons';
import {addItem} from './../redux/actions/action';
import {connect} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import UUIDGenerator from 'react-native-uuid-generator';

class AddingItems extends React.Component {
  state = {
    title: '',
    item: '',
    itemlist: []
  };

  

  addingItemToList = () => {
    this.textInput.clear()
    this.setState({
      itemlist: [...this.state.itemlist,this.state.item]
    })

  };

  savingItemList = () => {
    const checkedItems = []
    for (let i = 0; i < this.state.itemlist.length; i++) {
      checkedItems.push('false');
    }
    this.props.addItem({title: this.state.title, list: this.state.itemlist,checkedItems: checkedItems});
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={{backgroundColor: 'white',flex: 1}}>
        <View style={styles.iconContainer}>
          <HeaderIcon />
          <View>
            <TouchableOpacity onPress={() => this.savingItemList()}><Check/></TouchableOpacity>
          </View>
        </View>
        <View style={styles.progressCircle}>
          <View style={styles.progressCircleIcon}>
            <ProgressCircle
              percent={44}
              radius={10}
              borderWidth={3}
              color="red"
              shadowColor="#999"
              bgColor="#fff"
            />
          </View>
          <View>
            <TextInput
              placeholder="Title"
              placeholderTextColor="darkgrey"
              style={styles.itemTitle}
              onChangeText={tie => {
                this.setState({
                  title: tie,
                });
              }}
              value={this.state.title}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: 60,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.progressCircle}>
          <View style={{paddingTop: 30, paddingBottom: 30}}>
            <TextInput
              placeholder="Enter item"
              placeholderTextColor="darkgrey"
              style={styles.itemTitle}
              ref={input => { this.textInput = input }}
              onChangeText={items => {
                this.setState({
                  item: items,
                });
              }}
              value={this.state.item}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: 60,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <View style={styles.addButtonView}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => this.addingItemToList()}>
            <Add />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{paddingTop: 40}}
          data={this.state.itemlist}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{paddingTop: 30, paddingHorizontal: 30}}>
              <View style={styles.flatlistContainer}>
                <View style={styles.textItem}>
                  <Text style={{fontSize: 20}}>{item}</Text>
                </View>
              </View>
            </View>
          )}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    padding: 50,
    justifyContent: 'space-between',
  },
  progressCircle: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    fontWeight: '900',
  },
  progressCircleIcon: {
    paddingTop: 10,
    paddingBottom: 50,
  },
  itemTitle: {
    fontSize: 30,
    paddingHorizontal: 30,
  },
  addButton: {
    borderWidth: 1,
    height: 50,
    width: 50,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonView: {
    alignItems: 'center',
    paddingTop: 40,
  },
  flatlistContainer: {
    borderTopColor: 'black',
    borderLeftColor: 'black',
    borderRightColor: 'red',
    borderBottomColor: 'red',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 2,
    shadowOpacity: 0.4,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textItem: {
    fontSize: 23,
    shadowOpacity: 0,
  },
  saveButton: {
    color: 'red',
    fontSize: 20
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    borderWidth: 2,
  }
});

const mapStateToProps = state => {
  return {
    data: state.mainReducer.itemList,
    c: state.mainReducer.counter,
    title: state.mainReducer.title,
    pages : state.mainReducer.pages
  };
};

const mapDispatchToProps = {
  addItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddingItems);
