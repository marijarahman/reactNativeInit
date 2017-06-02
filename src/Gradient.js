import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

export class Gradient extends Component {
    render() {
        return (
            <LinearGradient
                colors={this.props.colors}
                start={this.props.start}
                end={this.props.end}
                style={this.props.style}
            >
                {this.props.children}
            </LinearGradient>
        )
    }
}