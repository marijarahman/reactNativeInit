import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {DashboardElement} from './DashboardElement';
import {menu} from './MenuHelper';
import _ from 'lodash';

export class DashboardList extends Component {
    render() {
        const rows = _.chunk(menu, 3);

        return (
            <View>
                {rows.map((row, i) => {
                    return (
                        <View style={styles.container} key={i}>
                        {row.map((menuItem, k) => {
                            return <DashboardElement
                                title={menuItem.title} icon={menuItem.icon} counter={menuItem.counter} key={k}/>
                        })}
                    </View>
                    )
                }
            )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    }
});