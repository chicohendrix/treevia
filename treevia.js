// Treevia Application on React Native by Ritvik Kumar K 
import React from 'react';
import { FlatList, Stylesheet, Text, TextInput, View, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import _ from 'lodash';

export default class Treevia extends React.Component{

    state = {
        plantList: [
           { common_name: 'Evergreen oak', scientific_name: 'Quercus rotundifolia', family: 'Fagaceae', genus: 'Quercus', key: '1'},
           { common_name: 'Stinging nettle', scientific_name: 'Urtica dioica', family: 'Urticaceae', genus: 'Urtica', key: '2'},
           { common_name: 'Orchardgrass', scientific_name: 'Dactylis glomerata', family: 'Poaceae', genus: 'Dactylis', key: '3'},
           { common_name: 'Narrowleaf plantain', scientific_name: 'Plantago lanceolata', family: 'Plantaginaceae', genus: 'Plantago', key: '4'},
           { common_name: 'English oak', scientific_name: 'Quercus robur', family: 'Fagaceae', genus: 'Quercus', key: '5'},
           { common_name: 'Red fescue', scientific_name: 'Festuca rubra', family: 'Poaceae', genus: 'Festuca', key: '6'},
           { common_name: 'Creeping buttercup', scientific_name: 'Ranunculus repens', family: 'Ranunculaceae', genus: 'Ranunculus', key: '7'},
           { common_name: 'English oak', scientific_name: 'Quercus robur', family: 'Fagaceae', genus: 'Quercus', key: '8'},
           { common_name: 'Red fescue', scientific_name: 'Festuca rubra', family: 'Poaceae', genus: 'Festuca', key: '9'},
           { common_name: 'Creeping buttercup', scientific_name: 'Ranunculus repens', family: 'Ranunculaceae', genus: 'Ranunculus', key: '10'},
           { common_name: 'Evergreen oak', scientific_name: 'Quercus rotundifolia', family: 'Fagaceae', genus: 'Quercus', key: '11'},
           { common_name: 'Stinging nettle', scientific_name: 'Urtica dioica', family: 'Urticaceae', genus: 'Urtica', key: '12'},
           { common_name: 'Orchardgrass', scientific_name: 'Dactylis glomerata', family: 'Poaceae', genus: 'Dactylis', key: '13'},
           { common_name: 'Narrowleaf plantain', scientific_name: 'Plantago lanceolata', family: 'Plantaginaceae', genus: 'Plantago', key: '14'},
           { common_name: 'English oak', scientific_name: 'Quercus robur', family: 'Fagaceae', genus: 'Quercus', key: '15'},
           { common_name: 'Red fescue', scientific_name: 'Festuca rubra', family: 'Poaceae', genus: 'Festuca', key: '16'},
           { common_name: 'Creeping buttercup', scientific_name: 'Ranunculus repens', family: 'Ranunculaceae', genus: 'Ranunculus', key: '17'},
        ],
        loading: false,
        error: null,
        query: "",
        fullData: [],
    };


    handleSearch = text => {
        console.log("text", text);
        const formatQuery = text.toLowerCase();
        const date = _.filter(this.state.fullData, user => {
            return contains(common_name, formatQuery)
        })
        this.setState({ query: text});
    };

    render(){

        return(
            <View style={{
                flex: 1
            }}>
                {/* Header */}
                <View style={{
                    borderBottomWidth: 1,
                    borderColor: '#ddd',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 120
                }}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>                                                                                                     </Text> 

                    <Image style={{
                        width: 250,
                        height: 100
                    }}
                        source={{ uri: 'https://raw.githubusercontent.com/hcdd-340-spring-2021/Assignment-3-Treevia-Starter/master/App/Images/logo.png'}}
                    />

                </View>

                {/* SEARCH BAR */}
                <View style={{
                }}>
                    <TextInput
                        placeholder="Search"
                        style={{
                            margin: 15,
                            padding: 7,
                            paddingLeft: 40,
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 10,
                            fontSize: 16,
                            backgroundColor: "#D3D3D3"
                        }}
                        onChangeText={this.handleSearch}
                    />
                    <Ionicons
                        style={{
                            position: 'absolute',
                            left: 30,
                            top: 27
                        }}
                        name="ios-search"
                        size={20}
                        color= "#FF0000"
                    />
                </View>

                {/* LIST Treevia */}
                <FlatList
                    data={this.state.plantList}
                    renderItem={({ item }) => (
                        <View style={{
                            marginHorizontal: 10,
                            marginVertical: 5,
                            borderRadius: 10,
                            borderColor: '#ddd',
                            borderWidth: 1,
                            padding: 10
                        }}>
                            <Text style={{
                                fontSize:21,
                                fontWeight: 'bold',
                                marginBottom: 5
                            }}>{item.common_name}</Text>
                            <Text>{item.scientific_name}</Text>
                            <Text style={{
                                color: 'gray'
                            }}>{item.family}</Text>
                            <Text style={{
                                color: 'gray'
                            }}>{item.genus}</Text>
                        </View>
                    )} 
                    ListEmptyComponent={() =>
                        <View style= {{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text>Content Unable to Load</Text>
                        </View>
                    }
                />
                                    
            </View>
        )
    }
}