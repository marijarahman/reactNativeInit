import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Dimensions } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { Counter } from './Counter';
import icoMoonConfig from './assets/config.json';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const boxHeight = (height / 3) - 110;
const boxWidth = width / 3;

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon", "Icomoon.ttf");

export class DashboardElement extends Component {
    constructor() {
        super();
        this.state = {
            titleColor: {
                color: '#fff'
            }
        }
    }

    _onPress() {
        this.setState({
            titleColor: {
                color: '#28FFCA'
            }
        });
    }

    _onPressOut() {
        this.setState({
            titleColor: {
                color: '#fff'
            }
        });
    }

    _renderCounter() {
        if (this.props.counter) {
            return <Counter size={this.props.counter}/>
        }
    }

    render() {
        const { container, title } = styles;

        return (

            <TouchableHighlight onPress={() => {}}
                                underlayColor="transparent"
                                onShowUnderlay={this._onPress.bind(this)}
                                onHideUnderlay={this._onPressOut.bind(this)}>
                <View style={container}>
                    <Icon name={this.props.icon} size={50} color="#28FFCA"/>
                    <Text style={{...title, ...this.state.titleColor}}>{this.props.title.toUpperCase()}</Text>
                    {this._renderCounter()}
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = {
    container: {
        width: boxWidth,
        height: boxHeight,
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 14,
        flexGrow: 1,
        paddingTop: 10,
        textAlign: 'center'
    }
};